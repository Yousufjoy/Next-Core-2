import { getPost } from "@/services/getApi";
import Link from "next/link";
import React from "react";

const PostPage = async () => {
  const postsData = await getPost();


  return (
    <div className=" ">
      <h6>All Post</h6>
      <div className=" grid grid-cols-4 gap-6">
        {postsData?.slice(0, 20)?.map((post) => (
          <div key={post.id} className=" border-2 p-6">
            <h6>Title: {post.title}</h6>
            <h6>Description: {post.body}</h6>
            <button className=" bg-red-500 px-4 py-2">
              <Link href={`/post/${post.id}`}>See Details</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
