import { textResponse } from '../../lib/openai'
export default async function handler(req,res){
  const { text } = req.body || {}
  if(!text) return res.json({ output: 'Send a prompt.' })
  try{
    const output = await textResponse(text)
    return res.json({ output })
  }catch(e){
    console.error(e); return res.status(500).json({ error: 'AI error' })
  }
}
