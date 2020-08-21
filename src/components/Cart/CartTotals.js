import React from 'react'
import {Link} from 'react-router-dom'
import PayPalButton from './PayPalButton'
import PaystackButton from './PaystackButton'

export default function CartTotals({value, history}) {
    const email = localStorage.getItem('email')
    const {cartSubtotal, cartTax, cartTotal, clearCart} = value
    return (
       <>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={()=>clearCart()}>
                                clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title">
                                subtotal:
                            </span>
                            <strong>$ {cartSubtotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                cart tax:
                            </span>
                            <strong>$ {cartTax}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                cart total:
                            </span>
                            <strong>$ {cartTotal}</strong>
                        </h5>
                        {email !== null 
                        ? <>
                            <PayPalButton total={cartTotal} clearCart={clearCart} history={history} /> 
                            <PaystackButton total={cartTotal} clearCart={clearCart} email={email}/> 
                        </>
                        : <Link to="/login">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button">
                                click here to login
                            </button>
                        </Link>
                        }

                        {/* <PayPalButton total={cartTotal} clearCart={clearCart} history={history} /> */}
                    </div>
                </div>
            </div>
       </>
    )
}
