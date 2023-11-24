import express from 'express'
import { qea, translate, summarize, getKeywords } from './services/openai'
import { Router, Request, Response } from 'express';

const app = express();

const route = Router()

app.use(express.json())

route.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Hello world with Typescript' })
})

route.post('/duck/qea', async (req: Request, res: Response) => {
    const { prompt } = req.body

    try {
        const response = await qea(prompt)
        res.json({ response })
    } catch (error) {
        res.status(500).json({ error })
    }
})

route.post('/duck/translate', async (req: Request, res: Response) => {
    const { prompt, from, to } = req.body

    try {
        const response = await translate(prompt, from, to)
        res.json({ response })
    } catch (error) {
        res.status(500).json({ error })
    }
});

route.post('/duck/sumup', async (req: Request, res: Response) => {
    const { prompt } = req.body

    try {
        const response = await summarize(prompt)
        res.json({ response })
    } catch (error) {
        res.status(500).json({ error })
    }
});

route.post('/duck/keys', async (req: Request, res: Response) => {
    const { prompt } = req.body

    try {
        const response = await getKeywords(prompt)
        res.json({ response })
    } catch (error) {
        res.status(500).json({ error })
    }
});

app.use(route)


app.listen(3000, () => console.log('Server running on http://localhost:3000'))