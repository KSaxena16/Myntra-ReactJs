import React from 'react';
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const ProductCard =(props) =>{  
    return(
        <>
            <div className="col-md-3">
                <div class="productImage">
                    <img src={props.images} class="w-100" alt="productImage"/>
                </div>
                <div class="productMetaInfo">
                    <h3 class="productBrand">{props.brand}</h3>
                    <h4 class="product-product">{props.product}</h4>
                    <div class="productPrice">
                        <span>
                            <span class="productDiscountedPrice">Rs. {props.discountedPrice}</span>
                            <span class="productStrike"> Rs. {props.price}</span>
                        </span>
                        <span class="product-discountPercentage">{props.discount}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard