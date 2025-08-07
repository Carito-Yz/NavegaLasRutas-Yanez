import { useEffect, useState } from "react"
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../db/db.js"
import { useNavigate } from "react-router-dom"

const useGetProducts = (category) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()
 
    const getProducts = async() => {
        try {
            const dataDb = await getDocs(collection(db, "products"))

            const data = dataDb.docs.map((productDb) => {
                return {id: productDb.id, ...productDb.data()}
            })

            setProducts(data)
            setLoading(false)

        } catch (error) {
            Swal.fire({
                title: "Error",
                text: "Se ha producido un error al cargar los productos. Inténtelo de nuevo",
                icon: "error",
                confirmButtonText: "Volver al inicio"
                }).then(() => {
                    navigate("/");
            });
        }
    }

    const getProductsByCategory = async() => {
        try {
            const q = query(collection(db, "products"), where("category", "==", category))

            const dataDb = await getDocs(q)

            const data = dataDb.docs.map((productDb) => {
                return {id: productDb.id, ...productDb.data()}
            })

            setProducts(data)
            setLoading(false)

        } catch (error) {
            Swal.fire({
                title: "Error",
                text: "Se ha producido un error al cargar los productos. Inténtelo de nuevo",
                icon: "error",
                confirmButtonText: "Volver al inicio"
                }).then(() => {
                    navigate("/");
            });
        }
    }
    
    useEffect(() => {

        if(category && category != "todo"){
            getProductsByCategory();
        }
        else{
            getProducts();
        }

    }, [category])

    return { products, loading }
}

export default useGetProducts