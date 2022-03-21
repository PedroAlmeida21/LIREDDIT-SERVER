import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import microConfig from './mikro-orm.config';

const main = async () => {
    const orm = await MikroORM.init(microConfig);
    orm.getMigrator().up();

    // const generator = orm.getSchemaGenerator();
    // await generator.updateSchema();
    
    const post = orm.em.create(Post, {title: 'my first post 4'});
    await orm.em.persistAndFlush(post);
}

main();
 