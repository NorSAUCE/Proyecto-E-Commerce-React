import React from "react";
import {Link} from "react-router-dom"
import {Card,Button,Col} from 'react-bootstrap'
const styles ={
    img:{
        width:'100px'
    }
}
function Producto(props){
    const {nombre,thumbnail,id} = props
    return(
        <>
        <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={thumbnail} style={styles.img}/>
            <Card.Body>
              <Card.Title>{nombre}</Card.Title>
              <Card.Text>
              </Card.Text>
              <Button variant="primary" as={Link} to={'/producto/'+id}>Ver Detalle</Button>
            </Card.Body>
          </Card>
          </Col>
          </>
    )
}
export default Producto;