import React, { useEffect, useState } from "react";
import { fetchPosts } from "../../services/posts.service";
import { Button } from "antd";
import PostCard from "../post/Post";
import './style.css';
import CreatePostModal from "../post/createpostmodal/CreatePostModal";


export interface Post {
  postId?: string;
  postTitle: string;
  postDescription: string;
  postComments: string[];
  postTitleColor: string;
}

export interface Comment {
  commentBody: string;
}

const Dashboard = () => {
 const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

 const showModal = () => {
    setIsCreateModalOpen(true);
  };

  const handleCancel = () => {
    setIsCreateModalOpen(false);
  };

  const [posts, setPosts] = useState<Post[]>([]);
  const getPosts = async () => {
    try {
      const response = await fetchPosts();
      setPosts(response.data.posts);
      console.log(response);
    } catch (error) {}
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <div className="dashboaord-container" style={{padding: '10%'}}>
        <Button type="primary" className="button" onClick={showModal} >Create Post</Button>
        <div className="post-layout">
           {posts.length>0 ? <>{
            posts.map((post:Post)=>(<PostCard key={post.postId} post={post}></PostCard>))
           }</> : <>No Posts to display...</>}
        </div>
      </div>
      <CreatePostModal isModalOpen={isCreateModalOpen} onClose={handleCancel}></CreatePostModal>
    </>
  );
};

export default Dashboard;
