import { Button, Modal } from "antd";
import { Post } from "../../dashboard/Dasboard";
import { useState } from "react";
import { editPostComment } from "../../../services/posts.service";

interface PostModalProps {
    post: Post | null ;
    onClose: () => void;
    isModalOpen: boolean
  }


const PostModal = ({ post, onClose, isModalOpen }: PostModalProps)=>{
    const [comment, setComment]= useState('');

    const saveComment = (async()=>{
        try {
            const res = await editPostComment(post?.postId, comment)
            console.error(res)
        } catch (error) {
            console.error(error)
        }
    })
    return (
        <>{
            post && <Modal
            title={<span style={{ color: post.postTitleColor }}>{post.postTitle}</span>}
            onCancel={onClose}
            open={isModalOpen} 
            footer={[
              <Button key="close" onClick={onClose}>
                Close
              </Button>,
            ]}
          >
            <p>{post.postDescription}</p>
            <div>
              <strong>Comments:</strong>
              <ul>
                {post.postComments && post.postComments.map((comment, index) => (
                  <li key={index}>{comment}</li>
                ))}
              </ul>
            </div>
          </Modal>
        }</>
      );
    };
    
    export default PostModal;