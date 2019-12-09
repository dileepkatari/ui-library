import React from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
class EducationDegree extends React.Component {
    state = {
        education: ''
      };
      changeHandler = event => {
        this.setState({ education: event.target.value });
      };
      submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
      };
    
    render() {
        return (
            <form
            className="needs-validation"
            onSubmit={this.submitHandler}
            noValidate
          >
            <MDBRow>
            <MDBCol >
              <select

            name="fname"
                onChange={this.changeHandler}
                type="date"
                id="defaultFormRegisterNameEx"
               className="form-control"
               
                required
              >
                   <option>Educational Qualification</option>
                  <option>Master's</option>
                  <option>PG</option>
                  </select>
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            </MDBRow>
            <MDBBtn color="primary" type="submit">
            Submit Form
          </MDBBtn>
            </form>
    
        );
    }
}
export default EducationDegree;