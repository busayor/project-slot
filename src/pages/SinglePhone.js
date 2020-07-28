import React, { Component } from 'react'
import defaultBcg from '../images/defaultBcg-2.jpg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {ShopContext} from '../Context'
import StyledHero from '../components/StyledHero'

export default class SinglePhone extends Component {
    constructor(props){
        super(props)
        //console.log(this.props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }    

    static contextType = ShopContext

    render() {
        const {getPhone} = this.context
        const phone = getPhone(this.state.slug)
        if(!phone){
            return<div className="error">
                <h3>No such phone could be found</h3>
                <Link to='/phones' className="btn-primary">
                    Back to store
                </Link>
            </div>
        }
        const { name, description, price, warranty, extras, installmentalPayment, images, ram, rom} = phone
        //we are doing this to destructure hence we get only other images
        const [mainImg,...defaultImg] = images
        console.log(defaultImg)
        return (
            <>
                <StyledHero img={mainImg || this.state.defaultBcg}>
                 <Banner title = {`${name} room`}>
                     <Link to="/phones" className="btn-primary">
                         Back to store
                     </Link>
                 </Banner>
                </StyledHero>
                <section className="single-room">
                <div className="single-room-images">
                    {/* {defaultImg.map((item, index) =>{
                        return <img key={index} src={item} alt={name}/>
                    })} */}
                    {images.map((item, index) =>{
                        return <img key={index} src={item} alt={name}/>
                    })}
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>info</h3>
                        <h6>price: N{price}</h6>
                        <h6>ram: {ram} GB</h6>
                        <h6>rom: {rom} GB</h6>
                        <h6>
                            {warranty?"12 months warranty inclusive":"no warranty included"}
                        </h6>
                        <h6>
                            {/* {breakfast ? "free breakfast included": ""} */}
                            {installmentalPayment && "Installmental payment is allowed"}
                        </h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                    <h6>extras</h6>
                    <ul className="extras">
                            {extras.map((item, index) =>{
                               return <li key={index}>- {item}</li>
                            })}
                    </ul>
            </section> 
            </>
        )
    }
}
