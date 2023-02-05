import { request } from "./api.js";
import LinkButton from "./Linkbutton.js";
import PostList from "./PostList.js";

export default function PostsPage({ $target }) {
  const $page = document.createElement("div");

  const postList = new PostList({
    $target: $page,
    initialState: [],
  });

  new LinkButton({
    $target: $page,
    initialState: {
      text: "New Post",
      link: "/posts/new",
    },
  });

  const fetchPosts = async () => {
    const posts = await request("/posts");

    postList.setState(posts);
  };

  this.render = async () => {
    await fetchPosts();
    $target.appendChild($page);
  };
}
