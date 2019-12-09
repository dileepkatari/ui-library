import React from 'react';
import { Button, ButtonToolbar, Form, Row, Col } from 'react-bootstrap'





class Registration extends React.Component {
    constructor() {
        super();
        this.state = {
            Firstname: '',
            Lastname:'',
            Email:'',
            Mobile:'',
            Username:'',
            Password:'',
            Confirmpassword:''

    }
}
    changefirstname = e => {
        this.setState({ Firstname: e.target.value })
    }
    changelastname = e => {
        this.setState({Lastname: e.target.value })
    }
    changeemail = e => {
        this.setState({Email: e.target.value })
    }
    changemobile = e => {
        this.setState({Mobile: e.target.value })
    }
    changeusername = e => {
        this.setState({Username: e.target.value })
    }
    changepassword = e => {
        this.setState({Password: e.target.value })
    }
    changeconfirmpassword = e => {
        this.setState({Confirmpassword: e.target.value })
    }
    register = () => {
        if(this.state.Firstname===''){
        
        }
    }
        render() {

            return (
                <div className='second'>
                    <h1 className='heading'>REGISTRATION FORM</h1>
                    
                    <form className='styling'>
                    <div className='first'>
                        <Row >
                            <Col lg={12} md={12} sm={12} className="np-left">
                                <label><b>First Name </b></label><br />
                                <input type="text" onChange={this.changefirstname} required="required" />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12} md={12} sm={12} className="np-left">
                                <label><b>Last Name</b> </label><br />
                                <input type="text"  onChange={this.changelastname}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12} md={12} sm={12} className="np-left">

                                <label> <b>Email </b></label><br />
                                <input type="text" onChange={this.changeemail}
                                />

                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12} md={12} sm={12} className="np-left">
                                <label><b> Mobile </b></label><br />
                                <input type="text"  onChange={this.changemobile} />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12} md={12} sm={12} className="np-left">
                                <label><b> User Name </b></label><br />
                                <input type="text"  onChange={this.changeusername} />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12} md={12} sm={12} className="np-left">
                                <label><b>Password </b></label><br />
                                <input type="password"   onChange={this.changepassword}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12} md={12} sm={12} className="np-left">
                                <label><b>Confirm Password </b></label><br />
                                <input type="text"  onChange={this.changeconfirmpassword} />
                            </Col>
                        </Row>
                        <input type="submit" value="Submit"></input>
                        </div>
                    </form>
                   

                </div>

            )

        }
    }
    export default Registration;
