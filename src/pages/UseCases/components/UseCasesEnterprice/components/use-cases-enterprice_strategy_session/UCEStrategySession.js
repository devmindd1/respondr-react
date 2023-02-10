import "./style.css"
import session_strategy_pic from "../../../../../../assets/images/Session_Strategy_img.png";
import {useEffect} from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

export default function UCEStrategySession() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="container">
            <div className="container_inner">
                <div className="strategy_session_cont d-flex justify-content-space-between">
                    <div className="strategy_session_cont_block1 " data-aos="fade-right" data-aos-duration="1000">
                        <h2 className="f-500 fs-35">
                            An enterprise-grade solution for optimizing customer experience and online reputation through a
                            unified view
                        </h2>
                        <div className="f-500 fs-20 c-black">
                            Our enterprise solutions are individually crafted for each organization to ensure proper AI review
                            responses and analytics.
                        </div>
                        <div className="f-500 fs-20 c-black">
                            Easily view all your locations in one omnichannel dashboard or hone in on individual locations.
                        </div>
                        <div className="f-500 fs-20 c-black">
                            No matter the size or reach of your enterprise, our solution gives the easiest platform to manage
                            your reputation.
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