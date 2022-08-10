import axios from "../Config/axios"
export async function getAllProductos(){
    return axios.get("/sites/MLA/search?q=mochila#json") 
}
export async function getByIdProductos(id){
    return axios.get("/items/"+id) 
}
