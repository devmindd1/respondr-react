import "./style.css"
import {useNavigate} from "react-router-dom";
import work_with_pic from "../../../../assets/images/work_with_pic_back.png";
import work_with_pic1 from "../../../../assets/images/work_with_pic1.png";
import work_with_pic2 from "../../../../assets/images/work_with_pic2.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

export default function WorkWith() {

    useEffect(() => {
        AOS.init();
    }, [])

    let navigate = useNavigate()
    return (
        <div className="container">
            <div className="container_inner">
                <div className="workWith_cont d-flex justify-content-space-between align-items-center flex-wrap">
                    <div className="customer_reviews_animation_block workWith_cont_animation_block">
                        <img src={work_with_pic} alt=""/>
                        <div className="workWith_cont_animation1" data-aos="fade-right" >
                            <img src={work_with_pic1} alt=""/>
                        </div>
                        <div className="workWith_cont_animation2" data-aos="fade-left"  data-aos-duration="3000"  >
                            <img src={work_with_pic2} alt=""/>
                        </div>
                    </div>
                    <div className="workWith_cont_block1" data-aos="fade-down"
                         data-aos-easing="linear"
                         data-aos-duration="1000">
                        <p className="f-600 fs-45 c-orange">Who do we work with?</p>
                        <div className="fs-20 f-500 workWith_content_block">
                            <p>Respondr easily integrates with any size business or agency!</p>
                            <p>Small and big business. Using our web app enables you to quickly respond to reviews
                                whether you have one location or thousands. Easily manage all your locations from one
                                dashboard or zone in one location! The use cases are endless!</p>
                            <p>Agency Give your customers quick and outstanding review responses so you can focus on
                                other things. Doesn't matter if you have one client or a million, we can handle your
                                reviews.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
