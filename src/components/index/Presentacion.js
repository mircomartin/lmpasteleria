import React from 'react'

//Router
import { Link } from 'react-router-dom'

export const Presentacion = () => {

    return (
        <div className="container">
            <div className="row presentacion">
                <div className="col-12">
                    <h1 className="presentacion__title">LM Pasteleria</h1>
                </div>
            </div>
            <div className="row justify-content-between">
                <div className="col-12 col-md-4 presentacion__pics" data-aos="flip-left">
                    <img src="/assets/img/uno.webp" className="presentacion__picsImg" alt="Pastel Humedo"/>
                </div>
                <div className="col-12 col-md-4" data-aos="flip-up">
                    <div className="d-flex align-items-center presentacion__pics fondoColor">
                        <div className="presentacion__wrapperPics">
                            <h2 className="presentacion__picsTitle">Diseños de pasteles artesanales</h2>
                            <Link to="/contacto" className="presentacion__picsButton">Hacer un pedido</Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 presentacion__pics" data-aos="flip-right">
                    <img src="/assets/img/dos.webp" className="presentacion__picsImg" alt="Brownie"/>
                </div>
            </div>
        </div>
    )
}
