import React from 'react';
import { LinkButton } from 'state-template';

const Home = () => (
  <div>
    <h1>In Home Page...</h1>
    <div className={'btn-row'}>
      <LinkButton text={'View Loading Data'} to={'/loadingData'} variant={'primary'} />
      <LinkButton text={'View Help Page'} to={'/help'} />
    </div>
  </div>
);

export default Home;
