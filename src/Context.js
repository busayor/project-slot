import React, { Component } from 'react'
import items from './data'
// import Phones from './pages/Phones'

const ShopContext = React.createContext()

class ShopProvider extends Component {
    state = {
        phones: [],
        sortedPhones:[],
        filteredPhones:[],
        category:'all',
        subCategory:'all',
        ram:0,
        rom:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        installmentalPayment:false,
        warranty:false,
        featured:false,
        userData: null,
        cart: [],
        // cart: items,
        cartSubtotal: 0,
        cartTax: 0,
        cartTotal: 0
    }

    componentDidMount(){
        let phones = this.formatData(items)
        let featuredPhones = phones.filter(phone => phone.featured === true)
        let maxPrice = Math.max(...phones.map(item => item.price))
        let maxRam = Math.max(...phones.map(item => item.ram))
        // let maxSize = Math.max(...phones.map(item => item.size))

        // console.log(phones)

        this.setState({
            phones: phones,
            featuredPhones: featuredPhones,
            sortedPhones: phones,
            price: maxPrice,
            maxPrice,
            maxRam,
            //set userdata to null or to the users email on each refresh
            userData: localStorage.getItem('email') ? localStorage.getItem('email') : null
        })
    }

    //temporary phones
    setPhones = () => {
        let tempPhones= [];
        items.forEach(item => {
            const singleItem = {...item}
            tempPhones = [...tempPhones,singleItem]
        })
        this.setState(()=> {
            return {items:tempPhones}
        })
    }
    //temporary phones

    formatData(items){
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url)

            let phone = {...item.fields, images, id}
            return phone

        })
        return tempItems
    }

    getPhone = (slug) => {
        let tempPhones = [...this.state.phones]
        const phone = tempPhones.find((phone) => phone.slug === slug)
        return phone
    }

    getPhoneForCart = (id) => {
        let tempPhones = [...this.state.phones]
        const phone = tempPhones.find((phone) => phone.id === id)
        return phone
    }


    handleChange = (e) => {
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = e.target.name

        this.setState({
            [name]:value
        },this.filterPhones)
    }

    //set userdata
    handleUserData = (user) => {
        this.setState({
            userData: user
        })
    }

    // code to increment cart should come here
    handleCartUpdate = (id) => {
        let tempPhones = [...this.state.phones]
        // const index = tempPhones.indexOf(this.getPhoneForCart(id))
        // const phone = tempPhones[index]
        const phone = this.getPhoneForCart(id)
        phone.inCart = true
        phone.count = 1
        const price = phone.price
        phone.total = price

        //change value in actual state
        this.setState(()=>{
            return {
                phones: tempPhones,
                cart: [...this.state.cart,phone]
            }
        },
        () => {
            this.addTotals()
            // console.log(this.state)
        })
    }

    increment = id => {
        let tempCart = [...this.state.cart]
        const selectedPhone = tempCart.find(item=>item.id === id)
        const index = tempCart.indexOf(selectedPhone)
        const phone = tempCart[index]
    
        phone.count = phone.count + 1
        phone.total = phone.price * phone.count
    
        this.setState(()=>{
            return {
                cart: [...tempCart]
            }
        },()=>{
            this.addTotals()
        })
    }
    
    decrement = id => {
        let tempCart = [...this.state.cart]
        const selectedPhone = tempCart.find(item=>item.id === id)
        const index = tempCart.indexOf(selectedPhone)
        const phone = tempCart[index]
    
        phone.count = phone.count - 1

        if(phone.count === 0){
            this.removeItem(id)
        }
        else{
            phone.total = phone.price * phone.count
            this.setState(()=>{
                return {
                    cart: [...tempCart]
                }
            },()=>{
                this.addTotals()
            })
        }    
    }

    removeItem = id =>{
        let tempPhones = [...this.state.phones]
        let tempCart = [...this.state.cart]
    
        tempCart = tempCart.filter(item => item.id !== id)
    
        const index = tempPhones.indexOf(this.getPhoneForCart(id))
        let removedPhone = tempPhones[index]
        removedPhone.inCart = false
        removedPhone.total = 0
        removedPhone.count = 0
    
        this.setState(()=>{
            return{
                cart: [...tempCart],
                phones: [...tempPhones]
            }
        }, () => {
            this.addTotals()
        })
    }

    clearCart = () =>{
        this.setState(()=>{
            return {
                cart: []
            }
        }, ()=> {
        this.addTotals()
        this.setPhones()
        })
    }

    addTotals = () =>{
        let subTotal = 0
        this.state.cart.map(item =>(subTotal += item.total))
        const tempTax = subTotal * 0.1
        const tax = parseFloat(tempTax.toFixed(2))
        const total = subTotal + tax
    
        this.setState(()=>{
            return {
                cartSubtotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }

    filterPhones = () => {
        //why do we have to destructure this way???????/
        let {
            phones,
            category,
            subCategory,
            ram,
            rom,
            price,
            installmentalPayment,
            warranty
        } = this.state

        //assign all the phones to temp
        let tempPhones = [...phones]

        //transform values, that is change them from string to integer
        ram  = parseInt(ram)
        rom  = parseInt(rom)
        price  = parseInt(price)


        //filter by category
        if(category !== 'all'){
            tempPhones = tempPhones.filter(phone => phone.category === category)
        }

        //filter by sub-category
        if(subCategory !== 'all'){
            tempPhones = tempPhones.filter(phone => phone.subCategory === subCategory)
            // console.log(tempPhones)
        }

        //filter by ram
        if(ram !==1){
        tempPhones = tempPhones.filter(phone => phone.ram >= ram)
        }

        //filter by rom
        tempPhones = tempPhones.filter(phone => phone.rom >= rom)

        //filter by price
        tempPhones = tempPhones.filter(phone => phone.price <= price)

        // filter by innstallmental payment
        if(installmentalPayment){
            tempPhones = tempPhones.filter(phone => phone.installmentalPayment === true)
        }

        // filter by warranty
        if(warranty){
            tempPhones = tempPhones.filter(phone => phone.warranty === true)
        }
        //change state
        this.setState({
            sortedPhones:tempPhones
        })
    }

    handleReset = (e) => {
        let {phones} = this.state
        let maxPrice = Math.max(...phones.map(item => item.price))
        let minRam = Math.min(...phones.map(item => item.ram))
        this.setState({
            sortedPhones: phones,
            filteredPhones:[],
            category:'all',
            subCategory:'all',
            installmentalPayment:false,
            warranty:false,
            featured:false,
            price: maxPrice,
            ram: minRam
        })
    }


    render() {
        return (
            <>
                <ShopContext.Provider 
                    value={{ ...this.state,
                    getPhone: this.getPhone,
                    handleChange: this.handleChange,
                    handleReset: this.handleReset,
                    handleUserData: this.handleUserData,
                    handleCartUpdate: this.handleCartUpdate,
                    increment: this.increment,
                    decrement:this.decrement,
                    removeItem:this.removeItem,
                    clearCart: this.clearCart 
                }}
                >
                    {this.props.children}
                </ShopContext.Provider>
            </>
        )
    }
}

const ShopConsumer = ShopContext.Consumer


//I have no idea what we have just done here
//Higher order component - read up
export function withShopConsumer(Component){
    return function ConsumerWrapper(props){
        return <ShopConsumer>
            {value => <Component {...props} context={value}/>}
        </ShopConsumer>
    }
}

export { ShopProvider, ShopContext, ShopConsumer}