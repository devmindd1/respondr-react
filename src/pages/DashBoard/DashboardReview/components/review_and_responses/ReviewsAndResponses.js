import "./style.css"
import star_pic from "../../../../../assets/images/star.png"
import {useState} from "react";
import user_img from "../../../../../assets/images/Dashboard/user_img.png"

export default function ReviewsAndResponses() {
    let [reviews,setReviews]=useState([
        {
            id:1,
            img:user_img,
            name:"Full Name",
            reviewsCount:"3",
            createdAt:"03.10.20 at 10:53 AM",
            stars:"*****",
            time: "a week ago",
            clientReview:"It has survived not only five centuries, but also the leap" +
                " into electronic typesetting, remaining essentially unchanged. It was " +
                "popularised in the 1960s with the release of Letraset sheets containing " +
                "Lorem Ipsum passages, and more recently with desktop publishing software " +
                "like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            id:2,
            img:user_img,
            name:"Full Name",
            reviewsCount:"3",
            createdAt:"03.10.20 at 10:53 AM",
            stars:"*****",
            time: "a week ago",
            clientReview:"It has survived not only five centuries, but also the leap" +
                " into electronic typesetting, remaining essentially unchanged. It was " +
                "popularised in the 1960s with the release of Letraset sheets containing " +
                "Lorem Ipsum passages, and more recently with desktop publishing software " +
                "like Aldus PageMaker including versions of Lorem Ipsum.",
        },
    ])
    return (
        <div className="dashboard_navbars_cont">
            <div className="dashboard_navbars_header c-purple fs-20 f-700">
                Reviews and Responses
            </div>
            <div className="d-flex fd-column dashboard_navbars_cont_reviews_block">
                <h3 className="f-600 fs-16">Prime Toyota</h3>
                <p className="c_grey3 fs-10 dashboard_navbars_cont_reviews_address">758 Portland Rd, ME</p>
                <div className="d-flex align-items-center reviews_stars_block">
                    <div className="fs-16 c-orange">4.2</div>
                    <div>
                        <img src={star_pic} alt=""/>
                        <img src={star_pic} alt=""/>
                        <img src={star_pic} alt=""/>
                        <img src={star_pic} alt=""/>
                        <img src={star_pic} alt=""/>
                    </div>
                    <div className="fs-8"> <span> 1.5888 </span>reviews</div>
                </div>
            </div>
            <div className="reviews_comment_blocks">
                {
                    reviews.map((item,index)=>{
                        return(
                            <div className="reviews_comment_block d-flex align-items-start" key={item.id}>
                                <img src={item.img} alt=""/>
                                <div className="d-flex fd-column reviews_comment_block_block2">
                                    <h3 className="c-darkBlue fs-16 f-500">{item.name}</h3>
                                    <div className="d-flex c_grey3 fs-10">
                                        <div>{item.reviewsCount} reviews</div>
                                        <div style={{marginLeft: "10px"}}>Created at <span style={{marginLeft: "10px"}}>{item.createdAt}</span></div>
                                    </div>
                                    <div className="d-flex align-items-center c_grey3 fs-8 reviews_comment_block_block2_stars">{item.stars}<span style={{marginLeft: "10px"}}>{item.time}</span></div>
                                    <div className="fs-14 c-darkBlue">{item.clientReview}</div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}
