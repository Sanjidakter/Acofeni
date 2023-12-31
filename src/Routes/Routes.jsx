import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home/Home';
import Error from '../pages/Error/Error';

export const router = createBrowserRouter([
    {
     path:"/",
     element:<Main/>,
     children:[
         {
             path:'/',
             element:<Home/>
         }
     ]
    },
    {
        path:'*',
        element:<Error></Error>
    }
    
 ])