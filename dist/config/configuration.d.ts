declare const _default: () => {
    port: number;
    database: {
        host: string;
        port: number;
        username: string;
        password: string;
        name: string;
        synchronize: boolean;
        logging: boolean;
    };
    stackdrive: {
        active: boolean;
        projectId: string;
        path: string;
    };
    logger: {
        level: string;
        label: string;
    };
};
export default _default;
