import Header from "../components/Header";
import PlanTile from "../components/PlanTile";

let PlanPage = () => {
    return (
        <div className='bg-skobeloff w-fill h-screen'>
            <Header />
            <div>
                <PlanTile />
                <PlanTile />
                <PlanTile />
            </div>
        </div>
    )
}

export default PlanPage