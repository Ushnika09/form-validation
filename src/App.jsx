import React from 'react'
import ContactForm from './Components/ContactForm'

function App() {
  return (
    <div
        className="flex justify-center items-center h-screen bg-cover bg-center"
        style={{backgroundImage:`url("https://plus.unsplash.com/premium_photo-1684341008385-31d2eb4f3afe?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`
        }}>
      <ContactForm/>
    </div>
  )
}

export default App