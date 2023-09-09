import styled from "styled-components";

export const AppContainer = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
`;


export const RegistrationFormHeading = styled.div`
  
   font-family: Montserrat;
    font-size: 3rem;
    font-weight: 700;
    line-height: 4em;
    letter-spacing: 0px;
    text-align: center;
    color: #314363;
    width: 100%;
`;

export const FormLabel = styled.label`
  font-family: Montserrat;
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 1.1em;
  letter-spacing: 0.01em;
  text-align: left;
`;

export const TextInput = styled.input`
width: 100%;
  height: 54px;
  border-radius: 5px;
  font-family: Montserrat;
  font-size: 13px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.01em;
  text-align: left;
  padding: 1em;
  border: none;
  background-color: #F8FBFF;
  caret-color: #7E98BA;
  margin: 0,67px;
  margin: 40px,0px;
  margin-top: 20px;
  margin-bottom: 20px;
`;



export const DropDownInput = styled.input`
width: 100%;
height: 100%;
border-radius: 5px;
font-family: Montserrat;
font-size: 13px;
font-weight: 500;
line-height: 16px;
letter-spacing: 0.01em;
text-align: left;
padding: 1em;
border: none;
background-color: #F8FBFF;
caret-color: #7E98BA;
`;

export const DescriptionInput = styled.input`
width: 100%;
height: 100%;
border-radius: 5px;
font-family: Montserrat;
font-size: 13px;
font-weight: 500;
line-height: 16px;
letter-spacing: 0.01em;
text-align: left;
padding: 1em;
border: none;
background-color: #F8FBFF;
caret-color: #7E98BA;
`;

export const CancelButton = styled.button`
width: 297px;
height: 69px;
border-radius: 13px;
background-color:#E3E3E3;
margin-right: 30px;
cursor: pointer;
`;
export const SaveButton = styled.button`
width: 297px;
height: 69px;
border-radius: 13px;
border: 2px solid #142A51;
background-color: linear-gradient(0deg, #142A51, #142A51);
margin-left: 29px;
cursor: pointer;
`;

export const DisplayFlex = styled.div`
display: flex;

justify-content: space-around;
flex-direction: ${props => props.column ? 'column' : 'row'};
`;
export const StyledSelect = styled.select`
padding: 0.5em;
width: 100%;
margin: auto;
display: inline-block;

`;
export const EmployeeListTable = styled.table`
overflow: scroll;
width: 1330px;
height: 655px;
top: 205px;
left: 115px;
border-radius: 30px;
border: 1px;
background: linear-gradient(0deg, #D5D5D5, #D5D5D5),
linear-gradient(0deg, #FFFFFF, #FFFFFF);
border: 1px solid #D5D5D5;
margin: auto;


`;

export const EmployeeListTableHead = styled.thead`

`;
export const EmployeeListTableBody = styled.tbody`

`;
export const EmployeeListTableHeadContent = styled.th`

`;
export const EmployeeListTableRow = styled.tr`

`;
export const EmployeeListTableBodyContent = styled.td`

`
