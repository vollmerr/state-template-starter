import React from 'react';

import Page from '../../components/Page';

export default () => (
  <Page>
    <h1>In Help Page...</h1>
    <p>By defualt, links such as the `Contact Us` link, point to this page.</p>
    <p>
To change this, set a `contactLink` in the main StateTemplate container
entry point where routes are set.
    </p>
  </Page>
);
