import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Producto = () => {
    const { productId } =  useParams()
    const [producto, setProducto] = useState(null)

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res=>res.json())
            .then(productos=>setProducto(productos))
    }, [productId])

    if (!producto) return "Cargando ..."

    return <div>
        <h2>Información de producto</h2>
        <div style={{border: "1px solid gray", padding: "16px"}}>
            <div>Nombre: {producto.title}</div>
            <img src={producto.image} style={{maxWidth: "150px"}} />
            <div>{producto.description}</div>
            <div>${producto.price}</div>
        </div>
    </div>
}