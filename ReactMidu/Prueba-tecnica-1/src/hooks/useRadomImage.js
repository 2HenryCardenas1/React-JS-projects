import { useState, useEffect } from 'react'

const URL_IMAGE_RANDOM = 'https://cataas.com/cat/says/'
export function useRandomImage({ fact }) {
    const [imageUrl, setImageUrl] = useState()

   

    useEffect(() => {
        if (!fact) return
        const threeFirstWords = fact.split(' ', 3).join(' ')
        fetch(`${URL_IMAGE_RANDOM}${threeFirstWords}`)
            .then(res => setImageUrl(res.url))

    }, [fact])

    return { imageUrl }

}