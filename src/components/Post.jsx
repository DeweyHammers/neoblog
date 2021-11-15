import { Table } from "react-bootstrap";

const Post = ({ post }) => {
  return (
    <Table striped bordered variant="dark" responsive className="mt-3">
      <thead>
        <tr>
          <th>{post.title}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{post.body}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Post;
