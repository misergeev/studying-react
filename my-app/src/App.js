import { Component } from 'react';

import './App.css';

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      position: '',
    }
  }

  nextYear = () => {
    this.setState(state => ({
      years: state.years + 1
    }));
  }

  commitInputChanges = (e, color) => {
    console.log(color);
    this.setState({
      position: e.target.value,
    });
  }

  render() {
    const {name, surname, link} = this.props;
    const {years, position} = this.state;
    return (
      <div className="App">
        <button onClick={this.nextYear}>+++</button>
        <h1>My name is {name}, surname  - {surname}, years - {years}, position  -  {position}</h1>
        <a href={link}>My profile</a>
        <form>
          <span>Введите должность</span>
          <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')}/>
        </form>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <WhoAmI name="John" surname="Smith" link="facebook.com" />
      <WhoAmI name="Alex" surname="Shepard" link="vk.com" />
    </div>
  );
}

export default App;