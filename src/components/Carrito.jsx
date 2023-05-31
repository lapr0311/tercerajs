import Context from "../Context";
import React, { useContext } from "react"
import Button from 'react-bootstrap/Button'

export default function Carrito() {
    const { carrito, total, agregarPizzas, eliminarPizzas } = useContext(Context);
    return (
        <div className='container p-5 border'>
            <h3>Detalles del pedido:</h3>
            {carrito.map((elemento) => (
                <div key={elemento.id}
                    className="  d-flex p-2 align-items-center"
                >
                    <div className="1 me-auto d-flex ">
                        <img className="ms-auto" src={elemento.img} alt="foto pizza" style={{ margin: '0', height: '50px', width: '70px' }} />
                        <p className="m-3">{elemento.name}</p>
                    </div>
                    <div className="2 p-0 d-flex">
                        <p className="m-3">${elemento.cantidad * elemento.price}</p>
                        <Button className="bg-danger" style={{ margin: '0', height: '3rem', width: '3rem' }}
                            onClick={() => (eliminarPizzas(elemento.id))}
                        > - </Button>
                        <p className="m-3">{elemento.cantidad}</p>
                        <Button className="bg-primary" style={{ margin: '0', height: '3rem', width: '3rem' }}
                            onClick={() => (agregarPizzas(elemento.id))}
                        > + </Button>
                    </div>
    
                </div>
            ))
            }

            <h2>Total: $ <span>{total}</span></h2>
            <Button variant="success" size='lg'>Ir a pagar</Button>

        </div>
    );
}