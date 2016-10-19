import React from 'react';

const DefaultLayout = ({ children }) =>
  <div>
    {children}
  </div>;

DefaultLayout.propTypes = {
  children: React.PropTypes.object,
};

export default DefaultLayout;
