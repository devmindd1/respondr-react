import "./style.css"
import UCEAgencyBlock1 from "./components/use-agency-block1/UCEAgencyBlock1";
import UCEManageReviews from "../UseCasesEnterprice/components/use-casses-enterprice-manage-reviews/UCEManageReviews";
import UCEAgencyInformationBlock from "./components/uce-agency-information-blocks/UseCasesAgencyInformatinBlocks";


export default function UseCasesAgency() {
    return (
        <>
            <div className="useCasesEnterprise_cont d-flex fd-column">
                <UCEAgencyBlock1/>
                <UCEManageReviews/>
                <UCEAgencyInformationBlock/>
            </div>
        </>
    )
}