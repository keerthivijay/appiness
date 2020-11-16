import { Component } from "react";
import { connect } from 'react-redux';
import PageHeader from "../UI/PageHeader";

class EditEmployee extends Component{

    constructor(props){
        super(props)
        this.state = {
            name:'',
            age:'',
            gender:'',
            email:'',
            mobileNo:'',
            id:''
        }
    }
    

    submitHandler = event => {
        event.preventDefault();
        this.props.editEmployee(this.state);
        this.props.history.goBack();
    }

    formChangeHandler = event => {
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    componentDidMount(){
        //console.log(this.props);

        console.log(this.props.match.params);

        let employeeDet = this.getEmployee(this.props.match.params.id);

        this.setState(
            {
                name: employeeDet.name,
                age: employeeDet.age,
                gender:employeeDet.gender,
                email:employeeDet.email,
                phoneNo:employeeDet.phoneNo,
                id:employeeDet.id,
                rowId:this.props.match.params.id
            }
        );
    }

    getEmployee = (index) => {

        console.log(index);
        let employeeDetails = this.props.employeeDetails[index];

        console.log(this.props.employeeDetails);
        console.log(this.props.employeeDetails[index]);

        return employeeDetails;
    }

    render(){

        console.log(this.props);

        return(
            <div>
                <PageHeader title="Edit employee" />

                <div class="row justify-content-center align-items-center">
                    
                <form onSubmit={this.submitHandler} method="POST" className="needs-validation" noValidate>
                    <div className="col-md-12 mb-3">
                        <label>Name</label>
                        <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.formChangeHandler} required />
                    </div>
                    <div className="col-md-12 mb-3">
                        <label>Age</label>
                        <input type="text" name="age" className="form-control" value={this.state.age} onChange={this.formChangeHandler} required />
                    </div>
                    <div className="col-md-12 mb-3">
                        <label>Gender</label>
                        <input type="text" name="gender" className="form-control" value={this.state.gender} onChange={this.formChangeHandler} />
                    </div>
                    <div className="col-md-12 mb-3">
                        <label>E-mail</label>
                        <input type="text" name="email" className="form-control" value={this.state.email} onChange={this.formChangeHandler} />
                    </div>
                    <div className="col-md-12 mb-3">
                        <label>Mobile No.</label>
                        <input type="text" name="phoneNo" className="form-control" value={this.state.phoneNo} onChange={this.formChangeHandler} />
                    </div>
                    <div className="col-md-12 mb-3">
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>
                </form>

                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        employeeDetails : state.users
    }
}

const mapDispatchToProps = dispatch => {

    return{
        getEmployee : (listIndex)=> dispatch({type:'GET_EMPLOYEE',param:listIndex}),
        editEmployee : (params) => dispatch({type:'UPDATE_EMPLOYEE',param:params})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditEmployee);