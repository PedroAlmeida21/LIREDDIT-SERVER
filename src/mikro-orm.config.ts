import { __prod__ } from "./constants";
import { Post } from "./entities/Post";

export default {
    entities: [Post],
    dbName: 'lireddit',
    user: 'Pedro.AlmeidaDaSilva',
    password: 'b',
    debug: !__prod__,
    type: 'postgresql'
} as const;