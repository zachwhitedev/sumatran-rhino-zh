import React from 'react';
import axios from 'axios';

export default class SubmitForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: ''
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  sendScoreToDB = () => {
    const newScore = {
      name: this.state.name,
      email: this.state.email,
      score: this.props.userscore
    };
    axios
      .post('/api/quizstamps', newScore)
      .then(res => res.data)
      .catch(err => console.loge(err));
  };

  render() {
    return (
      <div className='submit-form'>
        <form>
          <div>
            <h2>Your Score: {this.props.userscore}</h2>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='name'
              onChange={this.handleChange}
              value={this.state.name}
              required
            />
          </div>
          <div>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='email'
              onChange={this.handleChange}
              value={this.state.email}
              required
            />
          </div>
          <button onClick={this.sendScoreToDB}>Submit</button>
        </form>
      </div>
    );
  }
}
