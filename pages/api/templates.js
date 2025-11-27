import clientPromise from '../../lib/mongodb'
export default async function handler(req,res){
  const client = await clientPromise
  const db = client.db()
  const col = db.collection('templates')
  if(req.method==='GET'){
    const list = await col.find({}).toArray()
    return res.json({ data: list })
  }
  if(req.method==='POST'){
    let body = ''
    req.on('data', chunk => body += chunk)
    req.on('end', async ()=> {
      const doc = JSON.parse(body)
      doc.created_at = new Date()
      const r = await col.insertOne(doc)
      res.json({ insertedId: r.insertedId })
    })
    return
  }
  res.status(405).end()
}
