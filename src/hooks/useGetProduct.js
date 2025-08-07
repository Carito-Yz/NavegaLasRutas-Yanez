import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore"
import db from "../db/db.js"
import { useNavigate } from "react-router-dom"

const useGetProduct = (idProduct) => {
    
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    const getProduct = async() => {
        try {
            const docRef = doc(db, "products", idProduct)
            const dataDb = await getDoc(docRef)

            if(dataDb.exists()){
                const data = { id: dataDb.id, ...dataDb.data() }
                setProduct(data)
            }
            else{
                setProduct(null)
            }

            setLoading(false)

        } catch (error) {
            Swal.fire({
                title: "Error",
                text: "Se ha producido un error al cargar el producto. Inténtelo de nuevo",
                icon: "error",
                confirmButtonText: "Volver al inicio"
                }).then(() => {
                    navigate("/");
            });
        }
    }

    useEffect(() => {
        getProduct()
    }, [])

    return {product, loading}
}

export default useGetProduct