/* eslint-disable no-unused-vars */
/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const SelectFixBugs = (props) => {
  const {
    index,
    onChangeFixBugs,
    inputs: { options, selected },
    isDisabled
  } = props;

  const defaultOption = {
    value: selected,
    label: selected,
    input: index
  };
  const selectOptions = options.map((option, optionIndex) => ({
    value: option,
    label: option,
    index: optionIndex + 1,
    input: index
  }));
  selectOptions.push(defaultOption);

  const longerOption = [...options, selected].reduce(
    (a, b) => (String(a).length > String(b).length ? String(a) : String(b))
  ) || String(selected);

  return (
    <div style={{ width: `${String(longerOption).length * 8 + 57}px` }}>
      <Select
        key={index}
        isDisabled={isDisabled}
        onChange={onChangeFixBugs}
        defaultValue={defaultOption}
        options={selectOptions}
      />
    </div>
  );
};

SelectFixBugs.defaultProps = {
  onChangeFixBugs: null
};

SelectFixBugs.propTypes = {
  index: PropTypes.number.isRequired,
  onChangeFixBugs: PropTypes.func,
  inputs: PropTypes.shape({
    options: PropTypes.arrayOf(PropTypes.any).isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    selected: PropTypes.any.isRequired,
  }).isRequired,
  isDisabled: PropTypes.bool.isRequired
};

export default SelectFixBugs;
