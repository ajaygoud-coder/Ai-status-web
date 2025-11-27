import OpenAI from 'openai'
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
export async function textResponse(prompt){
  const resp = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{role:'user', content: prompt}],
    max_tokens: 500
  })
  return resp.choices?.[0]?.message?.content ?? ''
}
