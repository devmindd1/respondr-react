import "./style.css"
import notification_icon from "../../../assets/images/Dashboard/notification_icon.png"
import dashboard_logo from "../../../assets/images/Dashboard/dashboard_logo.png"
import {NavLink, useNavigate} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import arrow_down from "../../../assets/images/Dashboard/dashboard-arrow-down.png"
import arrow_up from "../../../assets/images/Dashboard/dashboard-arrow-up.png"

export default function HeaderDashboard() {
    let navigate=useNavigate()
    const [dropdownShow, setDropDawnShow] = useState(false)
    let [token, setToken] = useState(localStorage.getItem("jwtToken") || "");
    let closeHeaderDropDawnRef = useRef(null)
    let closeHeaderDropDawnContentRef = useRef(null)

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
    const handleClickOutSide = (e) => {
        let closeDropDawnRef = closeHeaderDropDawnRef;
        let contentRef = closeHeaderDropDawnContentRef;
        if (contentRef.current && !contentRef.current.contains(e.target) && !closeDropDawnRef.current.contains(e.target)) {
            setDropDawnShow(false)
        }
    }
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutSide, true)
        return () => {
            document.removeEventListener('mousedown', handleClickOutSide, true)
        }
    }, [])

    return (
        <div className="dashboard_header_container">
            <div className="dashboard_header_container_inner d-flex justify-content-space-between align-items-center">
            <div className="container">
            <div className="container_inner d-flex justify-content-space-between align-items-center">
                    <div>
                        <img src={dashboard_logo} alt="" onClick={()=>navigate("/dashboard")} className="dashboard-logo"/>
                    </div>
                   <div className="notification_settings_block d-flex align-items-center">
                       <div className="d-flex fd-column align-items-center dashboard_header_dropDown ">
                           <div className="d-flex align-items-end" style={{marginRight:"15px"}}>
                               <div className="username_btn" onClick={handleClickDropdown} ref={closeHeaderDropDawnRef} >User UserName</div>
                               {
                                   dropdownShow ?
                                       <img src={arrow_up} alt=""/>
                                       :
                                       <img src={arrow_down} alt=""/>
                               }

                           </div>
                           {
                               dropdownShow &&
                               <div
                                   className="d-flex fd-column dashboard_header_dropDown_content f-400" ref={closeHeaderDropDawnContentRef}>
                                   <NavLink
                                       className={({isActive}) => isActive ? 'dashboard_header_btn_active  c-purple' : 'dashboard_header_btn'}
                                       to="/">Home</NavLink>
                                   <NavLink
                                       className={({isActive}) => isActive ? 'dashboard_header_btn_active  c-purple' : 'dashboard_header_btn'}
                                       to="/dashboard">Dashboard</NavLink>
                                   <NavLink
                                       className={({isActive}) => isActive ? 'dashboard_header_btn_active c-purple' : 'dashboard_header_btn'}
                                       to="/settings">Settings</NavLink>
                               </div>
                           }

                       </div>
                       <div><img src={notification_icon} alt=""/></div>
                       <button className="settings_btn c-white fs-16 f-500" onClick={LogoutPage}>Log Out</button>
                   </div>
                    </div>
            </div>
            </div>
        </div>
    )
}
