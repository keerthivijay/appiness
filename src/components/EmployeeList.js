import { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from "react-router-dom";
import PageHeader from '../UI/PageHeader';

class EmployeeList extends Component{

    render(){
        console.log(this.props);
        let EmployeeList = this.props.employeeData.map((employee,key) => {
            return(
                <tr key={key}>
                    <th scope="row">{employee.name}</th>
                    <td>{employee.age}</td>
                    <td>{employee.gender}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phoneNo}</td>
                    <td><Link to={`/editemployee/${key}`}>edit</Link></td>
                </tr>
            );
        });

        return(
    
            <div>

            <PageHeader title="Employees" />

            <table class="table table-striped">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Gender</th>
                    <th scope="col">E-Mail</th>
                    <th scope="col">Mobile no.</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                    {EmployeeList}
                </tbody>
            </table>

            </div>
        );
    }
}

const mapsStateToProps = state => {

    console.log(state);

    return {
        employeeData : state.users
    }
}

// const mapDispatchToProps = dispatch => {

//     return {

//         editEmployee: (param) => dispatch({type:'EDIT_EMPLOYEE', param:param})
//     }   
// }

export default withRouter(connect(mapsStateToProps)(EmployeeList));