import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="center-text mt-3">
      <h1>Weclome to Neoblog</h1>
      <h3>The home for new and upcoming Devs to share all there techy lives</h3>
      <h5>
        Please look through all the{" "}
        <Link className="user-post-link btn btn-secondary btn-sm" to="/users">
          Users
        </Link>
      </h5>
      <h4>Or</h4>
      <h5>
        You can also look though all the{" "}
        <Link className="user-post-link btn btn-secondary btn-sm" to="/posts">
          Posts
        </Link>
      </h5>
      <h4>Coming soon!</h4>
      <h5>Comments, Albums, Photos and Todos</h5>
    </Container>
  );
};

export default Home;
