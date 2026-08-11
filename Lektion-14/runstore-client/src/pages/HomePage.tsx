import runstore from '../assets/runstore.png';
import jogging from '../assets/jogging-forest.png';
import './homePage.css';

function HomePage() {
  return (
    <main id='home-page' className='container'>
      <h1>Välkommen till RunStore</h1>
      <div>
        <img src={jogging} alt='forest' className='landing-image' />
        <img src={runstore} alt='logotype' className='landing-logo' />
      </div>
      <section>
        <h3>Vi hjälper dig att komma igång</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ex?
          Delectus aspernatur vitae, voluptates quidem iusto fuga eligendi
          molestias reprehenderit quo omnis voluptatibus quam maxime explicabo
          dolorem! Quas, in exercitationem.
        </p>
      </section>
    </main>
  );
}
export default HomePage;
