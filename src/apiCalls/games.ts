export const getAllGames = async () => {
    const url = "http://localhost:3001/api/v1/games"
    const response = await fetch(url)
    if (!response.ok) {
        throw Error("Can't fetch games")
    }
    return response.json()
}