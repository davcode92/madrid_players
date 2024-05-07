import React from "react";
import { Button, Card } from "react-bootstrap";

//VOICI LE COMPOSANT QUI PORTE LE TEMPLATE DE LA CARTE
const CardPlayer = ({ Object }) => {
  return (
    <div >
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Object.imgURL} />
        <Card.Body>
          <Card.Title>{Object.name}</Card.Title>
          <Card.Text>{Object.position}</Card.Text>
          <Button variant="primary"><a href="https://www.realmadrid.com/fr-FR/football/equipe-premiere/effectif">Plus de détails</a></Button>
        </Card.Body>
      </Card>
    </div>
  );
};
CardPlayer.defaultProps = {
  Object: {
    id: Math.random(),
    name: "Player name",
    imgURL:
      "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--5728177b-aad2-4a51-8215-1f4b153eb8e4/_330836107215.app.png?preferwebp=true&width=420",
  },
};

export default CardPlayer;
