import { DisplayFlex, FormLabel, TextInput } from "../styles";
const FormInputText = ({ label, placeholder,onChangeHandler, name, required}) => {
  return (
    <DisplayFlex column>
      <FormLabel>{label}</FormLabel>
      <TextInput
        onChange={onChangeHandler}
        placeholder={placeholder}
        name={name}
        required={required}
      ></TextInput>
    </DisplayFlex>
  );
};
export default FormInputText
