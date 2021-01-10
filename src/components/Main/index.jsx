import { useEffect, useState } from 'react';
import axios from '../../services/messagesAPI';

import './style.css';

const Main = () => {
  const [messages, setMessages] = useState([]);
  const [totalMessagesOnServer, setTotalMessagesOnServer] = useState(0);

  useEffect(() => {
    axios.get('messages')
      .then(({ data }) => {
        setMessages(data.messages);
        setTotalMessagesOnServer(data.total);
      });
  }, []);

  return (
    <>
      <main className="main">
        <p className="total-messages">
          Total de mensagens: {totalMessagesOnServer}
        </p>

        <section className="messages">
          {
            messages.map(({ _id, message, author, createdAt }) => {
              const formattedDate = new Date(createdAt).toLocaleString();

              return (
                <article key={_id}>
                  <p>{message}</p>
                  <strong>{author} - {formattedDate}</strong>
                </article>
              )
            }).reverse()
          }
        </section>

        <button className="load-messages">
          Carregar mais mensagens
        </button>
      </main>

      <footer>
        <p>Created by um monte de gente bla bla bla...</p>
      </footer>
    </>
  );
}

export default Main;
