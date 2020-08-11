import React, { Component } from 'react'
import items from './data'
import Phones from './pages/Phones'

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
        userData: null
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
                    handleUserData: this.handleUserData
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