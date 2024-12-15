import React from "react";
import Card from "react-bootstrap/Card";

// Función para manejar el clic y alternar la clase 'clicked'
function handleClick(e, onClick, isClicked) {
   e.currentTarget.classList.toggle("clicked");
   if (onClick) onClick(isClicked); // Pasar si la tarjeta ya estaba seleccionada
}

function ProjectCards(props) {
   const isClicked = props.isSelected;

   return (
      <Card
         className={`project-card-view ${isClicked ? "clicked" : ""}`}
         onClick={(e) => handleClick(e, props.onClick, isClicked)}
      >
         <div className="front-card">
            <Card.Img variant="top" src={props.imgPath} alt="card-img" />
            <Card.Body className="project-card-body">
               <Card.Title className="purple" style={{ fontWeight: "800" }}>
                  {props.title}
               </Card.Title>
               <Card.Text style={{ textAlign: "center" }}>
                  {props.description}
               </Card.Text>
            </Card.Body>
         </div>
         <div className="back-card">
            <h5>Technology/ies used:</h5>
            <div className="tech-img">
               {props.images.map((img, index) => (
                  <img key={index} src={img} alt={`tech-img-${index}`} />
               ))}{" "}
            </div>
         </div>
      </Card>
   );
}

export default ProjectCards;
