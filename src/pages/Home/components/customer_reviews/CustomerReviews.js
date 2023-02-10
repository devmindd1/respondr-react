import "./style.css"
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import reviews_main_pic from "../../../../assets/images/reviews_main_pic.jpeg"
import youtube_icon1 from "../../../../assets/images/reviews_youtube_icon1.png"
import youtube_icon2 from "../../../../assets/images/reviews_youtube_icon2.png"
import tiktok_icon from "../../../../assets/images/reviews_tiktok_icon.png"
import facebook_icon from "../../../../assets/images/reviews_facebook_icon.png"
import instagram_icon from "../../../../assets/images/reviews_instagram_icon.png"

export default function CustomerReviews() {
    useEffect(() => {
        AOS.init();
    }, [])
    let navigate = useNavigate()
    return (
        <div className="container">
            <div className="container_inner">
                <div className="customer_reviews_cont d-flex align-items-end justify-content-space-between">
                    <div className="customer_reviews_cont_block1">
                        <p className="f-500 fs-45">Customer Reviews, <span className="c-orange">without the hassle</span></p>
                        <p className="fs-20 f-500 c-greenBlue">Respondr is a new, powerful AI that helps businesses, of any size, respond to their online
                            customer reviews and see detailed analytics.</p>
                        <div className="fs-20 f-500" style={{marginTop:"31px"}}>Our AI technology is designed to provide personalized and helpful responses that can
                            improve customer satisfaction and build brand loyalty. No matter the review, we got you
                            covered. So you can focus on what most important.
                        </div>
                        <div className="d-flex customer_reviews_btn_block"  data-aos="fade-right"  data-aos-duration="3000">
                            <input type="email" placeholder="Email Address"/>
                            <button className="fs-20 f-700 start_free_btn bc-orange">Start Free Trial</button>
                          {/*  <div className="learn_more_btn bc-grey fs-20 f-700"  >*/}
                          {/*      <VButton title={"Learn more"} onPress={() => navigate("")}/>*/}
                          {/*  </div>*/}
                          {/*<div className="click_here_btn bc-orange fs-20 f-700" data-aos="fade-left"  data-aos-duration="3000">*/}
                          {/*    <VButton title={"Click here"} onPress={() => navigate("")}/>*/}
                          {/*</div>*/}
                        </div>
                    </div>
                    <div className="customer_reviews_animation_block">
                        <img src={reviews_main_pic} alt="" className="reviews_main_pic"/>
                        <div className="customer_reviews_pic_animation1"
                             data-aos="fade-right"
                        >
                            <img src={tiktok_icon} alt=""/>
                        </div>
                        <div className="customer_reviews_pic_animation2"
                             data-aos="fade-down"  data-aos-duration="2000"
                        >
                            <img src={youtube_icon1} alt=""/>
                        </div>
                        <div className="customer_reviews_pic_animation3"
                             data-aos="fade-up"
                             data-aos-duration="3000"
                        >
                            <img src={youtube_icon2} alt=""/>
                        </div>
                        <div className="customer_reviews_pic_animation4"
                             data-aos="zoom-out-down"
                             data-aos-duration="3000"
                        >
                            <img src={facebook_icon} alt=""/>
                        </div>
                        <div className="customer_reviews_pic_animation5"
                             data-aos="fade-right"
                             data-aos-offset="300"
                             data-aos-easing="ease-in-sine"
                             data-aos-duration="3000"
                        >
                            <img src={instagram_icon} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
