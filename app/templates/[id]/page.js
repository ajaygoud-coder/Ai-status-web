
import fs from 'fs'
import path from 'path'

export async function generateStaticParams(){
  const base = path.join(process.cwd(), 'public','templates')
  const cats = await fs.promises.readdir(base)
  const params = []
  for(const c of cats){
    const files = await fs.promises.readdir(path.join(base,c))
    for(const f of files){
      if(f.endsWith('.json')){
        const j = JSON.parse(await fs.promises.readFile(path.join(base,c,f),'utf8'))
        params.push({ id: j.id })
      }
    }
  }
  return params
}

export default async function Page({ params }){
  const id = params.id
  const base = path.join(process.cwd(), 'public','templates')
  let found = null
  const cats = await fs.promises.readdir(base)
  for(const c of cats){
    const files = await fs.promises.readdir(path.join(base,c))
    for(const f of files){
      if(f.endsWith('.json')){
        const j = JSON.parse(await fs.promises.readFile(path.join(base,c,f),'utf8'))
        if(j.id===id){ found = j; break }
      }
    }
    if(found) break
  }
  if(!found) return <div>Template not found</div>
  return (
    <div style={{marginTop:20}}>
      <h2>{found.title}</h2>
      <img src={found.image} style={{width:900}} />
      <pre>{JSON.stringify(found,null,2)}</pre>
    </div>
  )
}
