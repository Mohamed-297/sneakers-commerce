import mainImage1 from "../images/image-product-1.jpg"
import mainImage2 from "../images/image-product-2.jpg"
import mainImage3 from "../images/image-product-3.jpg"
import mainImage4 from "../images/image-product-4.jpg"
import subImage1 from "../images/image-product-1-thumbnail.jpg"
import subImage2 from "../images/image-product-2-thumbnail.jpg"
import subImage3 from "../images/image-product-3-thumbnail.jpg"
import subImage4 from "../images/image-product-4-thumbnail.jpg"
import minus from "../images/icon-minus.svg"
import plus from "../images/icon-plus.svg"
import cart from "../images/icon-cart.svg"
import next from "../images/icon-next.svg"
import prev from "../images/icon-previous.svg"
import exitScroll from "../images/icon-close.svg"
import { useContext, useEffect, useState } from "react"
import { MyContext } from "../App"
export default function Main() {
    const arrOfSubImages = [subImage1, subImage2, subImage3, subImage4]
    const arrOfMainImages = [mainImage1, mainImage2, mainImage3, mainImage4]
    const [showMainImage, setShowMainImage] = useState(mainImage1)
    const [showMainImageScroll, setShowMainImageScroll] = useState()
    const [showOverLay, setShowOverLay] = useState(false)
    const [counter,setCounter,price,,prodsInCart,setProdsInCart]=useContext(MyContext)
    useEffect(()=>{
        setShowMainImageScroll(showMainImage)
    },[showMainImage])


    function handleDisplayImages(subImage) {
        for (let i = 0; i < arrOfSubImages.length; i++) {
            if (subImage === arrOfSubImages[i]) {
                setShowMainImage(arrOfMainImages[i])
                break;
            }
        }
    }
    function handleDisplayImagesScroll(subImageScroll) {
        for (let i = 0; i < arrOfSubImages.length; i++) {
            if (subImageScroll === arrOfSubImages[i]) {
                setShowMainImageScroll(arrOfMainImages[i])
                // return arrOfSubImages[i]
                break;
                
            }
        }
    }


    function handleOverLay() {
        setShowOverLay(true)
    }
    function handleCloseOverlay() {
        setShowOverLay(false)
    }
    function handleNextImage(mainImageScroll) {
        for (let i = 0; i < arrOfMainImages.length; i++) {
            if (mainImageScroll === arrOfMainImages[i]) {
                const nextIndex = (i + 1) % arrOfMainImages.length;
                setShowMainImageScroll(arrOfMainImages[nextIndex]);
                break;
            }
        }

    }
    function handlePrevImage(mainImageScroll) {
        for (let i = 0; i < arrOfMainImages.length; i++) {
            if (mainImageScroll === arrOfMainImages[i]) {
                const prevIndex = (i - 1+arrOfMainImages.length) % arrOfMainImages.length; 
                setShowMainImageScroll(arrOfMainImages[prevIndex]);

                break;
            }
        }
    }
    function increaseAmount(){
        setCounter(prevCount=>prevCount+1)
    }
    function decreaseAmount(){
        if(counter!==0){
            setCounter(prevCount=>prevCount-1)
        }
    }
    function handleItemsInCart(){
        if(counter>0){
            setProdsInCart(prevProd=>([...prevProd,{id:prevProd.length,img:showMainImage,title:"Fall Limited Edition Sneakers",price:price,count:counter}]))
        }
        else{
            setProdsInCart(prevProd=>[...prevProd])
        }
        setCounter(0)
    }
    console.log(prodsInCart)
    
    console.log(counter*price)
    return (
        <main>
            {showOverLay && <div className="overlay"></div>}

            <div className="container">

                {showOverLay && <div className="scrollImages">
                    <span className="exitScroll">
                        <img onClick={handleCloseOverlay} src={exitScroll} alt="exit" className="exitScrollImages" />
                    </span>
                    <img src={showMainImageScroll} alt="mainProduct" className="mainImageScroll" />
                    <img onClick={() => handleNextImage(showMainImageScroll)} src={next} alt="next" className="nextScroll" />
                    <img onClick={() => handlePrevImage(showMainImageScroll)} src={prev} alt="prev" className="prevScroll" />
                    <div className="subImagesScroll">
                        <div className="subScroll1">
                            <img onClick={() => handleDisplayImagesScroll(subImage1)} src={subImage1} alt="sub-Image" />
                        </div>
                        <div className="subScroll2">
                            <img onClick={() => handleDisplayImagesScroll(subImage2)} src={subImage2} alt="sub-Image" />
                        </div>
                        <div className="subScroll3">
                            <img onClick={() => handleDisplayImagesScroll(subImage3)} src={subImage3} alt="sub-Image" />
                        </div>
                        <div className="subScroll4">
                            <img onClick={() => handleDisplayImagesScroll(subImage4)} src={subImage4} alt="sub-Image" />
                        </div>
                    </div>
                </div>}
                    
                <div className="allImages">
                    <img onClick={handleOverLay} src={showMainImageScroll} alt="mainProduct" className="mainImage" />
                    <img onClick={() => handleNextImage(showMainImageScroll)} src={next} alt="next" className="next" />
                    <img onClick={() => handlePrevImage(showMainImageScroll)} src={prev} alt="prev" className="prev" />
                    <div className="subImages">
                        <div className="sub1">
                            <img onMouseEnter={() => handleDisplayImages(subImage1)} src={subImage1} alt="sub-Image" />
                        </div>
                        <div className="sub2">
                            <img onMouseEnter={() => handleDisplayImages(subImage2)} src={subImage2} alt="sub-Image" />
                        </div>
                        <div className="sub3">
                            <img onMouseEnter={() => handleDisplayImages(subImage3)} src={subImage3} alt="sub-Image" />
                        </div>
                        <div className="sub4">
                            <img onMouseEnter={() => handleDisplayImages(subImage4)} src={subImage4} alt="sub-Image" />
                        </div>
                    </div>
                </div>
                <div className="details">
                    <h4 className="company">Sneaker Company</h4>
                    <h1 className="title">Fall Limited Edition Sneakers</h1>
                    <p className="sneakersDetails">These low-profile sneakers are your perfect casual wear companion.
                        Featuring a durable rubber outer sale, they'll withstand everything the weather can offer</p>
                    <div className="priceAndDiscount">
                        <div className="price-details">
                            <h2 className="priceDiscounted">${price}</h2>
                            <p className="discount">50%</p>
                        </div>
                        <p className="originalPrice">$250.00</p>
                    </div>
                    <div className="buttons">
                        <div className="counter">
                            <img onClick={decreaseAmount} className="minus" src={minus} alt="" />
                            <p className="count">{counter}</p>
                            <img onClick={increaseAmount} className="plus" src={plus} alt="" />
                        </div>
                        <div onClick={handleItemsInCart} className="addToCart">
                            <img src={cart} alt="Cart" className="cartToAdd" />
                            <p>Add to cart</p>
                        </div>

                    </div>
                </div>
            </div>

        </main>
    )
}