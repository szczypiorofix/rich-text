import type { CmsProvider } from './CmsProvider';
import { config, EnvironmentSettings } from './config.ts';
import { PocketBaseProvider } from './PocketBaseProvider.ts';
import { ProductionProvider } from './ProductionProvider.ts';
import type { CreatePostDTO, Post } from './types';

class ApiClient {
    private provider: CmsProvider;

    constructor() {
        if (config.environment === EnvironmentSettings.LOCAL) {
            console.log('🔌 Using Local API Provider (PocketBase)');
            this.provider = new PocketBaseProvider();
        } else {
            console.log('🚀 Using Production API Provider');
            this.provider = new ProductionProvider();
        }
    }

    public async createPost(data: CreatePostDTO): Promise<Post | null> {
        return this.provider.createPost(data);
    }

    public async getPosts(): Promise<Post[]> {
        return this.provider.getAllPosts();
    }
}

export const api = new ApiClient();
