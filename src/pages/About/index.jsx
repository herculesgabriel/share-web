import Header from '../../components/Header';
import './style.css';

const AboutPage = () => (
  <>
    <Header />
    <div className="perfil-box">
      <div className="perfil">
        <img
          alt="fotinha do Dan"
          src="https://media-exp1.licdn.com/dms/image/C4E03AQE2r9RYE7OcHQ/profile-displayphoto-shrink_800_800/0/1597251278132?e=1616630400&v=beta&t=156GlbIyoEWCeGEH0eKUdIUeBgXh3PqlKNdDaQDkE-c"
        />
        <h1>Dan</h1>
        <p className="description">Aqui vem uma descrição Digdin falando sobre a gente.</p>
      </div>
      <div className="perfil">
        <img
          alt="fotinha do Herculito"
          src="https://i.imgur.com/nU2s8p5.jpg"
        />
        <h1>Herculito</h1>
        <p className="description">Aqui vem uma descrição Digdin falando sobre a gente.</p>
      </div>
    </div>
  </>
);

export default AboutPage;
