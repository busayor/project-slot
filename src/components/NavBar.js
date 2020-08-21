import React, { useState, useContext } from 'react'
import logo from '../images/imagesSlot/logo-icon.png'
import { FaAlignRight,FaCartPlus } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import {ShopContext} from '../Context'

export default function NavBar () {

    const [isOpen, setIsOpen] = useState(false)

    //this userdata can be used on several components
    const {userData,handleUserData,cart} = useContext(ShopContext)

    // console.log(cart.length)
    


    const handleToggle = () => {
        setIsOpen(isOpen => !isOpen)
    }

    let history = useHistory()
    const handleLogout = (e) => {
        e.preventDefault()
        handleUserData(null)
        localStorage.setItem('email', null)
        localStorage.removeItem('email')
        history.push("/")
    }    

        // console.log(localStorage.getItem('email') + "navbar")
        // const email = localStorage.getItem('email')
        const email = userData

        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="Beach Resort" />
                        </Link>
                        <button 
                            type="button" 
                            className="nav-btn" 
                            onClick={handleToggle}
                        >
                            <FaAlignRight style={{ float: 'right' }} className="nav-icon" />
                        </button>
                    </div>
                    <ul className={isOpen?"nav-links show-nav":"nav-links"}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/phones">Shop</Link></li>
                        {/* {email === null &&  <li><Link to="/login">Login</Link></li>}
                        {email !== null &&  <li>Hi {email} <Link to="/logout">(Logout)</Link></li>} */}
                        {email === null ? <li><Link to="/login">Login</Link></li> : <li>Hi {email} 
                        <Link to="/" onClick={handleLogout}>(Logout)</Link></li>}
                    <li><Link to="/cart"><FaCartPlus />Cart ({cart.length})</Link></li>
                    </ul>
                </div>    
            </nav>
        )
}
