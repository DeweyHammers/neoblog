import { Link } from "react-router-dom";

const User = ({ user }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.website}</td>
      <th>
        <Link
          className="user-post-link btn btn-secondary"
          to={`${user.id}/posts`}
        >
          Posts
        </Link>
      </th>
    </tr>
  );
};

export default User;
