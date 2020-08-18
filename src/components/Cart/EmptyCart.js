import React from 'react'
import {Link} from 'react-router-dom'

export default function EmptyCart() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-10 mx-auto text-center text-title">
                    <h1>your cart is currently empty</h1>
                </div>
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-centre">
                <Link to="/phones">
                    <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button">
                        back to store
                    </button>
                </Link>
                </div>
            </div>
        </div>
    )
}
