import axios from "axios";
import { Post } from "../components/dashboard/Dasboard";

const api = axios.create({baseURL: 'http://localhost:3001'})


export const fetchPosts = () =>{
    return api.get('/post');
}


export const createPost = (post: Post)=>{
    return api.post('/post', post);
}

export const editPostComment = (postid: any, comment: string)=>{
    return api.put('/post', {postid, comment})
}