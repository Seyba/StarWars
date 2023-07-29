export const getAllStarships = async () => {
    try{
        const res = await fetch('https://swapi.dev/api/starships')
        //const allStarShips = await res.json()
        return res
    }catch(e){
        console.log(e)
    }
}

