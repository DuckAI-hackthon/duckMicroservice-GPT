import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
});

export const qea = async (prompt: string) => {
    const completion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: prompt }],
        model: 'gpt-3.5-turbo',
        temperature: 0.7,
    });
    return completion
}

export const translate = async (prompt: string, from: string, to: string) => {
    const completion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: `Translate ${prompt} from ${from} to ${to}` }],
        model: 'gpt-3.5-turbo',
        temperature: 0.7,
    });
    return completion
}

export const summarize = async (prompt: string) => {
    const completion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: `Summarize ${prompt}` }],
        model: 'gpt-3.5-turbo',
        temperature: 0.7,
    });
    return completion
}

export const getKeywords = async (prompt: string) => {
    const completion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: `Get 7 keywords from ${prompt}` }],
        model: 'gpt-3.5-turbo',
        temperature: 0.7,
    });
    return completion
}
