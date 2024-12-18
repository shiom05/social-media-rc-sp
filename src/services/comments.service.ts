import axios from "axios";
import { Comment } from "../components/dashboard/Dasboard";

const api = axios.create({baseURL: 'http://localhost:3001'})


export const fetchComments = (): Promise<Comment[]> =>{
    return api.get('/comment');
}


export const createPost = (comment: string, postId: string)=>{
    return api.post('/comment', {commentBody: comment, postId});
}