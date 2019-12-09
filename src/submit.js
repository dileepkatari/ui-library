import React from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
class Submitting extends React.Component {
    state = {
        fname: ''
      };
      changeHandler = event => {
        this.setState({ fname: event.target.value });
      };
    render() {
        return (
            <form
            className="needs-validation"
            onSubmit={this.submitHandler}
            noValidate
          >
            <MDBBtn color="primary" type="submit">
            Submit Form
          </MDBBtn>
            </form>
    
        );
    }
}
export default Submitting;

