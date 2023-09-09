import { useState } from "react";
import {StyledSelect} from '../styles'

export const SelectInput = ({label, placeholder, options, name, onChangeHandler}) => {
    const [selectedValue, setSelectedValue] = useState(options[0].value)
    console.log(selectedValue)
    return (
        <StyledSelect 
        value={selectedValue} 
        onChange={onChangeHandler} 
        name={name}
      >
       {options.map((option, index) => <option key={index} value={option.label}>{option.value}</option>)}
      </StyledSelect>
    )
}