import React from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
class LastName extends React.Component {
    state = {
        lname: ''
      };
      submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
      };
    
      changeHandler = event => {
        this.setState({ lname: event.target.value });
      };
    render() {
        return (
            <form
            className="needs-validation"
            onSubmit={this.submitHandler}
            noValidate
          >
            <MDBRow>
            <MDBCol md="8" className="mb-3">
              <input

                name="fname"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                placeholder="Last Name"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            </MDBRow>
            </form>
    
        );
    }
}
export default LastName;