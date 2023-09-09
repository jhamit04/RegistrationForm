import 
    {
     EmployeeListTableHead,
     EmployeeListTableHeadContent,
     EmployeeListTableRow,
    } from '../styles'

const EmployeeListTablesHead = () => {
    return(
        <EmployeeListTableHead>
                <EmployeeListTableRow>
                    <EmployeeListTableHeadContent>Name</EmployeeListTableHeadContent>
                    <EmployeeListTableHeadContent>DOB</EmployeeListTableHeadContent>
                    <EmployeeListTableHeadContent>StartDate</EmployeeListTableHeadContent>
                    <EmployeeListTableHeadContent>EndDate</EmployeeListTableHeadContent>
                    <EmployeeListTableHeadContent>Description</EmployeeListTableHeadContent>
                </EmployeeListTableRow>
        </EmployeeListTableHead>
    )
}
export default EmployeeListTablesHead;