import { useEffect, useState } from "react";
import  SelectIcon  from "./SelectIcon";
import {
  EmployeeListTableBody,
  EmployeeListTableBodyContent,
  EmployeeListTableRow,
} from "../styles";

const EmployeeListTablesBody = () => {
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    fetch("https://sweede.app/DeliveryBoy/Get-Employee/")
      .then((response) => response.json())
      .then((data) => {
        return setEmployeeList(data);
      })
      .catch((error) => {
        console.log("something went wrong");
      });
  }, []);
  console.log(employeeList);

  return (
    <EmployeeListTableBody>
        {employeeList.map((value) => {
          return (
            <EmployeeListTableRow>
              <EmployeeListTableBodyContent key={value.id}>
                {value.FirstName} {value.LastName}
              </EmployeeListTableBodyContent>
              <EmployeeListTableBodyContent key={value.id}>
                {value.DOB}
              </EmployeeListTableBodyContent>
              <EmployeeListTableBodyContent key={value.id}>
                {value.StartDate}
              </EmployeeListTableBodyContent>
              <EmployeeListTableBodyContent key={value.id}>
                {value.EndDate}
              </EmployeeListTableBodyContent>
              <EmployeeListTableBodyContent key={value.id}>
                {value.Description}
              </EmployeeListTableBodyContent>
              <SelectIcon/>
              
            </EmployeeListTableRow>
          );
        })}
    </EmployeeListTableBody>
  );
};
export default EmployeeListTablesBody;
