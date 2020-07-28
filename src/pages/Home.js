import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
// import Services from '../components/Services'
import FeaturedPhones from '../components/FeaturedPhones'

export default function Home() {
    return (
        <>
        <Hero>
            <Banner 
                title="Luxurious Phones at affordable prices"
                subtitle="We don't back out after sales!"
            >
                <Link to="/phones" className="btn-primary">
                    Go to store
                </Link>
            </Banner>
        </Hero>
        {/* <Services /> */}
        <FeaturedPhones />
        </>
    )
}


