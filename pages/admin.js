import Header from '../components/Header'
import TemplateDesigner from '../components/TemplateDesigner'
export default function Admin(){
  return (<div><Header /><main className='container'><h2>Admin</h2><TemplateDesigner onSave={(t)=>{ fetch('/api/templates',{method:'POST',body:JSON.stringify(t)}) }} /></main></div>)
}
