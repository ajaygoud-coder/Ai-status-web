
'use client'
import { useEffect, useState } from 'react'
export default function TemplatesPage(){
  const [list,setList]=useState([])
  useEffect(()=>{ fetch('/api/templates').then(r=>r.json()).then(d=>setList(d.data||[])) },[])
  return (
    <div style={{marginTop:20}}>
      <h2>Templates</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12,marginTop:12}}>
        {list.map(t=>(
          <div key={t.id} style={{background:'#121212',padding:12,borderRadius:8}}>
            <img src={t.image} style={{width:'100%',height:180,objectFit:'cover'}} alt={t.title} />
            <h4 style={{marginTop:8}}>{t.title}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}
