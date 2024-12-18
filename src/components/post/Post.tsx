import React, { useState } from "react";
import { Post } from "../dashboard/Dasboard";
import { Card } from "antd";
import './style.css'
import PostModal from "./postmodal/PostModal";

export interface PostProps {
  post: Post;
}

const PostCard = ({ post }: PostProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [postClicked, setPostClicked] = useState<Post | null>(null);

    const showModal = (post: Post) => {
        setPostClicked(post)
        setIsModalOpen(true);
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };


  return (
    <>
    <Card onClick={()=>showModal(post)} className="card-post" title={<span style={{ color: post.postTitleColor }}>{post.postTitle}</span>}  bordered={true}>
       {post.postDescription}
      <hr />
      {post.postComments.length} comments
    </Card>
    
    <PostModal post={postClicked} onClose={handleCancel} isModalOpen={isModalOpen} ></PostModal>
    
    </>
    
  );
};

export default PostCard;
