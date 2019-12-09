import React from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
class Birth extends React.Component {
    state = {
        dob: ''
      };
      changeHandler = event => {
        this.setState({ dob: event.target.value });
      };
    render() {
        return (
            <form
            className="needs-validation"
            onSubmit={this.submitHandler}
            noValidate
          >
            <MDBRow>
            <MDBCol md="2" className="mb-3">
              <input

            name="fname"
                onChange={this.changeHandler}
                type="date"
                id="defaultFormRegisterNameEx"
               className="form-control"
               // placeholder="Last Name"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            </MDBRow>
            </form>
    
        );
    }
}
export default Birth;