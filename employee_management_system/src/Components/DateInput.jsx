import { FormLabel, TextInput } from "../styles";
const DateInput = ({label, placeholder, type ,name, onChangeHandler}) =>{
    return(
        <>
        <FormLabel>{label}</FormLabel>
        <TextInput 
         onChange={onChangeHandler}
         placeholder={placeholder}
         type={type}
         name={name}/>
        </>
    )
}
export default DateInput;