export const EnvironmentSettings = {
    LOCAL: 'local',
    PRODUCTION: 'production',
} as const;

export type EnvironmentType = (typeof EnvironmentSettings)[keyof typeof EnvironmentSettings];

export class AppConfig {
    private static instance: AppConfig;

    private _env: EnvironmentType = (import.meta.env.VITE_APP_ENV as EnvironmentType) || EnvironmentSettings.LOCAL;
    private _apiUrl: string = (import.meta.env.VITE_API_URL as string | undefined) || 'http://127.0.0.1:8090';

    private constructor() {}

    public static getInstance(): AppConfig {
        if (!AppConfig.instance) {
            AppConfig.instance = new AppConfig();
        }
        return AppConfig.instance;
    }

    get environment(): EnvironmentType {
        return this._env;
    }

    get apiUrl(): string {
        return this._apiUrl;
    }

    get isProduction(): boolean {
        return this._env === EnvironmentSettings.PRODUCTION;
    }
}

export const config = AppConfig.getInstance();
