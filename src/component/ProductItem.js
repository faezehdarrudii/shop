import React from "react";
import { Card, Button } from "react-bootstrap";

function ProductItem({product}) {
    return (
        <Card style={{padding :'10px', background:'#ddd'}}>
            <Card.Img 
            src={product.image}
            variant="top"
            height='200px'
            style={{objectFit:'cover',borderRadius:'10px'}}
            />
            <Card.Body >
                <Card.Title align='center' >{product.name}</Card.Title>
                <Card.Text align='center'>{product.price}</Card.Text>
                <div align='center'>
                <Button variant="btn btn-outline-secondary"  >افزودن به سبد خرید</Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ProductItem;
