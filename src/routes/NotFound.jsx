import { Container, Alert } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container>
      <Alert variant="danger" className="mt-4">
        <h3 className="center-text">
          Error 404: The page you where looking for does not exist!
        </h3>
      </Alert>
    </Container>
  );
};

export default NotFound;
