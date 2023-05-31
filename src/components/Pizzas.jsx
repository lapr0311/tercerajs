import Context from "../Context";
import React, { useContext } from "react"
import "../assets/css/catalogoPizza.css"
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button'

export default function Pizzas() {
    const { pizzas, agregarPizzas } = useContext(Context);
    const navigate = useNavigate();
    const verPizza = (id) => {
        navigate(`/pizzas/${id}`);
    }
    return (
        <>
            <div className="galeria grid-columns-4 p-3">
                {pizzas.map((elemento) => (<div key={elemento.id}
                >
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={elemento.img} />
                        <Card.Body>
                            <Card.Title>{elemento.name}</Card.Title>
                            <hr style={{ margin: '0', color: 'black', height: '5px', width: '100%', opacity: '30%' }} />
                            <h5 className="mt-1 ">Ingredientes:</h5>
                            <div className="m-3">
                                {elemento.ingredients.map((item) => (<p className="m-0" key={Math.random()}>*{item}</p>))}
                            </div>
                        </Card.Body>
                        <ListGroup className="list-group-flush text-center">
                            <ListGroup.Item>
                                <h3>${elemento.price}</h3>
                                <div className="m-2 d-flex" >
                                    <Button className="bg-info"
                                        onClick={() => (verPizza(elemento.id))}
                                    >Ver Más 👀
                                    </Button>
                                    <Button className="bg-danger ms-4"
                                        onClick={() => (agregarPizzas(elemento.id))}
                                    >Añadir 🛒
                                    </Button>
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
                ))}
            </div>
        </>

    );
}

