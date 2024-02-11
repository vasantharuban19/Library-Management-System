import React from 'react'
import DashboardAuthor from '../Components/Authors/DashboardAuthor'
import AddAuthor from '../Components/Authors/AddAuthor'
import EditAuthor from '../Components/Authors/EditAuthor'
import DashboardBook from '../Components/Books/DashboardBook'
import AddBook from '../Components/Books/AddBook'
import EditBook from '../Components/Books/EditBook'
import { Navigate } from 'react-router-dom'

const AppRoutes = [
    {
        path:'/',
        element:<DashboardBook/>,
        exact:true
    },
    {
        path:'/add-book',
        element:<AddBook/>,
        exact:true
    },
    {
        path:'/edit-book/:id',
        element:<EditBook/>,
        exact:true
    },
    {
        path:'/dashboard-author',
        element:<DashboardAuthor/>,
        exact:true
    },
    {
        path:'/add-author',
        element:<AddAuthor/>,
        exact:true
    },
    {
        path:'/edit-author/:id',
        element:<EditAuthor/>,
        exact:true
    },
    {
        path:'*',
        element:<Navigate to='/'/>,
        exact:false
    }
]

export default AppRoutes