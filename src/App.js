import React, {useState} from 'react';
import api from './services/api';
import './App.css';
import logo from './assets/logo.svg';

function App() {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post('/login', {
      username,
      password
    });

    console.log(username, password);
  }

  return (
    <div className="container">
      <img src={logo} alt="Logo" />

      <div className="content">
        <p>
          Ofereca blabslblasblasbla <strong>spots</strong> para progamadores.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username *</label>
          <input 
            type="text" 
            id="username"
            placeholder="Seu melhor e-mail"
            value={username}
            onChange={event => setUsername(event.target.value) }
          />
        <input 
            type="password" 
            id="password"
            onChange={event => setPassword(event.target.value) }
          />
          <button className="btn" type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
