import clientPromise from '../../lib/mongodb'
export default async function handler(req,res){
  const body = await new Promise((r)=>{ let d=''; req.on('data',c=>d+=c); req.on('end',()=>r(d)) })
  try{ const client = await clientPromise; const db = client.db(); await db.collection('replicate_outputs').insertOne({ payload: JSON.parse(body), received_at: new Date() }) }catch(e){ console.error(e) }
  res.json({ ok:true })
}
