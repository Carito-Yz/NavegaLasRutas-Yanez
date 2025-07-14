import { useEffect, useState } from "react"
import {getProductById} from "../data/data"

const useGetProduct = (idProduct) => {
    
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProductById(idProduct)
        .then((data) => {
            setProduct(data)
        })
        .finally(() => {
            setLoading(false)            
        })
    }, [])

    return {product, loading}
}

export default useGetProduct