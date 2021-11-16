import { useSelector } from "react-redux";
import { Container, Table } from "react-bootstrap";
import Loading from "../components/Loading";
import User from "../components/User";

const Users = () => {
  const users = useSelector((state) => state.users);

  if (users.isLoading) return <Loading />;

  return (
    <Container>
      <h1 className="center-text">All Users</h1>
      <Table striped bordered hover variant="dark" responsive className="mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <th>See Posts</th>
          </tr>
        </thead>
        <tbody>
          {users.data.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Users;
