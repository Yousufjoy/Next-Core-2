import { getPost } from "@/services/getApi";
import React from "react";

const PostPage = async () => {
  const postsData = await getPost();
  console.log(postsData);

  return (
    <div className=" ">
      <h6>All Post</h6>
      <div className=" grid grid-cols-4 gap-6">
        {postsData?.slice(0, 20)?.map((post) => (
          <div className=" border-2 p-6">
            <h6>Title: {post.title}</h6>
            <h6>Description: {post.body}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
