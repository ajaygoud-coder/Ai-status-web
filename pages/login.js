import Header from '../components/Header'
import { signIn } from 'next-auth/react'
export default function Login(){
  return (<div><Header /><main className='container'>
    <h2>Login</h2>
    <button onClick={()=>signIn('google')}>Sign in with Google</button>
    <p>Configure NextAuth providers in .env.local</p>
  </main></div>)
}
