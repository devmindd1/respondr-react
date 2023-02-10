import "./style..css"
import session_strategy_pic from "../../../../../../assets/images/Session_Strategy_img.png";
import {useEffect} from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

export default function UCASMBBlock1() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="container">
            <div className="container_inner">
                <div className="strategy_session_cont d-flex justify-content-space-between">
                    <div className="strategy_session_cont_block1 " data-aos="fade-right" data-aos-duration="1000">
                        <h2 className="f-500 fs-35">
                            Focus on what matters most
                            <span className="c-orange">for you business</span>
                        </h2>
                        <div className="f-500 fs-20 c-black">
                            Our small-medium sized business package lets you focus on what matters most your business.
                        </div>
                        <div className="f-500 fs-20 c-black">
                            Putting your reviews on autopilot saves valuable time that can be spent on improving your
                            business and getting ahead of the competition.
                        </div>
                        <button className="bc-orange c-black f-700 fs-20">Book a strategy session</button>
                    </div>
                    <div className="reviews_management_block2" data-aos="fade-left" data-aos-duration="3000">
                        <img src={session_strategy_pic} alt=""/>
                    </div>
                </div>
            </div>
        </div>

    )
}