import "./style.css"
import hours_weekly_pic from "../../../../assets/images/hours-service-pic.svg"
import brand_grow_pic from "../../../../assets/images/brand_grow_pic.svg"
import market_pic from "../../../../assets/images/with-line.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

export default function HomeBlock2() {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="container">
            <div className="container_inner">
                <div className="home_block_2_cont d-flex justify-content-space-between align-items-start">
                    <div className="home_block_2_cont_item1" data-aos="zoom-out-right">
                        <div className="home_block_2_cont_item_inner">
                            <p className="f-500 fs-35 text-center home_block_2_cont_item_title">10+ Hours Weekly</p>
                            <div className="f-500 fs-16 home_block_2_cont_item_desc">
                                Stop worrying about responding to your reviews and use Respondr! Our AI creates
                                original, human-like responses for any review saving hours that could be spent
                                elsewhere.
                            </div>
                            <img src={hours_weekly_pic} alt="" className="hours_weekly_pic"/>
                        </div>
                    </div>
                    <div className="home_block_2_cont_item2" data-aos="zoom-in-up">
                        <div className="home_block_2_cont_item_inner">
                            <p className="f-500 fs-35 text-center home_block_2_cont_item_title">Grow Your Brand</p>
                            <div className="f-500 fs-16 home_block_2_cont_item_desc">
                                Customer appreciate quick and consistent feedback! Using Respondr will improve your
                                online presence and customer loyalty.
                            </div>
                            <img src={brand_grow_pic} alt="" className="brand_grow_pic"/>
                        </div>
                    </div>
                    <div className="home_block_2_cont_item3" data-aos="zoom-in-left">
                        <div className="home_block_2_cont_item_inner">
                            <p className="f-500 fs-35 text-center home_block_2_cont_item_title">Understand Your Market</p>
                            <div className="f-500 fs-16 home_block_2_cont_item_desc">
                                Our advanced AI analyzes your reviews to let you know what's working and what isn't.
                                This way, you can understand how to quickly adapt your business to customer needs!
                            </div>
                            <img src={market_pic} alt="" className="market_pic"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
