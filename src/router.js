import React from "react";
import { Route,Routes} from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Contant from './component/Contact';
import Shop from './component/Shop'

let routes=[
    {path:'/' , element:<Home/>},
    {path:'/about', element:<About/>},
    {path:'/contact',element:<Contant/>},
    {path:'/shop', element:<Shop/>}
]

export default routes;