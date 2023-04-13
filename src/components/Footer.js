import React from "react";

function Footer(){
    return(
        <>
            <footer>
                <div className="container">
                    <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 mt-md-5">
                        <div>
                            <h3 style={{fontWeight:500}}>Logo</h3>
                            <p className="mb-30 footer-desc">We earned a reputation of being good at what we do.
                                Let us take your online shop to new dimension in 
                                success!</p>
                        </div>
                    </div>
                    <div className="col-xl-2 offset-xl-1 col-lg-2 col-md-6 mt-md-5">
                        <div className="">
                        <h4 style={{fontWeight:500}}>SHOP</h4>
                        <ul className="list-unstyled">
                            <li>
                            <a href="#" className="text-decoration-none nav-link">Shop</a>
                            </li>
                            <li>
                            <a href="#" className="text-decoration-none nav-link">Collection</a>
                            </li>
                            <li>
                            <a href="#" className="text-decoration-none nav-link">Outlet</a>
                            </li>
                            <li>
                            <a href="#" className="text-decoration-none nav-link">Lookbook</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 mt-md-5">
                        <div>
                        <h4 style={{fontWeight:500}}>HELP</h4>
                        <ul className="list-unstyled">
                            <li>
                            <a href="#" className="text-decoration-none nav-link">FAQ</a>
                            </li>
                            <li>
                            <a href="#" className="text-decoration-none nav-link">Privecy Policy</a>
                            </li>
                            <li>
                            <a href="#" className="text-decoration-none nav-link">Tearms and conditions</a>
                            </li>
                            <li>
                            <a href="#" className="text-decoration-none nav-link">Return and Exchanges</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 mt-md-5">
                        <div>
                        <h4>Address</h4>
                        <ul className="list-unstyled">
                            <li>
                            <p className="pb-0">+017367234</p>
                            </li>
                            <li>
                            <p><a href="#">JhoneDoe@gmail.com</a>
                            </p>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="d-flex justify-content-center">
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Footer;