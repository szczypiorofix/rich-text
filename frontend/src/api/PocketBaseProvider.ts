import PocketBase from 'pocketbase';

import type { CmsProvider } from './CmsProvider';
import { config } from './config';
import type { CreatePostDTO, Post, PostRecord } from './types';

export class PocketBaseProvider implements CmsProvider {
    private pb: PocketBase;

    constructor() {
        this.pb = new PocketBase(config.apiUrl);
    }

    async getAllPosts(): Promise<Post[]> {
        const records = await this.pb.collection<PostRecord>('Post').getFullList({
            sort: '-created',
        });

        return records.map((record) => ({
            id: record.id,
            title: record.title,
            content: record.content,
            created: record.created,
            updated: record.updated,
        }));
    }

    async getPostById(id: string): Promise<Post | null> {
        try {
            const record = await this.pb.collection<PostRecord>('Post').getOne(id);
            return record;
        } catch (error) {
            console.error('Error getting post by Id :', error);
            return null;
        }
    }

    async createPost(data: CreatePostDTO): Promise<Post | null> {
        try {
            const record = await this.pb.collection<PostRecord>('Post').create(data);
            return {
                id: record.id,
                title: record.title,
                content: record.content,
                created: record.created,
                updated: record.updated,
            };
        } catch (error) {
            console.error('Error creating post', error);
            return null;
        }
    }
}
