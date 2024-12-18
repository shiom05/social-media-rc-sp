import { Button, Modal } from "antd";
import { Post } from "../../dashboard/Dasboard";
import { useState } from "react";
import { editPostComment } from "../../../services/posts.service";

interface PostModalProps {
    post: Post | null ;
    onClose: () => void;
    isModalOpen: boolean;
    repoadPosts: ()=> void;
  }


const PostModal = ({ post, onClose, isModalOpen, repoadPosts }: PostModalProps)=>{
    const [comment, setComment]= useState('');

    const saveComment = (async()=>{
        try {
            const res = await editPostComment(post?.postId, comment)
            console.log(res);
            post?.postComments.push(comment)
            repoadPosts();
            setComment('')
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
            <div>
                <input type="text" value={comment} onChange={(e)=>setComment(e.target.value)} placeholder="enter new comment"/>
                <button onClick={saveComment}>Add comment</button>
            </div>
          </Modal>
        }</>
      );
    };
    
    export default PostModal;