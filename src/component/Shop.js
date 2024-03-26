import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import ProductItem from "./ProductItem.js";
import { productList } from "../data/item.js";
function Shop() {

    return (
        <Container>
            <Row xs={1} md={4} className="mt-5">
                {productList.map((item) => (
                    <Col key={item.id}>
                        <ProductItem product={item}></ProductItem>

                    </Col>
                ))}
            </Row>
        </Container>

    )

}
export default Shop;