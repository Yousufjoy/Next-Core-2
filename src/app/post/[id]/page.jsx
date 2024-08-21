import { getPost } from "@/services/getApi";
import React from "react";

function PostDetailPage({ params }) {
  const specificPost = postsData.find((post) => post.id === Number(params.id));
  console.log(specificPost);

  return (
    <div>
      <h3>Title: {specificPost.title}</h3>
      <h6>Description: Title: {specificPost.body}</h6>
    </div>
  );
}

const postsData = await getPost();

export default PostDetailPage;
