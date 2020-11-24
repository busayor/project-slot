import React from 'react'
import logo from '../images/imagesSlot/logo-icon.png'
import {Link} from 'react-router-dom'
import '../Footer.css'

export default function Footer() {
    return (
        <>
            <div class="footer">
                <div class="container">
                    {/* <div class="row ">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            <div class="ft-logo">
                                <img src="https://easetemplate.com/free-website-templates/cointrade/images/logo.png" alt=""/>
                                <Link to="/">
                                    <img src={logo} alt="Beach Resort" />
                                </Link>
                            </div>
                        </div>
                    </div> */}
                    <hr class="footer-line"/>
                    <div class="row ">
                        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 ">
                            <div class="footer-widget ">
                                <div class="footer-title">Company</div>
                                <ul class="list-unstyled">
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Support</a></li>
                                    <li><a href="#">Press</a></li>
                                    <li><a href="#">Legal & Privacy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 ">
                            <div class="footer-widget ">
                                <div class="footer-title">Quick Links</div>
                                <ul class="list-unstyled">
                                    <li><a href="#">News</a></li>
                                    <li><a href="#">Contact us</a></li>
                                    <li><a href="#">FAQ</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 ">
                            <div class="footer-widget ">
                                <div class="footer-title">Social</div>
                                <ul class="list-unstyled">
                                    <li><a href="#">Twitter</a></li>
                                    <li><a href="#">Google +</a></li>
                                    <li><a href="#">Linked In</a></li>
                                    <li><a href="#">Facebook</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-12 col-sm-6 col-6 ">
                            <div class="footer-widget ">
                                <h3 class="footer-title">Subscribe Newsletter</h3>
                                <form>
                                    <div class="newsletter-form">
                                        <input class="form-control" placeholder="Enter Your Email address" type="text"/>
                                        <button class="btn-primary" type="submit">Go</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                 </div>
                </div>
            </div>
        </>
    )
}
