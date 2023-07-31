export const ShipsCard = props => {
    const {ship } = props
    return(
        <div >
            <h6 className="header-animate">{ship.name}</h6>
        </div>
    )
}