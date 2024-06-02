import './App.css';

const WhoAmI = ({name, surname, link}) => {
  return (
    <div className="App">
      <h1>My name is {name()}, surname  - {surname}</h1>
      <a href={link}>My profile</a>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <WhoAmI name={() => 'John'} surname="Smith" link="facebook.com" />
      <WhoAmI name={() => 'Alex'} surname="Shepard" link="vk.com" />
    </div>
  );
}

export default App;