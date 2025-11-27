import Header from '../components/Header'
import { useState } from 'react'
import axios from 'axios'
export default function Home(){
  const [text,setText]=useState('')
  const [messages,setMessages]=useState([])
  async function handle(e){
    e.preventDefault()
    if(!text) return
    setMessages(prev=>[...prev, {role:'user', text}])
    try{
      const res = await axios.post('/api/chat', { text })
      setMessages(prev=>[...prev, {role:'ai', text: res.data.output}])
    }catch(e){ setMessages(prev=>[...prev, {role:'ai', text:'Error'}]) }
    setText('')
  }
  return (<div>
    <Header />
    <main className="container">
      <h2>AI Status Studio</h2>
      <form onSubmit={handle}>
        <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Ask AI to create a status..."></textarea>
        <div><button type="submit">Generate</button></div>
      </form>
      <section>
        {messages.map((m,i)=>(<div key={i} style={{border:'1px solid #eee', padding:8, marginTop:8}}>
          <strong>{m.role}</strong>: <div>{m.text}</div>
        </div>))}
      </section>
    </main>
  </div>)
}
