import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const selectStyles = {
  menu: (provided, state) => ({
    ...provided,
    width: '25vw',
    backgroundColor: '#25262A',
    color: '#2B7A78',
    padding: 10,
  }),

  control: () => ({
    width: '30vw'
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    const color = 'color #DEF2F1';
    return { ...provided, opacity, transition, color };
  },
  multiValue: (styles) => {
    return {
      ...styles,
      backgroundColor: '#25262A',
    };
  },
  multiValueLabel: (styles) => ({
    ...styles,
    color: '#DEF2F1',
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: '#E1315B',
    ':hover': {
      backgroundColor: data.color,
      color: 'white',
    },
  }),
};

const SelectField = (
  {
    single,
    options,
    handleOnChange
  }) => {
  const animatedComponents = makeAnimated()

  if (single) {
    return (
      <Select
        closeMenuOnSelect={true}
        components={animatedComponents}
        styles={selectStyles}
        options={options}
        onChange={handleOnChange}
        autoFocus={true}
      />
    )
  }
  return (
    <Select
      isMulti
      closeMenuOnSelect={false}
      components={animatedComponents}
      options={options}
      onChange={handleOnChange}
      key={options.id}
      styles={selectStyles}
      isSearchable
    />
  )
}
export default SelectField
