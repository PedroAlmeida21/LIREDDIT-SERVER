import { Post } from "./entities/Post";
import { __prod__ } from "./constants";
import { Options } from '@mikro-orm/core';
import path from "path";

const config: Options = {
    migrations: {
        path: path.join(__dirname, "./migrations"),
        pattern: /^[\w-]+\d+\.[tj]s$/
    },
    entities: [Post],
    dbName: 'lireddit',
    user: 'pedroalmeida',
    password: 'b',
    debug: !__prod__,
    type: 'postgresql'    
};
export default config;