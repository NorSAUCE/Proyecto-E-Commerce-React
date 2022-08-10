import React,{Component} from "react"
import Productos from '../Components/Productos'

class Home extends Component{
    render(){
        return(
            <div>
                
                <div>
                    <h1>Listado de productos</h1>
                    <Productos />
                </div>
            </div>
        )    
    }
}

export default Home