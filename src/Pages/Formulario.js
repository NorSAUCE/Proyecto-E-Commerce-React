import React,{useState} from "react";
import Input from "../Components/Input"
import { useForm } from "react-hook-form";
import {Form,Button} from 'react-bootstrap'
import firebase from "../Config/firebase"
import AlertCustom from "../Components/AlertCustom";
import { registroMessage } from "../Utils/errorMessage";
function Formulario(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const[alert,setAlert]=useState({variant:'',text:''})
    const onSubmit=async (data)=>{
    console.log("Form",data)
    try{
       const responseUser=await firebase.auth().createUserWithEmailAndPassword(data.email,data.password) 
       console.log("responseUser",responseUser)
       setAlert({variant:'success',text:'Registro exitoso'})
       if(responseUser.user.uid){
           const document=await firebase.db.collection("usuarios")
           .add({
               name:data.nombre,
               lastname:data.apellido,
               userId:responseUser.user.uid
           })
           console.log("document",document)
       }   
    }catch(e){
        console.log(e)
        setAlert({variant:"danger", text:registroMessage[e.code]||'Ha ocurrido un error'})
    }
   
    }
    return(
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input label="Nombre" register={{...register("nombre",{ required: true })}} />
                {errors.nombre && <span>El campo nombre es Obligatorio</span>}
                <Input label="Apellido" register={{...register("apellido",{ required: true })}}/>
                {errors.apellido && <span>El campo apellido es obligatorio</span>}
                <Input label="Email" type="email" register={{...register("email",{ required: true })}} />
                {errors.email && <span>El campo Email es obligatorio</span>}
                <Input label="Contraseña" type="password"register={{...register("password", { required: true })}}  />
                {errors.password && <span>El campo Contraseña es obligatorio</span>}
                 <Button variant="primary" type="submit">
                  Registrarme
                </Button>
                <AlertCustom {...alert}/>
            </Form>
        </div>
    )
}
export default Formulario