import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import axios from '../../services/messagesAPI';

import './style.css';

const Message = () => {
  const [message, setMessage] = useState('');
  const [author, setAuthor] = useState('');

  const navigate = useHistory();

  const handleCreateMessage = () => {
    const messageData = { message, author };

    axios.post('messages', messageData)
      .then(({ data }) => {
        alert('Criado com sucesso!');
        navigate.push('/');
      })
      .catch((error) => {
        console.log(error);

        alert('Erro ao enviar mensagem!');
      });
  };

  return (
    <div className="create-message-container">
      <main className="create-message">
        <div className="title-box">
          <h1>Compartilhe uma conquista, um conselho ou apenas algo agradável de ler.</h1>
        </div>

        <form>
          <textarea
            className="message"
            name="message"
            id="message"
            placeholder="Escreva aqui sua mensagem..."
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>

          <div className="form-footer">
            <input
              className="author"
              type="text"
              name="author"
              id="author"
              placeholder="Quem é você? (Opcional)"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
            />

            <button className="share-button" type="button" onClick={handleCreateMessage}>
              Compartilhar
            </button>
          </div>
        </form>
      </main>

      <footer className="create-message-footer">
        <p>Created by Dan & Hercules</p>
      </footer>
    </div>
  );
}

export default Message;
