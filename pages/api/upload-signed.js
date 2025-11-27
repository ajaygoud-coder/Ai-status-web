import crypto from 'crypto'
export default function handler(req,res){
  if(req.method!=='GET') return res.status(405).end()
  const timestamp = Math.floor(Date.now()/1000)
  if(!process.env.CLOUDINARY_API_SECRET) return res.status(500).json({ error:'CLOUDINARY_API_SECRET not configured' })
  const toSign = `timestamp=${timestamp}`
  const signature = crypto.createHash('sha1').update(toSign + process.env.CLOUDINARY_API_SECRET).digest('hex')
  res.json({ timestamp, signature, api_key: process.env.CLOUDINARY_API_KEY, cloud_name: process.env.CLOUDINARY_CLOUD_NAME })
}
