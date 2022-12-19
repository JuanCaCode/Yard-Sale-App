//modulos
import React from "react";
import {BrowserRouter, Routes, Route} from'react-router-dom';

//containers
import Layout from '../containers/Layout';
import EmailSentPassRecovery from "../containers/EmailSentPassRecovery";
import RecoveryPassword from "../containers/RecoveryPassword";
import Login from '../containers/Login';
import CreateAccount from '../containers/CreateAccount';
import EditAccount from '../containers/EditAccount';
import MiOrden from '../containers/MiOrden';
import MisOrdenes from '../containers/MisOrdenes';

//componentes
import MenuDesktop from "../components/MenuDesktop";
import MenuMobile from "../components/MenuMobile";
import ProductDetail from "../components/ProductDetail";
import ShoppingCart from "../components/ShoppingCart";

//pages
import Home from '../pages/Home';
import NotFound from "../pages/NotFound";

//estilos
import '../styles/global.scss';

const App = ()=>{
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path ="/" element={<Home />} />
                    <Route exact path="/emailsent" element={<EmailSentPassRecovery />}  />
                    <Route exact path="/recovery-password" element={<RecoveryPassword />}  />
                    <Route exact path="/login" element={<Login />}  />
                    <Route exact path="/create-account" element={<CreateAccount />}  />
                    <Route exact path="/edit-account" element={<EditAccount />}  />
                    <Route exact path="/mi-orden" element={<MiOrden />}  />
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