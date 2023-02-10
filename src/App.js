import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom"
import {useEffect, useState} from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Pricing from "./pages/Pricing/Pricing";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import BlogArticle from "./pages/BlogArticle/BlogArticle";
import Dashboard from "./pages/DashBoard/Dashboard/Dashboard";
import DashboardReview from "./pages/DashBoard/DashboardReview/DashboardReview";
import Features from "./pages/Features/Features";
import UseCases from "./pages/UseCases/UseCases";
import ForReviews from "./pages/ForReviews/ForReviews";
import PrivateRoute from "./components/routing/PrivateRoute";
import MyAccount from "./pages/MyAccount/MyAccount";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/"  element={<Home />}/>
            <Route path="/features"  element={<Features />}/>
            <Route path="/use-cases"  element={<UseCases />}/>
            <Route path="/pricing"  element={<Pricing />}/>
            <Route path="/for-reviews"  element={<ForReviews />}/>
            <Route path="/contact"  element={<Contact />}/>
            <Route path="/blog"  element={<Blog />}/>
            <Route path="/blog-article"  element={<BlogArticle />}/>
            <Route path="/login"  element={<Login />}/>
            <Route path="/signup"  element={<SignUp />}/>


            <Route element={<PrivateRoute/>}>
                {/*<Route path="/my-account"  element={<MyAccount />}/>*/}
                <Route path="/dashboard"  element={<Dashboard />}/>
                <Route path="/dashboard/dashboard-review"  element={<DashboardReview />}/>
            </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
