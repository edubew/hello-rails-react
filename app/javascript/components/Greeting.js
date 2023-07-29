import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomGreeting } from '../redux/greetings';
import { Link } from 'react-router-dom';

const Greeting = () => {
  const greeting = useSelector(state => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRandomGreeting());
  }, [dispatch]);

  return (
    <section>
      <h2 class="m-3">Greetings Page</h2>
      <h3 class = 'm-2 btn btn-success'>{greeting}</h3>
      <Link to="/">
        <button class = 'm-2 btn btn-primary'>Home</button>
      </Link>
    </section>
  );
};

export default Greeting;
