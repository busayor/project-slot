import React, { Component } from 'react'
import items from './data'

const ShopContext = React.createContext()

class ShopProvider extends Component {
    state = {
        phones: [],
        sortedPhones:[],
        filteredPhones:[],
        category:'all',
        ram:1,
        rom:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        installmentalPayment:false,
        warranty:false,
        featured:false,
    }

    componentDidMount(){
        let phones = this.formatData(items)
        let featuredPhones = phones.filter(phone => phone.featured === true)
        let maxPrice = Math.max(...phones.map(item => item.price))
        // let maxSize = Math.max(...phones.map(item => item.size))

        // console.log(phones)

        this.setState({
            phones: phones,
            featuredPhones: featuredPhones,
            sortedPhones: phones,
            price: maxPrice,
            maxPrice
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

    render() {
        return (
            <>
                <ShopContext.Provider 
                    value={{ ...this.state,
                    getPhone: this.getPhone,
                    handleChange: this.handleChange
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