import React from "react";
import { Button, Card } from "react-bootstrap";

function Konten(props){
    return(
            <Card className="col-sm-3 mx-3 my-3" key={props.calling.i}>
                <Card.Img variant="top" src={props.calling.urlToImage}/>
                <Card.Body>
                    <Card.Title>{props.calling.title}</Card.Title>
                    <Card.Text>{props.calling.author} - {props.calling.publishedAt}</Card.Text>
                    <Card.Text className="text-justify my-3">{props.calling.description}</Card.Text>
                    <Button href={props.calling.url} variant="primary" className="mt-3">Selengkapnya...</Button>
                </Card.Body>
            </Card>
    )
}
export default Konten;