import React from 'react';

export const Card = (props) => {
    return (
        <div>
            <h1>Card</h1>
            <div className="card" style={{ width: "18rem" }}>
                <img src={require(`../images/${props.imagen}`)} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.titulo}</h5>
                    <p className="card-text">{props.texto}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};
