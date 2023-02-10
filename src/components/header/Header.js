import "./style.css"
import {NavLink, useNavigate} from "react-router-dom"
import logo from "../../assets/images/logo.png"
import {useEffect, useRef, useState} from "react";
import VButton from "../../cors/button/v_button";
import axios from "axios";
import config from "../../config";
import menu_burger from "../../assets/images/menu-burger.png"
import arrow_up from "../../assets/images/login-userName-arrow-up.png";
import arrow_down from "../../assets/images/login-userName-arrow-down.png";


export default function Header(props) {
    let navigate = useNavigate()
    const [activePage, setActivePage] = useState(false)
    const [dropdownShow, setDropDawnShow] = useState(false)
    const [dropdownUserShow, setDropDawnUserShow] = useState(false)
    let [token, setToken] = useState(localStorage.getItem("jwtToken") || "");
    let closeHeaderDropDawnRef = useRef(null)
    let closeHeaderLoginDropDawnRef = useRef(null)
    let closeHeaderDropDawnContentRef = useRef(null)
    let closeHeaderLoginDropDawnContentRef = useRef(null)

    const LogoutPage = () => {
            localStorage.removeItem("jwtToken");
            navigate("/login")
        // let token = localStorage.getItem('jwtToken')
        // console.log(token);
        // axios.get(`${config.url}/logout`, {
        //     headers: {
        //         'authorization': `${token}`
        //     }
        // })
        //     .then(response => {
        //         console.log(response, "logout");
        //         localStorage.removeItem("refreshToken")
        //         localStorage.removeItem("jwtToken")
        //         localStorage.removeItem("token")
        //         navigate("/login")
        //     })
        //     .catch(error => {
        //         console.log(error.response)
        //     })
    }

    const handleClickDropdown = () => {
        setDropDawnShow(!dropdownShow)
    }
    const handleClickUserNameDropdown = () => {
        setDropDawnUserShow(!dropdownUserShow)
    }
    const handleClickOutSide = (e) => {
        let closeDropDawnRef = closeHeaderDropDawnRef;
        let contentRef = closeHeaderDropDawnContentRef;
        let closeLoginDropDawnRef = closeHeaderLoginDropDawnRef;
        let contentLoginRef = closeHeaderLoginDropDawnContentRef;
        if (contentRef.current && !contentRef.current.contains(e.target) && !closeDropDawnRef.current.contains(e.target)) {
            setDropDawnShow(false)
        }
        if (contentLoginRef.current && !contentLoginRef.current.contains(e.target) && !closeLoginDropDawnRef.current.contains(e.target)) {
            setDropDawnUserShow(false)
        }
    }
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutSide, true)
        return () => {
            document.removeEventListener('mousedown', handleClickOutSide, true)
        }
    }, [])

    return (
        <>
            {!token ?
                <header className="bc-white header_login_container">
                    <div className="container">
                        <div className="container_inner">
                            <div
                                className="header_container_inner d-flex align-items-center justify-content-space-between">
                                <div onClick={() => navigate("/")}><img src={logo} alt="" className="logo"/></div>
                                <div
                                    className="d-flex align-items-center justify-content-space-between header_login_content f-500">
                                    <NavLink
                                        className={({isActive}) => isActive ? 'features_btn  c-orange' : 'features_btn '}
                                        to="/features">Features</NavLink>
                                    <NavLink
                                        className={({isActive}) => isActive ? 'useCases_btn  c-orange' : 'useCases_btn'}
                                        to="/use-cases">Use cases</NavLink>
                                    <NavLink
                                        className={({isActive}) => isActive ? 'pricing_btn c-orange' : 'pricing_btn'}
                                        to="/pricing">Pricing</NavLink>
                                    <NavLink
                                        className={({isActive}) => isActive ? 'reviews_btn c-orange' : 'reviews_btn'}
                                        to="/for-reviews">For Reviews</NavLink>
                                    <NavLink
                                        className={({isActive}) => isActive ? 'contact_us_btn  c-orange' : 'contact_us_btn'}
                                        to="/contact">Contact</NavLink>
                                    <NavLink
                                        className={({isActive}) => isActive ? 'blog_btn   c-orange' : 'blog_btn'}
                                        to="/blog">Blog</NavLink>
                                </div>
                                <div className="d-flex align-items-center log_reg_block">
                                    <button className="login_btn fs-16 f-700 c-white"
                                            onClick={() => navigate("/login")}>Sign In
                                    </button>
                                    <button className="signUp_btn fs-16 f-700 c-white"
                                            onClick={() => navigate("/signup")}>Sign Up
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                :
                <header className="bc-white header_login_container header_logout_container">
                    <div className="container">
                        <div className="container_inner">
                            <div
                                className="header_container_inner d-flex align-items-center justify-content-space-between">
                                <div onClick={() => navigate("/")}><img src={logo} alt="" className="logo"/>
                                </div>
                                <div
                                    className="d-flex align-items-center justify-content-space-between  header_login_content f-500">
                                    <NavLink
                                        className={({isActive}) => isActive ? 'features_btn  c-orange' : 'features_btn '}
                                        to="/features">Features</NavLink>
                                    <NavLink
                                        className={({isActive}) => isActive ? 'useCases_btn  c-orange' : 'useCases_btn'}
                                        to="/use-cases">Use cases</NavLink>
                                    <NavLink
                                        className={({isActive}) => isActive ? 'pricing_btn c-orange' : 'pricing_btn'}
                                        to="/pricing">Pricing</NavLink>
                                    <NavLink
                                        className={({isActive}) => isActive ? 'reviews_btn c-orange' : 'reviews_btn'}
                                        to="/for-reviews">For Reviews</NavLink>
                                    <NavLink
                                        className={({isActive}) => isActive ? 'contact_us_btn  c-orange' : 'contact_us_btn'}
                                        to="/contact">Contact</NavLink>
                                    <NavLink
                                        className={({isActive}) => isActive ? 'blog_btn   c-orange' : 'blog_btn'}
                                        to="/blog">Blog</NavLink>
                                </div>
                                <div className="d-flex align-items-center log_reg_block">
                                    <div className="d-flex fd-column align-items-center login_header_dropDown">
                                        <div className="d-flex align-items-end" style={{marginRight:"20px"}}>
                                            <div className="username_btn" onClick={handleClickUserNameDropdown} ref={closeHeaderLoginDropDawnRef}>User UserName</div>
                                            {
                                                dropdownUserShow ?
                                                    <img src={arrow_up} alt=""/>
                                                    :
                                                    <img src={arrow_down} alt=""/>
                                            }

                                        </div>
                                        {
                                            dropdownUserShow &&
                                            <div
                                                className="d-flex fd-column header_login_dropDown_content f-400" ref={closeHeaderLoginDropDawnContentRef}>
                                                <NavLink
                                                    className={({isActive}) => isActive ? 'username_item_btn_active c-orange' : 'username_item_btn'}
                                                    to="/">Home</NavLink>
                                                <NavLink
                                                    className={({isActive}) => isActive ? 'username_item_btn_active  c-orange' : 'username_item_btn'}
                                                    to="/dashboard">Dashboard</NavLink>
                                                <NavLink
                                                    className={({isActive}) => isActive ? 'login_header_btn_active c-orange' : 'username_item_btn'}
                                                    to="/settings">Settings</NavLink>
                                            </div>
                                        }

                                    </div>
                                    <button className="logout_btn fs-16 f-700 c-white"
                                            onClick={LogoutPage}>Log Out
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            }
            {
                !token ?
                    <header className="bc-white header_login_container_mobile">
                        <div className="container">
                            <div className="container_inner d-flex justify-content-space-between">
                                <div className="header_mobile_container_inner ">
                                    <div className="d-flex justify-content-space-between align-items-center">
                                        <div onClick={() => navigate("/")}><img src={logo} alt="" className="logo"/>
                                        </div>
                                        <div className="d-flex fd-column align-items-center header_dropDown ">
                                            <img src={menu_burger} alt="" className="menu_burger" onClick={handleClickDropdown} ref={closeHeaderDropDawnRef}/>
                                            {
                                                dropdownShow &&
                                                <div
                                                    className="d-flex fd-column header_dropDown_content f-400" ref={closeHeaderDropDawnContentRef}>
                                                    <NavLink
                                                        className={({isActive}) => isActive ? 'features_btn  c-orange' : 'features_btn '}
                                                        to="/features">Features</NavLink>
                                                    <NavLink
                                                        className={({isActive}) => isActive ? 'useCases_btn  c-orange' : 'useCases_btn'}
                                                        to="/use-cases">Use cases</NavLink>
                                                    <NavLink
                                                        className={({isActive}) => isActive ? 'pricing_btn c-orange' : 'pricing_btn'}
                                                        to="/pricing">Pricing</NavLink>
                                                    <NavLink
                                                        className={({isActive}) => isActive ? 'reviews_btn c-orange' : 'reviews_btn'}
                                                        to="/for-reviews">For Reviews</NavLink>
                                                    <NavLink
                                                        className={({isActive}) => isActive ? 'contact_us_btn  c-orange' : 'contact_us_btn'}
                                                        to="/contact">Contact</NavLink>
                                                    <NavLink
                                                        className={({isActive}) => isActive ? 'blog_btn   c-orange' : 'blog_btn'}
                                                        to="/blog">Blog</NavLink>
                                                    <NavLink className={({isActive}) => isActive ? "login_btn_mobile c-greenBlue": "login_btn_mobile"} to="/Login">Log in</NavLink>
                                                    <NavLink className={({isActive}) => isActive ? "login_btn_mobile c-greenBlue": "login_btn_mobile"} to="/Register">Register</NavLink>
                                                </div>
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    :
                    <header className="bc-white header_logout_mobile_container">
                        <div className="container">
                            <div className="container_inner d-flex justify-content-space-between">
                                <div className="header_mobile_container_inner d-flex justify-content-space-between">
                                    <div onClick={() => navigate("/")}><img src={logo} alt="" className="logo"/></div>
                                    <div className="d-flex align-items-center header_dropDown">
                                        <img src={menu_burger} alt="" className="menu_burger" onClick={handleClickDropdown} ref={closeHeaderDropDawnRef}/>
                                        {
                                            dropdownShow &&
                                            <div className="d-flex fd-column header_dropDown_content f-400" ref={closeHeaderDropDawnContentRef}>
                                                <NavLink
                                                    className={({isActive}) => isActive ? 'features_btn  c-orange' : 'features_btn '}
                                                    to="/features">Features</NavLink>
                                                <NavLink
                                                    className={({isActive}) => isActive ? 'useCases_btn  c-orange' : 'useCases_btn'}
                                                    to="/use-cases">Use cases</NavLink>
                                                <NavLink
                                                    className={({isActive}) => isActive ? 'pricing_btn c-orange' : 'pricing_btn'}
                                                    to="/pricing">Pricing</NavLink>
                                                <NavLink
                                                    className={({isActive}) => isActive ? 'reviews_btn c-orange' : 'reviews_btn'}
                                                    to="/for-reviews">For Reviews</NavLink>
                                                <NavLink
                                                    className={({isActive}) => isActive ? 'contact_us_btn  c-orange' : 'contact_us_btn'}
                                                    to="/contact">Contact</NavLink>
                                                <NavLink
                                                    className={({isActive}) => isActive ? 'blog_btn   c-orange' : 'blog_btn'}
                                                    to="/blog">Blog</NavLink>
                                                <div className="logout_btn" onClick={LogoutPage}>Log Out</div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>

            }


        </>
    )
}
