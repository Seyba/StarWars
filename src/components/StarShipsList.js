import { ShipsCard } from "./ShipsCard"

export const StarShipsList = (props) => {
    const {starShips} = props
    return(
        <div className="card-container">
            {
                starShips.length ? starShips.map(ship => <ShipsCard key={ship.created}ship={ship}/>) : <h3>Loading ...</h3>
            }
        </div>
    )
}