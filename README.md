# realm-schema-generator

## install packages
```
yarn add -D realm-ts-schema-generator typescript ts-node
yarn add realm
```

# prepare interface
have at least one interface with doc tag @realm.
For example in src/store/models.ts:
```
/**
 * @realm Schema
 */
interface Phase {
    name: string;
    phaseId: number;
    articles: Article[];
    optionalFieldsWork?: boolean;
}

interface Article {
    articleId: number;
    title: string;
    /**
     * @realm_index
     * 
     */
    url: string;
    content: string;
    type: ArticleType;
    position: Position;
}

enum ArticleType {
    A,
    B,
    C
}

type Position = 'left' | 'center' | 'right';

```


## create schema generator script 

add a script file, for example 'scripts/generateSchemas.ts':
```
import path from 'path';
import { generator } from 'realm-ts-schema-generator';

generator(
    [path.join(__dirname, '../src/store/models.ts')],
    path.join(__dirname, '../realm/__generated__/schemas.ts'),
    path.join(__dirname, '../tsconfig.json')
);
```

# run with ts-node
```
yarn ts-node -T scripts/generateSchemas.ts
```
