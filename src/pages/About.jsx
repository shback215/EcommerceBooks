import { Link } from 'react-router-dom';
import '../css/About.css';

function About() {
  return (
    <div className="about">
      <h2>About Books by Stanley B. Howard</h2>
      <div>
        <p className="justify">This website provides descriptions of books by Stanley B. Howard that are available
          on Amazon Books. These books are:</p>
          <p className="bullet-item">&bull; <i>When the Dogwood Blooms: Seasons in a Boys Life</i></p>
          <p className="bullet-item">&bull; <i>Icarus: An American Odyssey</i></p>
          <p className="bullet-item">&bull; <i>Me: Jack in the Box with OCD</i></p>
      </div>
      <nav>
        <Link to="/">Back to Home</Link>
      </nav>
    </div>
  );
}

export default About;