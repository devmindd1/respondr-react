import "./style.css"
import AOS from "aos";
import 'aos/dist/aos.css';
import get_ahead_general_pic from "../../../../assets/images/get_ahead_gen_pic.png"
import get_ahead_text_pic from "../../../../assets/images/get_ahead_text_pic.png"
import get_ahead_arrow_pic from "../../../../assets/images/get_ahead_arrow.png"
import {useEffect} from "react";

export default function GetAhead() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="container">
            <div className="container_inner">
                <div className="get_ahead_cont d-flex justify-content-space-between align-items-center">
                    <div className="get_ahead_cont_block1">
                        <div>
                            <img src={get_ahead_general_pic} alt="" className="get_ahead_general_pic"/>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="3000">
                            <img src={get_ahead_text_pic} alt="" className=" get_ahead_text_pic"/>
                        </div>
                    </div>
                    <div data-aos="fade-right"
                         data-aos-offset="300"
                         data-aos-easing="ease-in-sine" data-aos-duration="5000">
                        <img src={get_ahead_arrow_pic} alt="" className="get_ahead_arrow_pic"/>
                    </div>
                    <div className="get_ahead_cont_block2">
                        <h2 className="c-orange fs-45 f-500">Get Ahead</h2>
                        <div className="f-500 fs-16">
                            Stay on top of your competition with unparalleled customer service! See what customers like
                            so you can focus on that and what they don't like so you can quickly identify issues. As an
                            added bonus, by having more and better responses, your SEO will increase by 34% on average!
                            Making sure you are always ranking first on google searches
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
