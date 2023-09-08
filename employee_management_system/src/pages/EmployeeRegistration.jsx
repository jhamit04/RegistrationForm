import React from 'react';
import{AiOutlineCalendar} from 'react-icons/ai'
import {  FormLabel, RegistrationFormHeading, TextInput, Select} from '../styles';

function EmployeeRegistration() {
  return (
    <>
      <RegistrationFormHeading>Employee  Registration  Form</RegistrationFormHeading>
      <div className='section'>
      <FormLabel>First Name</FormLabel>
      <TextInput placeholder='Enter your name'></TextInput>
      <FormLabel>Last Name</FormLabel>
      <TextInput placeholder='Enter your name' ></TextInput>
      </div>
      
      <FormLabel>DOB</FormLabel>
      <TextInput type='month'placeholder='Enter your dob'></TextInput>
      <FormLabel>Study</FormLabel>
      <TextInput placeholder='B.E'></TextInput>
      <FormLabel>Start date</FormLabel>
      <TextInput placeholder='2-6-22'></TextInput>
      <FormLabel>End date</FormLabel>
      <TextInput placeholder='7-7-2023'></TextInput>
      <FormLabel>Current salary</FormLabel>
      <TextInput placeholder='30000'></TextInput>
      <FormLabel>Description</FormLabel>
      <TextInput placeholder='30000'></TextInput>

      
      

    </>
  )
}

export default EmployeeRegistration
