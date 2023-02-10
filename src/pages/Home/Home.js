import "./style.css"
import Header from "../../components/header/Header";
import CustomerReviews from "./components/customer_reviews/CustomerReviews";
import Footer from "../../components/footer/Footer";
import HomeBlock2 from "./components/home_block2/HomeBlock2";
import ForReviews from "./components/for_reviews/ForReviews";
import Customers from "./components/customers/Customers";
import WorkWith from "./components/work_with/WorkWith";
import InformationBlock from "./components/information_block/InformationBlock";


export default function Home() {

    return (
        <div className="main">
            <div>
                <Header isLogin={true}/>
                <CustomerReviews/>
                <HomeBlock2/>
                <ForReviews/>
                <Customers/>
                <WorkWith/>
                <InformationBlock/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
