import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from '../../services/messagesAPI';

import './style.css';

const MessagesList = () => {
  const [messages, setMessages] = useState([]);
  const [totalMessagesOnServer, setTotalMessagesOnServer] = useState(0);
  const [readMessages, setReadMessages] = useState(0);

  useEffect(() => {
    axios.get('messages')
      .then(({ data }) => {
        setMessages(data.messages.reverse());
        setTotalMessagesOnServer(data.total);
      });
  }, []);

  const loadMoreMessages = () => setReadMessages(readMessages + 3);

  return (
    <>
      <main className="message-list">
        <p className="total-messages">
          Total de mensagens: {totalMessagesOnServer}
        </p>

        <section className="messages">
          {
            messages.slice(readMessages).map(({ _id, message, author, createdAt }) => {
              const formattedDate = new Date(createdAt).toLocaleString();

              return (
                <article key={_id}>
                  <p>{message}</p>
                  <strong>{author} - {formattedDate}</strong>
                </article>
              )
            })
          }
        </section>

        <div className="buttons">
          <button className="load-messages-button" onClick={loadMoreMessages}>
            Carregar mais mensagens
          </button>

          <button className="create-message-button">
            <Link to="/create-message">
              Compartilhar uma mensagem
            </Link>
          </button>
        </div>
      </main>

      <footer className="message-list-footer">
        <p>Created by um monte de gente bla bla bla...</p>
      </footer>
    </>
  );
}

export default MessagesList;
