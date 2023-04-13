import React from "react";

function Navbar(){
    return(
       <>
       <div className="container mx-auto ">
        <nav className="navbar navbar-expand-md">
                <div className="container ">
                    <a className="navbar-brand nav-product" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav justify-content-center mx-auto">
                            <a className="nav-link" href="$">HOME</a>
                            <a className="nav-link" href="$">SHOP</a>
                            <a className="nav-link" href="$">LOOKBOOK</a>
                            <a className="nav-link" href="$">FEATURES</a>
                            <a className="nav-link" href="$">PAGES</a>
                            <a className="nav-link" href="$">BLOG</a>
                        </div>
                    </div>
                </div>
            </nav>
       </div>
       </>
    );
}
export default Navbar;