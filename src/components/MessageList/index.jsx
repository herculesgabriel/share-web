import { useEffect, useState } from 'react';

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

  const loadMoreMessages = () => {
    if (readMessages + 3 >= messages.length) window.location.reload();
    setReadMessages(readMessages + 3)
  };
  if ( messages.length === 0 ) return <p className="loading">carregando mensagens...</p>
  return (
    <p>
      <main className="message-list">
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
            Mostrar mais mensagens
          </button>
        </div>
      </main>

      <footer className="message-list-footer">
        <p>Já recebemos um total de {totalMessagesOnServer} mensagens | Created by Dan & Hercules</p>
      </footer>
    </p>
  );
}

export default MessagesList;
