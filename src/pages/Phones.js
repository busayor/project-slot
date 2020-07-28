import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import PhonesContainer from '../components/PhonesContainer'

export default function Phones() {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner title="our store">
                    <Link to="/" className="btn-primary">return home</Link>
                </Banner>
            </Hero>
         <PhonesContainer />
        </>
    )
}
