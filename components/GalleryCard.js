import React from "react";
import Card from 'react-bootstrap/Card';

const GalleryCard = ({ image, name, contractAddress, id}) => {
  return (
    <Card>
      <a className='text-black' href={`https://opensea.io/assets/ethereum/${contractAddress}/${id}`} target='_blank'>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          {/* <Card.Text>
            {description}
          </Card.Text> */}
        </Card.Body>
      </a>
    </Card>
  );
};

export default GalleryCard;