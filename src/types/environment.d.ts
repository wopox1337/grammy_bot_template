export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            TELEGRAM_API_KEY: string;
            ENV: "test" | "dev" | "prod";
        }
    }
}
