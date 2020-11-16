import EmployeeList from "./EmployeeList";
import { Component } from "react";
import { withRouter } from 'react-router';

class Dashboard extends Component{

    render(){

        return(
            <EmployeeList/>
        );
    }
}

export default withRouter(Dashboard);