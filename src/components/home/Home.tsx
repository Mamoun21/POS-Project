import React from 'react'; 
import {BrowserRouter , Route} from 'react-router-dom';
import NavBar from './navbar/NavBar';
import POS from './pos/POS';
import Product from './product/Product';
import Categries from './categories/Categories';
const Home = () =>{
    return <div >
    <BrowserRouter>
     <NavBar />
     <Route path = "/home/pos" component = {POS} />
     <Route path = "/home/product" component = {Product} />
     <Route path = "/home/categries" component = {Categries}/>
     </BrowserRouter>
    </div>
}
export default Home;