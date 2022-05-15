import React from 'react';
import { components } from 'react-select';
import PropTypes from 'prop-types';

const { Option } = components;

const IconOption = (props) => {
  const { data: { icon, label } } = props;
  return (
    <Option {...props}>
      <img
        src={`/assets/flags/${icon}`}
        style={{ width: 20 }}
        alt={label}
      />
      {` ${label}`}
    </Option>
  );
};

IconOption.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export default IconOption;
