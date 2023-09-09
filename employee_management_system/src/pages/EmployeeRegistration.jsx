import React, { useEffect, useState } from 'react';
import '../App.css'
import FormInputText from '../Components/FormInputText';
import { SelectInput } from '../Components/SelectInput';
import DateInput from '../Components/DateInput';


import 
{ 
   RegistrationFormHeading,
   CancelButton,
   SaveButton,
   DisplayFlex,
  } from '../styles';

function EmployeeRegistration() {
  const[input, setInput] = useState({
    FirstName: '',
    LastName: '',
    DOB:'',
    Study:'',
    StartDate:'',
    EndDate:'',
    CurrentSalary:0,
    Description:'',
  });

  const[handleSubmit, setHandleSubmit] = useState('')
  const onchangeHandler = (e) => {
    setInput({...input, [e.target.name]:e.target.value})
  }

  
  const onClickHandler = () => {
    if(input.FirstName&&input.LastName){
      // setHandleSubmit('Form Submitted')
      fetch('https://sweede.app/DeliveryBoy/Add-Employee/',{
        method:'POST',
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify(input),         
      })
      .then((response)=>response.json())
      .then((data)=>console.log(data))
      console.log('useEffect run')
    }
    else{
      setHandleSubmit('Please Enter Name')
    }
  }
  console.log(input)
  return (
    <>
      <RegistrationFormHeading>Employee  Registration  Form</RegistrationFormHeading>
      <DisplayFlex>
      <FormInputText 
        required={true}
        name='FirstName'
        onChangeHandler={onchangeHandler}
        value={input.FirstName}
        label={'FirstName'}
        placeholder={'Enter your name'}/>
      <FormInputText
        required={true}
        name='LastName'
        onChangeHandler={onchangeHandler}
        value={input.LastName}
        label={'LastName'}
        placeholder={'Enter your name'}/>
      </DisplayFlex>
      <DateInput 
        name='DOB'
        onChangeHandler={onchangeHandler}
        value={input.DOB}
        label={'DOB'}
        placeholder={'Enter your dob'}
        type={'date'}/>
      <SelectInput 
        name='Study'
        onChangeHandler={onchangeHandler}
        options={[{ value:'B.E'},
        { value:'B.A'}]}
        label={'study'}
        >Study</SelectInput>
      <DisplayFlex>
      <DateInput
        name='StartDate'
        onChangeHandler={onchangeHandler}
        value={input.StartDate}
        label={'Start Date'}
        placeholder={'2-6-22'}
        type={'date'}/>
      <DateInput 
        name='EndDate' 
        onChangeHandler={onchangeHandler} 
        value={input.EndDate} 
        label={'End Date'} 
        placeholder={'7-7-23'} 
        type={'date'}/>
      </DisplayFlex>
      <FormInputText 
        name='CurrentSalary'
        onChangeHandler={onchangeHandler}
        value={input.CurrentSalary}
        label={'Current Salary'}
        placeholder={'30000'}/>

        <FormInputText 
        name='Description'
        onChangeHandler={onchangeHandler}
        value={input.Description}
        label={'Description'}
        placeholder={''}/>
      <CancelButton>Cancel</CancelButton>
      <SaveButton onClick={onClickHandler}>Save</SaveButton>
      <p style={{color:'red'}}>{handleSubmit}</p>
      
  

    </>
  )
}

export default EmployeeRegistration
