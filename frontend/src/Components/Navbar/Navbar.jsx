import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/Shopcontext'

const Navbar = () => { 
    const [menu, setMenu] = useState("shop");
    const [accountDropdown, setAccountDropdown] = useState(false);
    const { total_no_of_item } = useContext(ShopContext);

    const toggleAccountDropdown = () => {
        setAccountDropdown(!accountDropdown);
    };

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>Clothify</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => setMenu("shop")}>
                    <Link to='/'>Shop</Link>{menu === "shop" ? <hr/> : null}
                </li>
                <li onClick={() => setMenu("Women")}>
                    <Link to='/women'>Women</Link>{menu === "Women" ? <hr/> : null}
                </li>
                <li onClick={() => setMenu("Men")}>
                    <Link to='/men'>Men</Link>{menu === "Men" ? <hr/> : null}
                </li>
                <li onClick={() => setMenu("Kids")}>
                    <Link to='/kids'>Kids</Link>{menu === "Kids" ? <hr/> : null}
                </li>
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token') ? (
                    <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/'); }}>
                        Log out
                    </button>
                ) : (
                    <>
                        <button onClick={toggleAccountDropdown}>Account</button>
                         
                        {accountDropdown && (
                            <div className="account-dropdown">
                                <Link to='/login'><div className='acc'>Login</div></Link><hr></hr>
                                <Link to='/Signin'><div className='acc'>Signin</div></Link>
                            </div>
                        )}
                    </>
                )}
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{total_no_of_item()}</div>
            </div>
        </div>
    );   
};

export default Navbar;
