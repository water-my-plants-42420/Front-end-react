import React from 'react';
import axios from 'axios';
import { Input, Button, Form } from './Styled';

class Signup extends React.Component {
  state = {
    newCreds: {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
    },
  };
  handleChange = (ev) => {
    this.setState({
      newCreds: {
        ...this.state.newCreds,
        [ev.target.name]: ev.target.value,
      },
    });
  };

  register = (ev) => {
    ev.preventDefault();
    axios
      .post('https://watermyplants-backend.herokuapp.com/', this.state.newCreds)
      .catch((error) => console.log(error));
    this.setState({ newCreds: '' });
    this.props.history.push('/login');
  };

  render() {
    return (
      <div className="signup">
        {console.log(this.state.newCreds)}

        <div className="form-header">
          <h2> Signup</h2>
        </div>
        <div className="form-box">
          <Form onSubmit={this.register}>
            <h2>Water My Plants</h2>
            <i className="fas fa-user">
              <Input
                type="text"
                name="firstName"
                placeholder="First Name"
                required="required"
                value={this.state.newCreds.firstName}
                onChange={this.handleChange}
              />
            </i>
            <i className="fas fa-user">
              <Input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required="required"
                value={this.state.newCreds.lastName}
                onChange={this.handleChange}
              />
            </i>
            <i className="fas fa-user">
              <Input
                type="text"
                name="username"
                placeholder="UserName"
                required="required"
                value={this.state.newCreds.username}
                onChange={this.handleChange}
              />
            </i>
            <i className="fas fa-unlock-alt">
              <Input
                type="password"
                name="password"
                placeholder="Password"
                required="required"
                value={this.state.newCreds.password}
                onChange={this.handleChange}
              />
            </i>
            <i className="fas fa-phone">
              <Input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                required="required"
                value={this.state.newCreds.phoneNumber}
                onChange={this.handleChange}
              />
            </i>
            <div>
              <Button>Sign up</Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default Signup;
