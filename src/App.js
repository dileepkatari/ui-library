import React from 'react';
import './App.css';
import Registration from './registration form';
import FormsPage from './boot';
import Firstname from './firstname';
import LastName from './Lastname';
import { Row, Col } from 'react-bootstrap'
import Birth from './Dob'
import EducationDegree from './Education'
import GenderSelect from './Gender'
import Submitting from './submit'
import Login from './Login';


function App() {
  return (
    <div >
       < FormsPage /> 
       < Login />
      
    
      
    </div>
  );
}
 
export default App;