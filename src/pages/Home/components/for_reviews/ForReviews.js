import "./style.css"
import VButton from "../../../../cors/button/v_button";
import for_reviews_pic from "../../../../assets/images/for_reviews_back_pic.png";
import for_reviews_pic_animation1 from "../../../../assets/images/for_reviews_pic_animation1.png"
import for_reviews_pic_animation2 from "../../../../assets/images/for_reviews_pic_animation2.png"
import for_reviews_pic_animation3 from "../../../../assets/images/for_reviews_pic_animation3.png"
import {useNavigate} from "react-router-dom";
import {gsap} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {useEffect, useRef} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


// gsap.registerPlugin(ScrollTrigger);

export default function ForReviews() {
    // let img1 = useRef(null);
    // let img2 = useRef(null);
    //
    // useEffect(() => {
    //     const tl = gsap.timeline().fromTo(img1.current, {left: 200}, {left: -100})
    //     ScrollTrigger.create({
    //         trigger: ".gsap-1",
    //         animation: tl,
    //         duration: 5000,
    //         delay: 2,
    //         x:-100,
    //         start: 'top bottom',
    //         toggleActions: "play none none reverse",
    //         // end: '+=3000 bottom',
    //         ease: "bounce",
    //         // pin:false,
    //         // markers:false,
    //         scrub: .1, // I like the 1 sec delay, set to true for exact anime on scroll
    //     })
    // }, [])
    // //
    //
    // useEffect(()=>{
    //     const tl1 = gsap.timeline().fromTo(img2.current, {top: -30}, {bottom: 0})
    //     ScrollTrigger.create({
    //         trigger: ".gsap-1",
    //         animation: tl1,
    //         duration: 500,
    //         ease: "bounce",
    //         delay: 2,
    //         start: 'top bottom',
    //         toggleActions: "play none none reverse",
    //         y:500,
    //         // end: '+=3000 bottom',
    //         // pin:false,
    //         // markers:false,
    //         scrub: .1, // I like the 1 sec delay, set to true for exact anime on scroll
    //     })
    // }, [])


    // setInterval(() => {
    //
    //     if(document.querySelector('.gsap-1').offsetTop  < window.scrollY && true){
    //         console.log('ok');
    //     }
    //     // if(document.querySelector('.gsap-1').offsetBottom  < window.scrollY && true){
    //     //     console.log('ok');
    //     // }
    //
    // })

    // const imageRef = useRef(null);
    // useEffect(() => {
    //     gsap.to("#thirdCircle", {
    //         x: 100,
    //         duration: 2,
    //         ease: "bounce"
    //     });
    // }, []);

    useEffect(() => {
        AOS.init();
    }, [])

    let navigate = useNavigate()
    return (
        <div className="container gsap-1">
            <div className="container_inner">
                <div className="for_reviews_cont d-flex justify-content-space-between align-items-center flex-wrap">
                    <div className="for_reviews_pic_animations_block">
                        <img src={for_reviews_pic} alt="" className="for_reviews_pic"/>
                        <div className="for_reviews_pic_animation1" data-aos="fade-right" >
                            <img src={for_reviews_pic_animation1} alt=""/>
                        </div>
                        <div className="for_reviews_pic_animation2" data-aos="zoom-out-up"  data-aos-duration="2000"  >
                            <img src={for_reviews_pic_animation2} alt=""/>
                        </div>
                        <div className="for_reviews_pic_animation3" data-aos="fade-up"
                             data-aos-duration="3000"  >
                            <img src={for_reviews_pic_animation3} alt=""/>
                        </div>
                    </div>
                    <div className="for_reviews_cont_block" data-aos="flip-down"  data-aos-duration="1000" >
                        <p className="f-600 fs-45 c-orange"  >For Reviews</p>
                        <p className="fs-45 f-500 for_reviews_title2">A better way to talk with your customers.</p>
                        <div className="fs-20 f-500 for_reviews_content_block">
                            <p>Respondr uses AI technology to quickly and accurately analyze customer reviews and
                                provide original responses as if it were a human!</p>
                            <p>Our responses improve customer satisfaction and build brand loyalty. You can save time
                                and resources by automating customer service responses, while still maintaining a
                                personal and helpful touch.</p>
                            <p>Businesses can effectively manage their online reputation and drive more positive
                                customer experiences.</p>
                            <p>Did I mention our analytics? We look through all of your reviews and give reports on
                                customer sentiment, positive trends, negative trends, keyword analysis, and suggested
                                improvements. In turn, you don't have to search through hundreds of reviews to see what
                                works and what doesn't!</p>
                            <p>Click to try and see how powerful Respondr's AI can be!</p>
                        </div>
                        <div className="d-flex for_reviews_btn_block ">
                            <div className="learn_more_btn bc-grey fs-20 f-700">
                                <VButton title={"Sign Up Free"} onPress={() => navigate("")}/>
                            </div>
                            <div className="click_here_btn bc-orange fs-20 f-700">
                                <VButton title={"Click here"} onPress={() => navigate("")}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
