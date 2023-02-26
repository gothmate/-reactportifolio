import { useState } from 'react'
import ContactBig from '/GetInTouchBig.svg'


export default function Contato() {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [contact, setContact] = useState([])

  const API = "http://localhost:3000";

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const data = {
      nome: nome,
      email: email,
      msg: msg
    }
    console.log(data)

    fetch(API+'/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())

    setNome('')
    setEmail('')
    setMsg('')
    
  }

  return (
    <section className="pageContainer" id="contatos">
      <img className="contact big" src={ContactBig} alt="Contato" />
      <div className="bloco">
        <div className="texto">
          <h1>Contact</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" name="nome" onChange={(e) => setNome(e.target.value)} placeholder="Name" /><br />
            <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" /><br />
            <textarea name="msg" onChange={(e) => setMsg(e.target.value)} placeholder="Message" /><br />
            <button type="submit" onClick={handleSubmit}>Enviar</button>
          </form>
        </div>

      </div>
    </section>
  )
}
