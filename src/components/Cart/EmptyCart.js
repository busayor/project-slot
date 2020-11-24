import React from 'react'
import {Link} from 'react-router-dom'

export default function EmptyCart() {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-10 mx-auto text-center text-title">
                    <h1>your cart is currently empty</h1>
                </div>
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8">
                <Link to="/phones">
                    <button className="btn btn-outline-danger text-uppercase mb-5 px-5" type="button">
                        back to store
                    </button>
                </Link>
                </div>
            </div>
        </div>
    )
}
