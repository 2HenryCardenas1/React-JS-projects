
const API_URL = 'https://catfact.ninja/fact'
export const getRandomeFact = async () => {

    const result = await fetch(API_URL)
    const json = await result.json()
    const { fact } = json
    return fact

}