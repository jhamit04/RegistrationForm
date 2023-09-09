import { EmployeeListTable } from '../styles';
import EmployeeListTablesBody from '../Components/EmployeeListsTableBody';
import EmployeeListTablesHead from '../Components/EmployeeListTableHead';
const EmployeeDetailsForm = () => {

    return(
        <>
            <EmployeeListTable>
                <EmployeeListTablesHead/>
                <EmployeeListTablesBody/>
            </EmployeeListTable>
        </>
    )
}

export default EmployeeDetailsForm;