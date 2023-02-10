import "./style.css";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import reviews_management_pic from "../../../../assets/images/reviews_management_pic.png"

export default function ReviewManagement() {
    useEffect(() => {
        AOS.init();
    }, [])
    let navigate = useNavigate()
    return (
        <div className="container">
            <div className="container_inner">
                <div className="customer_reviews_cont d-flex align-items-center justify-content-space-between">
                    <div className="customer_reviews_cont_block1 " data-aos="fade-right"  data-aos-duration="1000">
                        <p className="f-500 fs-45">The Next Generation Of<span
                            className="c-orange" style={{marginLeft:"5px"}}> Review Management</span></p>
                        <div className="d-flex fd-column reviews_management_block_reviews">
                            <h2 className="fs-35 c-orange f-500" data-aos="flip-left">Reviews</h2>
                            <div className="f-500 fs-20 c-black">Respondr's review platform provides a new generation management system. Not only does
                                it manage your reviews but responds to them for you with original, hyper personalized
                                responses
                            </div>
                        </div>
                        <div className="d-flex fd-column reviews_management_block_analytics">
                            <h2 className="fs-35 c-orange f-500" data-aos="flip-right">Analytics</h2>
                            <div className="f-500 fs-20 c-black">Analytics like never before. Easily view positive and negative trends, keyword
                                analysis, sentiment, and suggestions to improve your business based off incoming
                                reviews. All this so you can focus on what works and what doesn't within your business!
                            </div>
                        </div>
                    </div>
                    <div className="reviews_management_block2" data-aos="fade-left"  data-aos-duration="3000">
                        <img src={reviews_management_pic} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}
