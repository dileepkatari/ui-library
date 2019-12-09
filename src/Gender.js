import React from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
class GenderSelect extends React.Component {
    state = {
        dob: ''
    };
    changeHandler = event => {
        this.setState({ dob: event.target.value });
    };
    render() {
        return (
            <form className="needs-validation"
            onSubmit={this.submitHandler}
            noValidate>
                 <span>
                     <label>Gender:</label>
                     <label>Male</label>
            
              <input

                name="fname"
                onChange={this.changeHandler}
                type="radio"
              // id="defaultFormRegisterNameEx"
               className="form-control"
                //placeholder="Last Name"
                required
              />
              </span>
              <div className="valid-feedback">Looks good!</div>

        
             
            </form>

        );
    }
}
export default GenderSelect;