import logo from './logo.svg';
import './App.css';
import UserDetails from './UserDetails';
import Name from './NameComp';

function App() {
  const name = 'Alex';
  const age = 20;
  const element = <h1>Hello, {name}</h1>;
  const anchorTag = <a href="https://google.com" target='_blank'>Go to google</a>


  // const img = `url(${name})`;

  // const divStyle = { // camelCase
  //   color: 'blue',
  //   // backgroundImage: 'url(' + imgUrl + ')',
  // };

  const userData = [
    {
      name: 'Felix Santos',
      age: 25,
      citizenship: 'Filipino'
    },
    {
      name: 'Alexander Smith',
      age: 31,
      citizenship: 'American'
    },
  ];

  // const data = {
  //   id: 1,
  //   quantity: 100,
  //   amount: 500,
  //   description: 'Toy Doll'
  // }

  // if (test) {
  //   divStyle.color = 'red';
  // }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <div style={{ height: 10 }}>
            Hello KodeGo!
        </div>
        <UserDetails data={userData}/>
        <Name name={name}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reactsssss
        </a>
      </header>
    </div>
  );
}

export default App;
