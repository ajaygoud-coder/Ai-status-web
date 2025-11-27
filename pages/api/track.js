import clientPromise from '../../lib/mongodb'
export default async function handler(req,res){
  if(req.method!=='POST') return res.status(405).end()
  const body = await new Promise((r)=>{ let d=''; req.on('data',c=>d+=c); req.on('end',()=>r(JSON.parse(d))) })
  const client = await clientPromise; const db = client.db(); await db.collection('events').insertOne({ ...body, created_at: new Date() })
  res.json({ ok:true })
}
