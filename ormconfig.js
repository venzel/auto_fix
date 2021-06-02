require('dotenv/config')

const base_path =
    process.env.POSTGRES_HOST === 'development' ? '/usr/src/app/' : './'

module.exports = [
    {
        name: 'default',
        type: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
        database: process.env.POSTGRES_DB_NAME,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        synchronize: true,
        entities: [
            base_path + 'dist/modules/**/infra/typeorm/postgres/entities/*.js',
        ],
        migrations: [
            base_path + 'dist/database/typeorm/postgres/migrations/*.js',
        ],
        cli: {
            migrationsDir:
                base_path + 'dist/database/typeorm/postgres/migrations',
        },
    },
    {
        name: 'mongodb',
        type: 'mongodb',
        host: process.env.MONGODB_HOST,
        port: process.env.MONGODB_PORT,
        database: process.env.MONGODB_DB_NAME,
        username: process.env.MONGODB_USER,
        password: process.env.MONGODB_PASSWORD,
        synchronize: true,
        logging: false,
        useUnifiedTopology: true,
        entities: [
            base_path + 'dist/modules/**/infra/typeorm/mongodb/schemas/*.js',
        ],
    },
]
