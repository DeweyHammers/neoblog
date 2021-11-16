import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Post from "../components/Post";
import FilteredPostsInput from "../components/FilteredPostsInput";
import NotFound from "../routes/NotFound";

const Posts = () => {
  const postsFromRedux = useSelector((state) => state.posts);
  const users = useSelector((state) => state.users);
  const id = useParams().id;
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    /*
      When this component first loads it will set posts from redux and set them to the posts state.
      When a user uses the filter input, the input will update and will filter through the posts finding 
      the matching strings to the title of the post.
    */

    setPosts(postsFromRedux.data.filter((post) => post.title.includes(input)));
  }, [input, postsFromRedux.data]);

  if (postsFromRedux.isLoading) return <Loading />;

  // Either Render All the posts or if there is an id passed in through params then render the posts by that user.

  if (id && postsFromRedux.data.length > 0 && users.data.length > 0) {
    const user = users.data.find((user) => user.id === parseInt(id));
    if (!user) return <NotFound />;
    const userPosts = posts.filter((post) => post.userId === parseInt(id));
    return (
      <Container>
        <h1 className="center-text">Posts Made by {user.name}</h1>
        <FilteredPostsInput input={input} setInput={setInput} />
        {userPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </Container>
    );
  }

  return (
    <Container>
      <h1 className="center-text">All Posts</h1>
      <FilteredPostsInput input={input} setInput={setInput} />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </Container>
  );
};

export default Posts;
