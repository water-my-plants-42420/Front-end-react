import React from 'react';
import axios from 'axios';
import { Input, Button, Form } from './Styled';

class Signup extends React.Component {
  state = {
    newCreds: {
      username: '',
      password: '',
      phone: '',
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
      .post(
        'https://watermyplants-backend.herokuapp.com/api/auth/register',
        this.state.newCreds
      )
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

            <Input
              type="text"
              name="username"
              placeholder="UserName"
              required="required"
              value={this.state.newCreds.username}
              onChange={this.handleChange}
            />

            <Input
              type="password"
              name="password"
              placeholder="Password"
              required="required"
              value={this.state.newCreds.password}
              onChange={this.handleChange}
            />

            <Input
              type="text"
              name="phone"
              placeholder="Phone Number"
              required="required"
              value={this.state.newCreds.phone}
              onChange={this.handleChange}
            />

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
