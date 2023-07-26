import React from 'react';
import './App.css';

const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.imageUrl} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">Price: ${product.price}</p>
      </div>
    </div>
  );
};

const ProductsScreen = () => {
  return (
    <div className="container">
      <div className="row">
        {productsArr.map((product, index) => (
          <div key={index} className="col-md-3">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>E-commerce Products</h1>
      </header>
      <main>
        <ProductsScreen />
      </main>
    </div>
  );
}

export default App;
