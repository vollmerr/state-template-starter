import React from 'react';

import Page from '../../components/Page';

export default () => (
  <Page>
    <h1>In Help Page...</h1>
    <p>By default, links such as the `Contact Us` link point to the cdt support page.</p>
    <p>To change this, pass a `contactLink` to the StateTemplate in App/index.js</p>
    <p>{'For example, to link to this page pass "contactLink={{ text: \'Contact Us\', to: \'/help\' }}"'}</p>
  </Page>
);
