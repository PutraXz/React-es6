import React, {useState, useEffect} from "react";
import Navbar from "./components/Navbar";
import ProductListMen from "./components/ProductListMen";
import ProductListWomen from "./components/ProductListWomen";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import axios from "axios";

function App(){
  const [productsMen, setProductsMen] = useState([]);
  const [productsWomen, setProductsWomen] = useState([]);
  useEffect(()=> {
    const fetctData = async () =>{
      try {
        const [res1, res2] = await Promise.all([
          axios.get("https://fakestoreapi.com/products/category/men's clothing"),
          axios.get("https://fakestoreapi.com/products/category/women's clothing?limit=4")
        ]);
        setProductsMen(res1.data);
        setProductsWomen(res2.data);
      } catch (error) {
        console.log(error)
      }
    };
    fetctData();
  }, []);
  return(
    <>
      <Navbar />
      <Jumbotron/>
      <ProductListMen title="Daftar Produk Pria" productsMen={productsMen} />
      <ProductListWomen title="Daftar Produk Wanita" productsWomen={productsWomen}/>
      <Footer/>
      <my-custom-element />
    </>
  );
}

export default App;
