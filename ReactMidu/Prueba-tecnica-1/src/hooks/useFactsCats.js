import { useState, useEffect } from 'react'
import { getRandomeFact } from '../api/facts'
export default function useFactsCats() {
    const [fact, setFact] = useState()

    const getFactAndUpdateState = () => {
        getRandomeFact().then(newFact => setFact(newFact))
    }

   
    useEffect(getFactAndUpdateState, [])

    return { fact, getFactAndUpdateState }
}
