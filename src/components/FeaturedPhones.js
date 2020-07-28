import React, { Component } from 'react'
import {ShopContext} from '../Context'
// import Loading from './Loading'
import Phone from '../components/Phone'
import Title from './Title'

export default class FeaturedPhones extends Component {

    static contextType = ShopContext
    
    render() {
         let {featuredPhones: phones} = this.context
         //console.log(phones)
        phones = phones && phones.map(phone => {
            return  <Phone key={phone.id} phone = {phone} />
        })
        return (
            <section className="featured-rooms">
                <Title title="Deals of the day"/>
                <div className="featured-rooms-center">
                    {phones}
                </div>
            </section>
        )
    }
}
