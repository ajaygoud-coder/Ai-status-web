
'use client';
import {useState} from 'react';

export default function Page(){
  const [prompt,setPrompt]=useState('');
  const [result,setResult]=useState('');

  async function go(){
    const res = await fetch('/api/ai/status',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({prompt})});
    const data = await res.json();
    setResult(data.output);
  }

  return (
    <div className='card'>
      <h2>Create Status</h2>
      <textarea onChange={e=>setPrompt(e.target.value)} />
      <button onClick={go}>Generate</button>
      <pre>{result}</pre>
    </div>
  )
}
