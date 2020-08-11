import React, { Component } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'

export default class Cart extends Component {
    render() {
        // console.log(localStorage.getItem('email'))
        return (
            <>
                <Hero hero="roomsHero">
                <Banner title="User Area">
                    <Link to="/" className="btn-primary">return home</Link>
                </Banner>
            </Hero>
            </>
        )
    }
}
