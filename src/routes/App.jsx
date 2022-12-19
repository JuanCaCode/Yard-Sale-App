//modulos
import React from "react";
import {BrowserRouter, Routes, Route} from'react-router-dom';

//containers
import Layout from '../containers/Layout';
import Login from "../containers/Login";
import RecoveryPassword from "../containers/RecoveryPassword";
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
                    <Route exact path="/login" element={<Login />}  />
                    <Route exact path="/recovery-password" element={<RecoveryPassword />}  />
                    <Route path="*" element={<NotFound />}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}
export default App;