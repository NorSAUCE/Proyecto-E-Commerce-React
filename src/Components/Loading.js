import React from "react";
import Spinner from 'react-bootstrap/Spinner'
const styles={
    spinner:{
    position:"fixed",
    top:"40%",
    left:"40%"
  }
}
function Loading(props){
    const{loading,children}=props
    if(loading){
        return(
            <div>
                <Spinner style={styles.spinner} animation="border" variant="primary" />
            </div>
        )
    }else{
        return(
           <>
           {children}
           </>
        )
    }
   
}
export default Loading;