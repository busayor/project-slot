import React from 'react'
import { FaCartPlus } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import defaultImg from '../images/imagesSlot/Apple/iphone11pro-2.jpg'

export default function Phone({phone}) {
    const {name,slug,price,images} = phone
    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defaultImg} alt="single room"/>
                <div className="price-top">
                   <h6>N{price}</h6> 
                   <p>Add to cart</p>
                </div>
                {/* <div className="addCart-top">
                   <h6>N{price}</h6> 
                </div> */}
                <Link to={`/phones/${slug}`} className="btn-primary room-link">
                    Features
                </Link>
            </div>
            <p className="room-info">{name} | <Link to=""><FaCartPlus/></Link></p>
        </article>
    )
}


// WHat happens if we do not do this???????
Phone.propTypes = {
    phone:PropTypes.shape({
        name:PropTypes.string.isRequired,
        price:PropTypes.number.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired
    })
}
