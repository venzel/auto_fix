import 'reflect-metadata'
import 'dotenv/config'
import express, { Express } from 'express'
import { connection } from './database/Connection'

class App {
    public execute(): Express {
        const app: Express = express()

        connection.use(app)

        app.get('/', (req, res) => {
            res.status(200).json({
                author: 'venzel api',
                version: 'v1.4.0',
            })
        })

        return app
    }
}

const app = new App()

export { app }
