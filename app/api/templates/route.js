
import path from 'path'
import fs from 'fs'

export async function GET(){
  const base = path.join(process.cwd(),'public','templates')
  const cats = await fs.promises.readdir(base)
  const out = []
  for(const c of cats){
    const files = await fs.promises.readdir(path.join(base,c))
    for(const f of files){
      if(f.endsWith('.json')){
        const j = JSON.parse(await fs.promises.readFile(path.join(base,c,f),'utf8'))
        out.push(j)
      }
    }
  }
  return new Response(JSON.stringify({ data: out }), { status:200 })
}
