import type { CmsProvider } from './CmsProvider';
import { config } from './config';
import type { CreatePostDTO, Post } from './types';

export class ProductionProvider implements CmsProvider {
    private readonly baseUrl: string;

    constructor() {
        this.baseUrl = config.apiUrl;
    }

    async createPost(data: CreatePostDTO): Promise<Post> {
        const response = await fetch(`${this.baseUrl}/posts`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Failed to create post on production API');
        }

        return (await response.json()) as Post;
    }

    async getAllPosts(): Promise<Post[]> {
        return [];
    }

    async getPostById(id: string): Promise<Post> {
        throw new Error('Not implemented yet');
    }
}
