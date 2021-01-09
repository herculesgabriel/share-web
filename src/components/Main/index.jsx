import { useEffect, useState } from 'react';
import axios from '../../services/messagesAPI';

import './style.css';

const Main = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('messages')
      .then(response => setMessages(response.data.message));
  }, []);

  return (
    <main className="messages">
      <section>
        {
          messages.map(({ message, author, created }) => {
            const formattedDate = new Date(created).toLocaleString();

            return (
              <article key={created}>
                <p>{message}</p>
                <strong>{author} - {formattedDate}</strong>
              </article>
            )
          })
        }
      </section>

      <button className="load-messages">Carregar mais mensagens</button>

      <footer>
        <p>Created by um monte de gente bla bla bla...</p>
      </footer>
    </main>
  );
}

export default Main;
