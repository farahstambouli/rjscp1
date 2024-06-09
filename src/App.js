import logo from './logo.svg';
import './App.css';
import React from 'react';
//import {Card} from 'react-bootstrap'so that bootstrap can be used
import {Card} from 'react-bootstrap';
//always import the components you created
import product from './product';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';


const firstName = "Daisy";

function App() {
  return (
    <div className="App">
     <div className="card" style={{width: '18rem', margin: '20px auto'}}>
  <img src={product.image} className="card-img-top" alt="daisy perfume"/>
  <div className="card-body">
    <h5 className="card-title">{product.name}</h5>
    <p className="card-text">{product.description}</p>
    <p className="card-text">{product.price}</p>
    <a href="#" className="btn btn-primary">Buy Now</a>
  </div>
</div>
<p>Hello, {firstName? firstName : "hi there"}</p>
{firstName && <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0b3nRk7eH4nEG4OxBJSEx462IuY4Quf56PA&s'  alt='hi little daisy'  />}
    </div>
  );
}

export default App;
