import "./style.css"
import UCESMBBlock1 from "./components/use-cases-SMB-block1/UCASMBBlock1";
import UCEManageReviews from "../UseCasesEnterprice/components/use-casses-enterprice-manage-reviews/UCEManageReviews";
import UCASMBBlock1 from "./components/use-cases-SMB-block1/UCASMBBlock1";
import UCASMBInformationBlock from "./components/uca-SMB-Information-block/UCASMBInformationBlock";


export default function UsaCasesSMB() {
    return (
        <>
            <div className="useCasesEnterprise_cont d-flex fd-column">
                <UCASMBBlock1/>
                <UCEManageReviews/>
                <UCASMBInformationBlock/>
            </div>
        </>
    )
}