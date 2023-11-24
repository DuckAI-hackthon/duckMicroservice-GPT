import express from 'express'
import { chatCompletion } from './services/openai'
import { Router, Request, Response } from 'express';

const app = express();

const route = Router()

app.use(express.json())

route.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Hello world with Typescript' })
})

route.post('/chat', async (req: Request, res: Response) => {
    const { prompt } = req.body

    try {
        const response = await chatCompletion(prompt)
        res.json({ response })
    } catch (error) {
        res.status(500).json({ error })
    }
})

app.use(route)


app.listen(3000, () => console.log('Server running on http://localhost:3000'))