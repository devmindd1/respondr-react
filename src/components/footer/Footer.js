import "./style.css"
import {NavLink, useNavigate} from "react-router-dom";
import logoFooter from "../../assets/images/LogoFooter.svg"


export default function Footer() {
    let navigate=useNavigate()
    return (
        <>
            <footer className="bc-black footer_cont">
                            <div className="footer_cont_inner d-flex justify-content-space-between align-items-center">
                                    <div className="d-flex fd-column footer_cont_logo_block">
                                        <img src={logoFooter} alt="" className="logoFooter"/>
                                        <div className="fs-14 f-500 c_grey">Lorem ipsum dolor sit amet consectetur. Eros
                                            amet augue quis leo ut hendrerit tristique. </div>
                                    </div>
                                    <div className="fs-16 d-flex align-items-center footer_items_block c-white f-500">
                                        <NavLink className={({isActive}) => isActive ? 'footer_item c-white' : 'footer_item c-white'} to="/">Features</NavLink>
                                        <NavLink className={({isActive}) => isActive ? 'footer_item c-white' : 'footer_item c-white'} to="">Use cases</NavLink>
                                        <NavLink className={({isActive}) => isActive ? 'footer_item c-white' : 'footer_item c-white'} to="">Pricing</NavLink>
                                        <NavLink className={({isActive}) => isActive ? 'footer_item c-white' : 'footer_item c-white'} to="">For Social</NavLink>
                                        <NavLink className={({isActive}) => isActive ? 'footer_item c-white' : 'footer_item c-white'} to="">For Reviews</NavLink>
                                        <NavLink className={({isActive}) => isActive ? 'footer_item c-white' : 'footer_item c-white'} to="">Contact</NavLink>
                                    </div>
                            </div>
                <div className="footer_cont_block2">

                </div>
            </footer>

            <footer className="bc-black footer_cont_mobile">
                        <div className="footer_cont_inner">
                            <div className="d-flex fd-column footer_cont_logo_block">
                                <img src={logoFooter} alt="" className="logoFooter"/>
                                <div className="fs-14 f-500 c_grey">Lorem ipsum dolor sit amet consectetur. Eros
                                    amet augue quis leo ut hendrerit tristique. </div>
                            </div>
                            <div className="fs-16 d-flex fd-column footer_items_block">
                                <div className="d-flex justify-content-center">
                                    <NavLink className={({isActive}) => isActive ? 'footer_item c-greenBlue' : 'footer_item c-white'} to="" >Features</NavLink>
                                    <NavLink className={({isActive}) => isActive ? 'footer_item c-greenBlue' : 'footer_item c-white'} to="">Use cases</NavLink>
                                    <NavLink className={({isActive}) => isActive ? 'footer_item c-greenBlue' : 'footer_item c-white'} to="">Pricing</NavLink>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <NavLink className={({isActive}) => isActive ? 'footer_item c-greenBlue' : 'footer_item c-white'} to="">For Social</NavLink>
                                    <NavLink className={({isActive}) => isActive ? 'footer_item c-greenBlue' : 'footer_item c-white'} to="">For Reviews</NavLink>
                                    <NavLink className={({isActive}) => isActive ? 'footer_item c-greenBlue' : 'footer_item c-white'} to="">Contact</NavLink>
                                </div>
                            </div>
                </div>
            </footer>
        </>
    )
}
