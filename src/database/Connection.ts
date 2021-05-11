import { Express } from 'express'
import { createConnections } from 'typeorm'

class Connection {
    public async use(app: Express): Promise<void> {
        await createConnections()
            .then(() => {
                app.emit('connected')
            })
            .catch((e) => {
                console.log(e)
                console.log('Database connection error!')
            })
    }
}

const connection = new Connection()

export { connection }
