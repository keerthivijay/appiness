import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import EmployeeList from './components/EmployeeList';
import EditEmployee from './components/EditEmployee';
import { Route, Switch } from 'react-router';
import ProtectedRoute from './UI/ProtectedRoute';
import Layout from './UI/Layout';
import Dashboard from './components/Dashboard';
import Error404 from './components/404Error';

function App() {

  let isAuthenticated = sessionStorage.getItem('token')? true:false;

  return (
    <div className="App">
      <Layout>
        <Switch>
          <ProtectedRoute path="/editemployee/:id" isAuthenticated={isAuthenticated} component={EditEmployee} />
          <ProtectedRoute path='/dashboard' isAuthenticated={isAuthenticated} component={Dashboard} />
          <ProtectedRoute path="/employeelist" isAuthenticated={isAuthenticated} component={EmployeeList} />
          <Route path="/" exact component={Login} />
          <Route path='*' component={Error404} />
        </Switch>
      </Layout>

    </div>
  );
}

export default App;
