import React from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";

class FormsPage extends React.Component {
  state = {
    fname: "",
    lname: "",
    email: "",
    username:'',
    city: "",
    state: "",
    zip: "",
    password:'',
    confirmpassword:''
  };

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = event => {
    this.setState({ fname: event.target.value });
  };
  changelastname = e => {
    this.setState({ lname: e.target.value });
  }
  changeusername = e => {
    this.setState({ username: e.target.value });
  }
  changecity = event => {
    this.setState({ city: event.target.value });
  };
  changestate = e => {
    this.setState({ state: e.target.value });
  }
  changezip= e => {
    this.setState({ zip: e.target.value });
  }
  changepassword = event => {
    this.setState({ password: event.target.value });
  };
  changeconfirmpassword = e => {
    this.setState({ confirmpassword: e.target.value });
  }
 
  render() {
    return (
      <div>
        <h1 className='heading'>Registration Form</h1>
        <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
          <MDBRow>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterNameEx"
                className="grey-text"
              >
            
              </label>
              <input

                name="fname"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                placeholder="First name"
              required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterEmailEx2"
                className="grey-text"
              >
                
              </label>
              <input
                name="lname"
                onChange={this.changelastname}
                type="text"
                id="defaultFormRegisterEmailEx2"
                className="form-control"
                placeholder="Last name"
                required
              
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterConfirmEx3"
                className="grey-text"
              >
            
              </label>
              <input

                onChange={this.changemail}
                type="text"
                id="defaultFormRegisterConfirmEx3"
                className="form-control"
                name="email"
                placeholder="Your Email address"
                required
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterNameEx"
                className="grey-text"
              >
              
              </label>
              <input
              // value={this.state.username}
                name="username"
              onChange={this.changeusername}
                type="text"
                id="defaultFormRegisterEmailEx2"
                className="form-control"
                placeholder="username"
                required
              />
              <div className="valid-feedback">Looks good!</div>
              
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterEmailEx2"
                className="grey-text"
              >
                
              </label>
              <input
                //value={this.state.lname}
                name="lname"
                onChange={this.changepassword}
                type="password"
                id="defaultFormRegisterEmailEx2"
                className="form-control"
                placeholder=" password"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterConfirmEx3"
                className="grey-text"
              >
                
              </label>
              <input
               // value={this.state.lname}
                name="lname"
                onChange={this.changeconfirmpassword}
                type="text"
                id="defaultFormRegisterEmailEx2"
                className="form-control"
                placeholder="Confirm password"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                
              </label>
              <input
               // value={this.state.city}
                onChange={this.changecity}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="city"
                placeholder="City"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid city.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                
              </label>
              <input
             //   value={this.state.state}
                onChange={this.changestate}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="state"
                placeholder="State"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                
              </label>
              <input
               // value={this.state.zip}
                onChange={this.changezip}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="zip"
                placeholder="Zip"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid zip.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
          </MDBRow>
          <MDBCol md="4" className="mb-3">
            <div className="custom-control custom-checkbox pl-3">
              <input
                className="custom-control-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label className="custom-control-label" htmlFor="invalidCheck">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </MDBCol>

          <MDBBtn color="primary" type="submit">
            Submit Form
          </MDBBtn>
        </form>
      </div>
    );
  }
}

export default FormsPage;