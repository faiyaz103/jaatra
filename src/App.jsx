import React from 'react'
import { Route,
    createBrowserRouter,
    createRoutesFromElements,
    Router,
    RouterProvider
} from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import DestinationPage from './pages/DestinationPage';
import PackagesPage from './pages/PackagesPage';
import BlogPage from './pages/BlogPage';
import AboutUsPage from './pages/AboutUsPage';

const App = () => {
  
    const router = createBrowserRouter(

        createRoutesFromElements(
            <Route path='/' element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path='/destination' element={<DestinationPage/>}/>
                <Route path='/packages' element={<PackagesPage/>}/>
                <Route path='/blog' element={<BlogPage/>}/>
                <Route path='/about-us' element={<AboutUsPage/>}/>
            </Route>
        )
    );

    return <RouterProvider router={router}/>;
}

export default App