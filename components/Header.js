import Link from 'next/link'
export default function Header(){
  return (
    <header style={{padding:12, borderBottom:'1px solid #eee'}}>
      <div style={{maxWidth:900, margin:'0 auto', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <h1 style={{margin:0}}>AI Status Studio</h1>
        <nav>
          <Link href='/' style={{marginRight:12}}>Home</Link>
          <Link href='/admin' style={{marginRight:12}}>Admin</Link>
          <Link href='/dashboard'>Dashboard</Link>
        </nav>
      </div>
    </header>
  )
}
