import React from 'react';
import axios from 'axios';


export default class Leaderboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scores: []
    };
  }

  componentDidMount() {
    axios.get('/api/quizstamps')
      .then(res => {
        const scores = res.data;
        this.setState({ scores });
      })
  };

  render() {
    if(this.state.scores[0]){
    return (
      <div className='leaderboard'>
        <h3>Leaderboard:</h3>
        <h4>1. {this.state.scores[0].name} ||{this.state.scores[0].score}||</h4>
        <h4>2. {this.state.scores[1].name} ||{this.state.scores[1].score}||</h4>
        <h4>3. {this.state.scores[2].name} ||{this.state.scores[2].score}||</h4>
      </div>
    );
    } else {
        return <h1>Loading...</h1>
    }
  }
}
