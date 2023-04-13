import React from "react";

function ProductListMen(props){
    return(
        <div>
            <div className="container mt-5">
                <h4 className="text-center" style={{fontWeight:"bold"}}>Men's</h4>
                <p className="text-center">Shop our new arrivals from established brands</p>
                <div className="row py-5">
                    {props.productsMen.map((product) =>(
                        <div key={product.id} className="col-12 col-md-3 p-0">
                            <img src={product.image} className="image-product mx-auto d-block"/>
                            <h3 className="text-center">{product.price}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default ProductListMen;