# README.md

[![Codeship Status for venzel/auto-fix](https://app.codeship.com/projects/45449dd7-34ea-4445-b7a3-36e7a18da7b9/status?branch=master)](https://app.codeship.com/projects/423884)

## Documentations:

-   https://medium.com/@ivanaugustobd/seu-terminal-pode-ser-muito-muito-mais-produtivo-3159c8ef77b2
-   https://stackoverflow.com/questions/42912755/how-to-create-a-db-for-mongodb-container-on-start-up
-   https://www.conventionalcommits.org
-   https://medium.com/dwarves-foundation/automatically-lint-prettify-your-javascript-project-using-husky-lint-staged-cae8e685bb06
-   https://git-scm.com/docs/githooks
-   https://hashinteractive.com/blog/docker-compose-up-with-postgres-quick-tips/
-   https://medium.com/faun/managing-mongodb-on-docker-with-docker-compose-26bf8a0bbae3
-   https://stackoverflow.com/questions/42912755/how-to-create-a-db-for-mongodb-container-on-start-up
-   https://renatogroffe.medium.com/docker-dica-r%C3%A1pida-criando-uma-inst%C3%A2ncia-do-redis-via-docker-compose-961c7eca5255
-   https://gist.github.com/x-yuri/22eace6d6d047cbe090e1412eaabc97b
-   https://www.techrepublic.com/article/how-to-fix-the-docker-and-ufw-security-flaw/
-   https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-with-ufw-on-ubuntu-18-04-pt

## Services

-   https://app.codeship.com
-   https://www.digitalocean.com/

## init project

```bash
$ yarn init -y
```

## package.json

### Engines && Repository

```json
{
    "engines": {
        "node": "15.4.0"
    },
    "repository": {
        "type": "git",
        "url": "git@github.com:venzel/auto-fix.git"
    }
}
```

## packages

    - [x] express (p)
    - [x] pm2 (p)
    - [x] dotenv (p)
    - [x] esm (p)
    - [x] typeorm (p)
    - [x] reflect-metadata (p)
    - [x] pg (p)
    - [x] mongodb (p)
    - [x] ioredis (p)
    - [x] @types/express
    - [x] @types/node
    - [x] typescript
    - [x] ts-node-dev
    - [x] tsconfig-paths
    - [x] npm-run-all
    - [x] eslint
    - [x] prettier
    - [x] husky
    - [x] lint-staged
    - [x] jest
    - [x] ts-jest
    - [x] @types/jest
    - [x] cross-env
    - [x] cz-conventional-changelog
    - [x] eslint-plugin-prettier
    - [x] eslint-import-resolver-typescript
    - [x] @commitlint/cli
    - [x] @commitlint/config-conventional

### packages : developer

```bash
$ yarn add typescript \
           ts-node-dev \
           tsconfig-paths \
           npm-run-all \
           eslint \
           prettier \
           husky \
           lint-staged \
           jest \
           ts-jest \
           cross-env \
           cz-conventional-changelog -D
```

## packages : developer : prettier && import resolve

```bash
$ yarn add eslint-plugin-prettier eslint-import-resolver-typescript -D
```

## packages : developer : @commitlint

```bash
$ yarn add @commitlint/cli @commitlint/config-conventional -D
```

## packages : developer : semantic-release

```bash
$ yarn add @semantic-release/changelog @semantic-release/git semantic-release -D
```

### packages : developer : types

```bash
$ yarn add @types/express @types/node @types/jest -D
```

### packages : production

```bash
$ yarn add express pm2 dotenv esm typeorm reflect-metadata pg mongodb ioredis
```

## init services

```bash
# Typescript (tsconfig.json)
$ yarn tsc --init

# Jest (jest.config.js)
$ yarn jest --init

# Lint (.eslintrc.json)
$ yarn eslint --init
```

## Create folder and files

```
# Important
src/
    sum.spec.ts
    app.ts
    server.ts
```

## package.json

### Husky

```json
{
    "husky": {
        "hooks": {
            "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
            "pre-commit": "lint-staged"
        }
    }
}
```

### Lint staged

```json
{
    "lint-staged": {
        "*.ts": ["cross-env CI=true yarn test", "yarn fix", "yarn prettify"]
    }
}
```

### Commitizen

```json
{
    "config": {
        "commitizen": {
            "path": "./node_modules/cz-conventional-changelog"
        }
    }
}
```

### Commitlint

```json
{
    "commitlint": {
        "extends": ["@commitlint/config-conventional"]
    }
}
```

### Scripts

```json
{
    "scripts": {
        "build": "yarn tsc",
        "script": "npm-run-all script:*",
        "script:packs": "./scripts/path-packs.sh",
        "script:docker": "./scripts/docker-setup.sh",
        "cz": "cz",
        "test-ci": "jest --detectOpenHandles --bail --findRelatedTests --forceExit",
        "test": "jest --detectOpenHandles --bail --forceExit",
        "fix": "./node_modules/.bin/eslint --fix './src/*.ts'",
        "release": "semantic-release --no-ci",
        "prettify": "prettier ./src/*.ts --write",
        "dev": "npm-run-all -p dev:*",
        "dev:server": "ts-node-dev --trace-deprecation -r tsconfig-paths/register --transpile-only --ignore-watch node_modules ./src/server.ts",
        "start-pm2": "pm2 start ./dist/server.js --no-daemon --name autofix-server"
    }
}
```

## Step by step to release

```bash
$ git add --all

# IMPORTANT
$ git commit -m "feat: tag feat"

$ git push

$ make feature
```

## tsconfig.json

```json
{
    "compilerOptions": {
        "target": "es2019",
        "module": "commonjs",
        "outDir": "./dist",
        "rootDir": "./src",
        "removeComments": true,
        "noEmitOnError": true,
        "strict": true,
        "strictPropertyInitialization": false,
        "baseUrl": "./src",
        "paths": {
            "@modules/*": ["modules/*"],
            "@configs/*": ["configs/*"],
            "@shared/*": ["shared/*"]
        },
        "esModuleInterop": true,
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true
    },
    "include": ["./src"],
    "exclude": ["node_modules", "dist"]
}
```

## jest.config.js

```js
const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig.json')

module.exports = {
    clearMocks: true,
    coverageProvider: 'v8',
    collectCoverage: false,
    collectCoverageFrom: ['<rootDir>/src/*.ts'],
    coverageDirectory: 'coverage',
    coverageReporters: ['text-summary', 'lcov'],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/src/',
    }),
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/*.spec.ts'],
}
```

## .eslintrc.json

```json
{
    "env": {
        "es2021": true,
        "node": true
    },
    "extends": ["airbnb-base"],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": ["@typescript-eslint", "prettier"],
    "rules": {
        "indent": ["error", 4],
        "quotes": [2, "single", { "avoidEscape": true }],
        "semi": [2, "never"],
        "no-console": "off",
        "class-methods-use-this": "off",
        "import/prefer-default-export": "off",
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "ts": "never"
            }
        ]
    },
    "settings": {
        "import/resolver": {
            "typescript": {}
        }
    }
}
```

## .prettierrc

```json
{
    "singleQuote": true,
    "semi": false,
    "tabWidth": 4,
    "trailingComma": "es5"
}
```

## .releaserc.json

```json
{
    "plugins": [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/github",
        "@semantic-release/changelog",
        [
            "@semantic-release/npm",
            {
                "npmPublish": false
            }
        ],
        {
            "path": "@semantic-release/git",
            "assets": ["package.json", "package-lock.json", "CHANGELOG.md"],
            "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
        }
    ]
}
```

## .prettierignore

```
/*.js
src/*.spec.ts
node_modules
dist
coverage
```

## VS CODE CONFIGS

```json
{
    "editor.formatOnSave": true,
    "[typescript]": {
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true
        }
    }
}
```

## Deploy

## change-paths.sh

```bash
#!/bin/bash

PATH_PROJECT="$PWD"

find "$PATH_PROJECT"/dist -name "*.js" -type f \
    -exec sed -i -e 's|@configs|'$PATH_PROJECT'/dist/configs|g' {} \; \
    -exec sed -i -e 's|@modules|'$PATH_PROJECT'/dist/modules|g' {} \; \
    -exec sed -i -e 's|@shared|'$PATH_PROJECT'/dist/shared|g' {} \;

exit 0
```

## Deploy commands

```bash
PROJECT_NAME="autofix"
USER_NAME="leznev_junior"
SERVER_HOST="159.65.169.243"
SERVER_PORT="4848"
PATH_PROJECT="/opt/${PROJECT_NAME}"

rsync -avz -e "ssh -p "$SERVER_PORT"" ~/clone/ "$USER_NAME"@"$SERVER_HOST":"$PATH_PROJECT"

ssh "$USER_NAME"@"$SERVER_HOST" -p "$SERVER_PORT" "cd "$PATH_PROJECT" && yarn install && yarn build"

ssh "$USER_NAME"@"$SERVER_HOST" -p "$SERVER_PORT" "cd "$PATH_PROJECT" && yarn script"

ssh "$USER_NAME"@"$SERVER_HOST" -p "$SERVER_PORT" "pm2 stop all"

ssh "$USER_NAME"@"$SERVER_HOST" -p "$SERVER_PORT" "pm2 start "$PATH_PROJECT"/dist/server.js --name server-"$PROJECT_NAME""
```
