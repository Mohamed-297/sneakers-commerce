import logo from "../images/logo.svg"
import cart from "../images/icon-cart.svg"
import user from "../images/image-avatar.png"
import exit from "../images/icon-close.svg"
import dele from "../images/icon-delete.svg"
import { useContext, useState } from "react"
import { MyContext } from "../App"

export default function Navbar() {
    const [showLinks, setShowLinks] = useState(false)
    const [showDropCart, setShowDropCart] = useState(false)
    const[,,,,prodsInCart,setProdsInCart]=useContext(MyContext)

    const styleDrop={
        height:prodsInCart.length>0?"fit-content":"30vh"
    }
    function handleShowDropCart() {
        setShowDropCart(prevShow => !prevShow)
    }
    function showLinksMob() {
        setShowLinks(prevShow => !prevShow)
    }
    function handleCloseLinks() {
        setShowLinks(false)
    }    
    function handleDelete(id){
        setProdsInCart(prodsInCart.filter(prod=>id!==prod.id))
    }
    let totalCount
    if(prodsInCart.length>0){
        totalCount=prodsInCart.reduce((acc,pro)=>acc=acc+pro.count,0)
    }
    function handleCheckOut(){
        setProdsInCart([])
    }
    return (
        <nav className="navbar">
            {showLinks && <div className="show-hamburger">
                <img onClick={handleCloseLinks} className="close" src={exit} alt="exit" />
                <ul className="links-mob">
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>}
            <div onClick={showLinksMob} className="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <img className="logo" src={logo} alt="Logo" />
            <ul className="links">
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <div className="user-cart">
                <div className="cartImage">

                    <img onClick={handleShowDropCart} className="cart" src={cart} alt="cart" />
                    {
                        prodsInCart&&prodsInCart.length>0&&
                        <p className="totalCount">{totalCount}</p>
                    }
                </div>
                {showDropCart && <div style={styleDrop} className="drop-cart">
                    <p className="cart-header">cart</p>
                        {
                            prodsInCart&&prodsInCart.length>0?
                            <div className="productsInCart">
                                {prodsInCart.map(pro=><div className="eachProd" key={pro.id}>
                                    <img className="imageInCart" src={pro.img} alt="productImage" />
                                    <div className="prodData">
                                        <p className="titleInCart">{pro.title}</p>

                                        <p className="price-amount">${pro.price} x {pro.count} <span className="cost">${pro.price*pro.count}</span> </p>
                                    </div>
                                    <img onClick={()=>handleDelete(pro.id)} src={dele} className="deleteIcon" alt="deleteIcon" />
                                </div>)}
                                <button onClick={handleCheckOut} className="checkOut">
                                    Checkout
                                </button>
                            </div>
                            :
                            <div className="noData"><p>Your cart is empty</p></div>
                        }       
                        
                </div>}
                <img className="user" src={user} alt="user" />

            </div>
        </nav>
    )
}