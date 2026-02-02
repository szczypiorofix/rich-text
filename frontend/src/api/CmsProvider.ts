import type { CreatePostDTO, Post } from './types';

export interface CmsProvider {
    getAllPosts(): Promise<Post[]>;
    getPostById(id: string): Promise<Post | null>;
    createPost(data: CreatePostDTO): Promise<Post | null>;
    // updatePost, deletePost itd.
}
