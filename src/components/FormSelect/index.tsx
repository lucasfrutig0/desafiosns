import Select from "react-select";
import { FaList } from "react-icons/fa";
import { BsFillGrid3X2GapFill } from "react-icons/bs"
import { ReactElement, useState } from "react";

import { IconOption } from "./styles"
import { useAppContext } from "context/AppContext";

const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    width: state.selectProps.width,
    borderBottom: '1px dotted pink',
    color: state.selectProps.menuColor,
    padding: 20,
  }),

  control: (_, { selectProps: { width }}) => ({
    width: width
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}

const FormSelect = (): ReactElement =>  {
  const { setView } = useAppContext();
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: 'table', label: (
      <IconOption>
        <FaList /> List View
      </IconOption>
    )},
    { value: 'grid', label: (
      <IconOption>
        <BsFillGrid3X2GapFill /> Grid View
      </IconOption>
    )},
  ];

  const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: 'var(--clr-lightGray)' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = "gray";
      return {
        ...styles,
        backgroundColor: isDisabled ? 'red' : "var(--clr-lightGray)",
        color: 'var(--clr-text)',
        cursor: isDisabled ? 'not-allowed' : 'default',

      };
    },
  };

  const handleChange = ({value}) => {

    setView(value)
  }

  return (
    <div>
      <Select
          styles={colourStyles}
          className="basic-single"
          classNamePrefix="select"
          defaultValue={options[0]}
          name="color"
          options={options}
          onChange={handleChange}
        />
    </div>
  );
}

export { FormSelect }