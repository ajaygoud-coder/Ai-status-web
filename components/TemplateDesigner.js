import { useState } from 'react'
export default function TemplateDesigner({onSave}){
  const [title,setTitle]=useState('')
  const [example,setExample]=useState('')
  return (
    <div>
      <h4>Template Designer (UI)</h4>
      <input placeholder='Template title' value={title} onChange={e=>setTitle(e.target.value)} />
      <input placeholder='Example prompt' value={example} onChange={e=>setExample(e.target.value)} />
      <button onClick={()=>{ if(onSave) onSave({title,example}); setTitle(''); setExample('')}}>Save Template</button>
    </div>
  )
}
