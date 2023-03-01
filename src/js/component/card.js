import React from "react";


const Card=(props) => {
const { addItem } = useCart();
    return(
        
        <div className="container mt-3 mb-2 me-2 ms-2">
        <div className="row d-flex">
        <div className="col-12 col-6 flex-fill">
        <div className="card" style={{"width": "20rem", "height": "25rem", "color": "black"}}>
            <img src={props.img}
        className="card-img-top" style={{"width": "200px", "height": "400px", "aspectRation": "9/2", "alignItems": "center", "margin": "auto"}}/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text justify-content-center">{props.text}</p>
                 
            </div>
            
</div>
</div>
</div>
</div>

    )
    
}
export default Card