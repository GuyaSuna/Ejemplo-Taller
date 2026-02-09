import { Button } from "react-bootstrap";

export const BotonLogin = ({ ordenarPor }) => {
  return (
    <Button variant="primary" onClick={() => ordenarPor()}>
      Login
    </Button>
  );
};
