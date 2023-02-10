import "./style.css"
import HeaderDashboard from "../../../components/Dashboard/header_dashboard/HeaderDashboard";
import location_img from "../../../assets/images/Dashboard/configuration-control-dashboard.png"
import {useNavigate} from "react-router-dom";
import ResponseProfileWithDates
    from "../DashboardReview/components/response_profiles/components/ResponseProfileWithDatas/ResponseProfileWithDatas";
import React, {useState} from "react";

export default function Dashboard() {
    let navigate = useNavigate()
    let [data, setData] = useState([
        {
            flag: false
        }
    ])

    let _renderLocationAddress = () => {
        return data.map((item, index) => {
            return (
                item.flag ?
                    <button
                        className="location_button bc-purple dashboard_button justify-content-start align-items-center c-white fs-22 f-700 text-left"
                        onClick={() => navigate("/dashboard/dashboard-review")}>
                        <div className="line"></div>
                        Location Name
                        <p className="c-white fs-16 f-500">Address</p>
                        <img src={location_img} alt="" className="location_img"/>
                    </button>
                    :
                    <div className="add_location_cont">
                        <h2 className="c-purple fs-35 f-700">Add Location</h2>
                        <h3 className="fs-20 f-700 c-darkBlue">Place Details</h3>
                        <p className="fs-16 f-500 c_grey3">Provide some information about this place. If this place is added to maps, it will appear publicly.</p>
                        <div className="d-flex fd-column add_location_cont_content">
                            <div className="add_location_cont_inputs_block d-flex align-items-center justify-content-space-between">
                                <div className="add_location_cont_input_block">
                                    <label htmlFor="" className="f-600 fs-16 c-black">Place Name</label>
                                    <input type="text"/>
                                </div>
                                <div className="add_location_cont_input_block">
                                    <label htmlFor="" className="f-600 fs-16 c-black">Category</label>
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className="add_location_cont_inputs_block d-flex align-items-center">
                                <div className="add_location_cont_input_block">
                                    <label htmlFor="" className="f-600 fs-16 c-black">Address</label>
                                    <input type="text"/>
                                </div>
                                <div className="add_location_cont_input_block">
                                    <label htmlFor="" className="f-600 fs-16 c-black">Street</label>
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className="add_location_cont_inputs_block d-flex align-items-center">
                                <div className="add_location_cont_input_block">
                                    <label htmlFor="" className="f-600 fs-16 c-black">City</label>
                                    <input type="text"/>
                                </div>
                                <div className="add_location_cont_input_block">
                                    <label htmlFor="" className="f-600 fs-16 c-black">State</label>
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className="add_location_cont_inputs_block d-flex align-items-center">
                                <div className="add_location_cont_input_block">
                                    <label htmlFor="" className="f-600 fs-16 c-black">Country</label>
                                    <input type="text"/>
                                </div>
                                <div className="add_location_cont_input_block">
                                    <label htmlFor="" className="f-600 fs-16 c-black">Zipcode</label>
                                    <input type="text"/>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button className="add_location_save_btn c-white f-700 fs-16">Save</button>
                        </div>

                    </div>
            )
        })
    }
    return (
        <div className="main">
            <div>
                <HeaderDashboard/>
                <div className="container">
                    <div className="container_inner">
                        <div className="dashboard_cont d-flex justify-content-space-between">
                            <div className="d-flex justify-content-space-between dashboard_cont_buttons">
                                <button
                                    className="location_button bc-purple dashboard_button justify-content-start align-items-center c-white fs-22 f-700 text-left"
                                    onClick={() => navigate("/dashboard/dashboard-review")}>
                                    <div className="line"></div>
                                    Location Name
                                    <p className="c-white fs-16 f-500">Address</p>
                                    <img src={location_img} alt="" className="location_img"/>
                                </button>
                                {/*{_renderLocationAddress()}*/}
                                <button
                                    className="add_location_button bc-white dashboard_button justify-content-center align-items-center">
                                    <p className="c-purple fs-22 f-700 text-center d-flex justify-content-center align-items-center">Add
                                        Location <span className="c-purple fs-45 f-700">+</span></p>
                                </button>
                            </div>
                            <div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
