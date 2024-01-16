import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Favorite Companies</h1>
          <ul>
            {favorites.map((company) => (
              <li key={company}>{company}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Favorites;