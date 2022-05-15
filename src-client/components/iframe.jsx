import React from 'react';
import PropTypes from 'prop-types';

const Iframe = (props) => {
  const { path } = props;
  const fullPath = !path.includes('http') ? `${process.env.PUBLIC_URL}/assets/resources/${path}` : path;

  return (
    <div className="col-md-12">
      <div className="emdeb-responsive">
        <iframe
          style={{
            width: '-webkit-fill-available',
            height: 'auto',
            minHeight: '50vh'
          }}
          title={Math.random().toString(36).substring(7)}
          src={fullPath}
        />
      </div>
    </div>
  );
};

Iframe.propTypes = {
  path: PropTypes.string.isRequired
};

export default Iframe;
