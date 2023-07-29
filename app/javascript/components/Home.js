import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section>
      <h2 class="m-3">Welcome to my app!</h2>
      <Link to="/greeting">
        <button class = 'mx-3 btn btn-primary'>Random Greeting</button>
      </Link>
    </section>
  );
}

export default Home;