
import { useRandomImage } from '../hooks/useRadomImage'

export default function CatImage({ fact  }) {
    
    
    const { imageUrl } = useRandomImage({ fact })

    return (
        <>
            {imageUrl && <img src={imageUrl} alt={`Imagen obtenida de las tres primeras palabras de ${fact}`} />}
        </>

    )
}
