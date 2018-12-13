import React from 'react';
import T from 'prop-types';
import { MainContent, MainPrimary, Section } from 'state-template';

const Page = ({ children }) => (
  <MainContent>
    <Section>
      <MainPrimary>
        {children}
      </MainPrimary>
    </Section>
  </MainContent>
);

Page.propTypes = {
  children: T.element.isRequired,
};

export default Page;
