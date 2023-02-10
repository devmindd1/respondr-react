import "./style.css";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import review_responses_gen_pic from "../../../../assets/images/review_responses_gen_pic.png"
import review_responses_pic1 from "../../../../assets/images/review_responses_pic1.png"
import review_responses_pic2 from "../../../../assets/images/reviews_responses_pic2.png"
import review_responses_pic3 from "../../../../assets/images/reviews_responses_pic3.png"

export default function ReviewResponses() {
    useEffect(() => {
        AOS.init();
    }, [])
    let navigate = useNavigate()
    return (
        <div className="container">
            <div className="container_inner">
                <div className="review_responses_cont d-flex justify-content-space-between align-items-center">
                    <div className="review_responses_cont_block1">
                        <h2 className="c-orange fs-45 f-500">Review Responses</h2>
                        <div className="f-500 fs-16">
                            After creating a 'Response Profile' each review is hyper personalized to the requests made
                            within the profile. This makes sure every response is different and has a human touch. No
                            more premade responses that give users a bad impression, customers will be impressed with
                            your quick responses and genuine care.
                        </div>
                    </div>
                    <div className="review_responses_cont_block2">
                        <div  >
                            <img src={review_responses_gen_pic} alt="" className="review_responses_general_pic"/>
                        </div>
                        <div>
                            <img src={review_responses_pic1} alt="" className="review_responses_pic1"/>
                        </div>
                        <div>
                            <img src={review_responses_pic2} alt="" className="review_responses_pic2"/>
                        </div>
                        <div >
                            <img src={review_responses_pic3} alt="" className="review_responses_pic3"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
