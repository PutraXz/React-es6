import React from "react";
import image from "../img/jumbotron.png";
import "@fontsource/poppins";
function Jumbotron(){
    return(
        <>
        <section>
            <div className="container-fluid me-0 pe-0 home">
                <div className="row mx-0">
                    <div className="col-sm-12 col-md-6 col-lg-6 ps-md-5 text-jumbotron">
                        <div className="container mx-auto">
                            <h6 className="pt-5 ps-md-5" style={{fontWeight:"600"}}>NEW TREND</h6>
                            <h2 className="pt-2 ps-md-5 fs-1" style={{fontWeight:"bold"}}>COLLUSION</h2>
                            <p className="pt-1 ps-md-5 fs-5 mb-0" style={{fontWeight:"600"}}>An exclusive selection of this season's trends.</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 pe-0">
                        <img src={image} className="w-100 d-inline-block "/>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
export default Jumbotron;