import "./style.css"
import HeaderDashboard from "../../../components/Dashboard/header_dashboard/HeaderDashboard";
import DashboardReviewBlock1 from "./components/dashboard_review_block1/DashboardReviewBlock1";
import DashboardReviewBlock2 from "./components/dashboard_review_block2/DashboardReviewBlock2";
import DashboardReviewBlock3 from "./components/dashboard_review_block3/DashboardReviewBlock3";


export default function DashboardReview() {
    return (
        <div className="main">
            <div style={{background:" #F8F8F8"}}>
                <HeaderDashboard/>
                <div className="dashboard_review_cont">
                <div className="container">
                    <div className="container_inner d-flex fd-column">
                        <div className="d-flex justify-content-space-between dashboard_review_cont_blocks">
                            <DashboardReviewBlock1/>
                            <DashboardReviewBlock2/>
                        </div>
                        <div>
                            <DashboardReviewBlock3/>
                        </div>
                    </div>
                    </div>
                </div>

        </div>
    <div>

    </div>
</div>
)
}