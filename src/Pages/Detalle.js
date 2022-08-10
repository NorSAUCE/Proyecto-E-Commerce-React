import React,{useState,useEffect} from "react"
import {useParams} from "react-router-dom"
import Loading from "../Components/Loading"
import {getByIdProductos} from "../Services/ProductosService"
import {Carousel,Button} from 'react-bootstrap'
import AuthContext from "../Context/AuthContext";
const styles ={
    img:{
        width:'350px'
    }
}
function Detalle(){
    const{id}=useParams()
    const[producto,setProducto]=useState({})
    const[loading,setLoading]=useState(true)
   useEffect(
         ()=>{
            const request = async ()=>{
                
                try{
                    setLoading(true)
                    const response = await getByIdProductos(id)
                setProducto(response.data)
                console.log(response)
                setLoading(false)
                }catch(e){
                    console.log(e)
                    setLoading(false)
                }
                
            }
            request()
         },
         [id]
   )
   
    return(
        <AuthContext.Consumer>
             {
            context=>
            <Loading loading={loading}>
            <>
           <div>Nombre:{producto.title}</div>
           <div>Precio:{producto.price}</div>
           <div>
               <Carousel style={styles.img} variant="dark">
               {producto && producto.pictures && producto.pictures.map(pictures=>(
                   <Carousel.Item >
                   <img key={pictures.url} 
                   className="d-block w-100" 
                   src={pictures.url}
                   width="350px"
                   height="350px"
                   alt="imagen"
                   />
                   </Carousel.Item>
               ))}
               </Carousel>
               {context.userLogin&&
                <>
                <Button variant="primary">Comprar</Button>
                </>
                }
               </div>
           </>
           </Loading>
            }
       
       </AuthContext.Consumer>
    )
}

export default Detalle;