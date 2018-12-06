import React from 'react';
import T from 'prop-types';

// This is a very simple example of a component.
// As we start adding more complexity (inifinite scroll,
// loading indictor, sorting, etc) we could add in other
// files in the directory to help
const List = ({ data }) => {
  if (!data.length) {
    return <p>Sorry, no data...</p>;
  }

  return (
    <ul>
      {
        data.map(x => (
          <li key={x.id}>{JSON.stringify(x)}</li>
        ))
      }
    </ul>
  );
};

List.propTypes = {
  data: T.array.isRequired,
};

export default List;
