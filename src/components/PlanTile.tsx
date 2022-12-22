//This is the display tile for a trip plan

interface PlanTileProps {
    name: string
    planned_departure: string
    number_of_days: number
    locations: number
}

let PlanTile = () => {
    return (
        <div>
            <h1>Plan Tile</h1>
        </div>
    )
}

export default PlanTile