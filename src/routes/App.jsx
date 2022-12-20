//modulos
import React from "react";
import {BrowserRouter, Routes, Route} from'react-router-dom';

//pages
import Layout from '../containers/Layout';
import PassRecoverySent from "../pages/PassRecoverySent";
import NewPassword from "../pages/NewPassword";
import Login from '../pages/Login';
import CreateAccount from '../pages/CreateAccount';
import MyAccount from '../pages/MyAccount';
import Checkout from '../pages/Checkout';
import MisOrdenes from '../pages/MisOrdenes';
import Home from '../pages/Home';
import NotFound from "../pages/NotFound";

//componentes
import MenuDesktop from "../components/MenuDesktop";
import MenuMobile from "../components/MenuMobile";

//containers
import ProductDetail from "../containers/ProductDetail";
import ShoppingCart from "../containers/ShoppingCart";

//estilos
import '../styles/global.scss';

const App = ()=>{
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path ="/" element={<Home />} />
                    <Route exact path="/email-sent" element={<PassRecoverySent />}  />
                    <Route exact path="/new-password" element={<NewPassword />}  />
                    <Route exact path="/login" element={<Login />}  />
                    <Route exact path="/create-account" element={<CreateAccount />}  />
                    <Route exact path="/my-account" element={<MyAccount />}  />
                    <Route exact path="/checkout" element={<Checkout />}  />
                    <Route exact path="/mis-ordenes" element={<MisOrdenes />}  />
                    <Route exact path="/menu-desktop" element={<MenuDesktop />}  />
                    <Route exact path="/menu-mobile" element={<MenuMobile />}  />
                    <Route exact path="/product-detail" element={<ProductDetail />}  />
                    <Route exact path="/shopping-cart" element={<ShoppingCart />}  />
                    <Route path="*" element={<NotFound />}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}
export default App;