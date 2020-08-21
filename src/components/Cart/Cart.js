import React, { Component } from 'react'
// import Hero from '../Hero'
// import Banner from '../Banner'
// import {Link} from 'react-router-dom'
import Title from '../../components/Title'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import {ShopConsumer} from '../../Context'
import CartList from './CartList'
import CartTotals from './CartTotals'

export default class Cart extends Component {
    render() {
        return (
            <>
                {/* <Hero hero="roomsHero">
                <Banner title="Your Cart">
                    <Link to="/" className="btn-primary">return home</Link>
                </Banner>
            </Hero> */}
            <ShopConsumer>
                    {value =>{
                        const {cart} = value
                        if(cart.length > 0){
                            // console.log(cart)
                            return (
                                <>
                                <br/>
                                <Title name="your" title="cart"/>
                                <CartColumns/>
                                <CartList value={value}/>
                                <CartTotals value={value} history={this.props.history}/>
                                </>
                            )
                        }
                        else {
                           return (<EmptyCart/>)
                        }
                    }}
                </ShopConsumer>
            </>
        )
    }
}
