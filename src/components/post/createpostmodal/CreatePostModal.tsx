import React, { useState } from "react";
import { Modal, Input, Button, Form, message, Radio } from "antd";
import { createPost } from "../../../services/posts.service";
import { Post } from "../../dashboard/Dasboard";

interface CreatePostModalProps {
  isModalOpen: boolean;
  onClose: () => void;
  repoadPosts: ()=> void
}

const CreatePostModal: React.FC<CreatePostModalProps> = ({
  isModalOpen,
  onClose,
  repoadPosts,
}) => {
  const [form] = Form.useForm();

  const handleCreatePost = async () => {
    try {
      const values = await form.validateFields();
      const newPost = {
        postTitle: values.title,
        postDescription: values.description,
        postComments: [], // Initially no comments
        postTitleColor: values.titleColor,
      };

      const response = createPost(newPost);
      console.log(response);
      message.success("Post created successfully!");

      form.resetFields(); // Reset the form
      repoadPosts();
      onClose(); // Close the modal
    } catch (error) {
      message.error("Failed to create post!");
    }
  };

  return (
    <Modal
      title="Create New Post"
      open={isModalOpen}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleCreatePost}>
          Create Post
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="title"
          label="Post Title"
          rules={[
            { required: true, message: "Please input the title of the post!" },
          ]}
        >
          <Input placeholder="Enter the post title" />
        </Form.Item>

        <Form.Item
          name="description"
          label="Post Description"
          rules={[
            {
              required: true,
              message: "Please input the description of the post!",
            },
          ]}
        >
          <Input.TextArea placeholder="Enter the post description" />
        </Form.Item>

        <Form.Item
          name="titleColor"
          label="Post Title Color"
          rules={[
            { required: true, message: "Please select a color for the title!" },
          ]}
        >
          <Radio.Group>
            <Radio value="red">Red</Radio>
            <Radio value="green">Green</Radio>
            <Radio value="blue">Blue</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreatePostModal;
