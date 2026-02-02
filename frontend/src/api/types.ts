import type { RecordModel } from 'pocketbase';

export interface Post {
    id: string;
    title: string;
    content: string;
    created?: string;
    updated?: string;
}

export type PostRecord = Post & RecordModel;

export type CreatePostDTO = Omit<Post, 'id' | 'created' | 'updated'>;
