import React,{useState,useEffect} from "react"
import Producto from './Producto'
import {getAllProductos} from "../Services/ProductosService"
import Loading from "./Loading"
import {Row} from 'react-bootstrap'
function Productos(){
    
    const [listadoProductos,setListadoProductos]=useState([])
    const [loading,setLoading] = useState(true)
    
    useEffect(
        ()=>{
            const request = async ()=>{
                
                try{
                    setLoading(true)
                    const response = await getAllProductos()
                    setListadoProductos(response.data.results)

                    setLoading(false)
                }catch(e){
                    console.log(e)
                    setLoading(false)
                }
                
            }
            request()
        },
        []
    )
    return(
        <Loading loading={loading}>
             <div>
             <Row>
             {listadoProductos.map(listadoProducto=><Producto key={listadoProducto.id} nombre={listadoProducto.title} precio={listadoProducto.price} id={listadoProducto.id} thumbnail={listadoProducto.thumbnail}/>)}               
             </Row>
             </div>
        </Loading>
    )
                
}    

export default Productos