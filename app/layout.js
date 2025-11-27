
import '../styles/globals.css';

export default function RootLayout({children}) {
  return (
    <html>
      <body>
        <div className='card'>
          <h1>AI Card Studio</h1>
        </div>
        {children}
      </body>
    </html>
  )
}
