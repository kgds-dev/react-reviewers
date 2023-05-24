import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UserDetails from './UserDetails';
import Name from './NameComp';
import Counter from './exercise1';
import Login from './login/login';
import SignUpForm from './signup/signup';
import ProductList from './products/ProductList';
import apiService from './api-service/apiService';

function App() {
  // const name = 'Alex';
  // const age = 20;
  // const element = <h1>Hello, {name}</h1>;
  // const anchorTag = <a href="https://google.com" target='_blank'>Go to google</a>


  // const img = `url(${name})`;

  // const divStyle = { // camelCase
  //   color: 'blue',
  //   // backgroundImage: 'url(' + imgUrl + ')',
  // };

  // const userData = [
  //   {
  //     name: 'Felix Santos',
  //     age: 25,
  //     citizenship: 'Filipino'
  //   },
  //   {
  //     name: 'Alexander Smith',
  //     age: 31,
  //     citizenship: 'American'
  //   },
  // ];

  // const data = {
  //   id: 1,
  //   quantity: 100,
  //   amount: 500,
  //   description: 'Toy Doll'
  // }

  // if (test) {
  //   divStyle.color = 'red';
  // }

  // imaginary user table inside your database (response of your API)
  // const userData = [
  //   {
  //     username: 'kimbo123',
  //     password: 'root123'
  //   },
  //   {
  //     username: 'graham123',
  //     password: 'root123'
  //   }
  // ];

  const [userData, setUserData] = useState([])

  useEffect(() => {
    apiService.get('/users/getUsers')
    .then(response => {
      setUserData(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  }, []);

  // const products = [
  //   { id: 1, name: 'Product A', category: 'Category 1' },
  //   { id: 2, name: 'Product B', category: 'Category 2' },
  //   { id: 3, name: 'Product C', category: 'Category 1' },
  //   { id: 4, name: 'Product D', category: 'Category 3' },
  // ];

  // const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];

  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      {/* <Counter /> */}

      {/* Sample login system activity */}
      {/* <Login userData={userData}/> */}
      {/* <ProductList products={products} categories={categories} /> */}
      <Login data={userData} />
    </div>
  );
}

export default App;
