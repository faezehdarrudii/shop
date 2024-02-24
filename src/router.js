import React from "react";
import { Route,Routes} from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Contant from './component/Contact';

let routes=[
    {path:'/' , element:<Home/>},
    {path:'/about', element:<About/>},
    {path:'/contact',element:<Contant/>}
]

export default routes;