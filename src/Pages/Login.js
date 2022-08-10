import Input from "../Components/Input"
import React,{useState,useContext} from "react"
import { useForm } from "react-hook-form";
import {Form,Button} from 'react-bootstrap'
import firebase from "../Config/firebase"
import AlertCustom from "../Components/AlertCustom";
import { loginMessage } from "../Utils/errorMessage";
import AuthContext from "../Context/AuthContext";
import {useNavigate} from "react-router-dom"
function Login(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const[alert,setAlert]=useState({variant:'',text:''})
    const context = useContext(AuthContext)
    const navigate=useNavigate()
    const onSubmit=async (data)=>{
    try{
      const responseUser=await firebase.auth().signInWithEmailAndPassword(data.email,data.password)
      console.log("responseUser",responseUser)
      setAlert({variant:'success',text:'Bienvenido'})
      context.loginUser()
      navigate("/")
}catch(e){
        console.log(e)
        setAlert({variant:"danger", text:loginMessage[e.code]||'Ha ocurrido un error'})
    }
   
    }
    return(
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input label="Email" type="email" register={{...register("email",{ required: true })}} />
                {errors.email && <span>El campo Email es obligatorio</span>}
                <Input label="Contraseña" type="password"register={{...register("password", { required: true })}}  />
                {errors.password && <span>El campo Contraseña es obligatorio</span>}
                 <Button variant="primary" type="submit">
                  Ingresar
                </Button>
                <AlertCustom {...alert}/>
            </Form>
        </div>
    )
}
export default Login