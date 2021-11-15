import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Post from "../components/Post";
import NotFound from "../routes/NotFound";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const users = useSelector((state) => state.users);
  const id = useParams().id;

  if (posts.isLoading) return <Loading />;

  if (id && posts.data.length > 0 && users.data.length > 0) {
    const user = users.data.find((user) => user.id === parseInt(id));
    if (!user) return <NotFound />;
    const userPosts = posts.data.filter((post) => post.userId === parseInt(id));
    return (
      <Container>
        <h1 className="main-title">Posts Made by {user.name}</h1>
        {userPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </Container>
    );
  }

  return (
    <Container>
      <h1 className="main-title">All Posts</h1>
      {posts.data.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </Container>
  );
};

export default Posts;
