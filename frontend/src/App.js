import React from 'react';
import data from './data';
function App() {
  return (
  <div className="grid-container">
      <header>
        <div className="homepage">
          <a className="header-link" href="index.html"> SAB's STORE </a>
        </div>      
        
        </header>

        <div className="links">
          <a href="/cart"> CART </a>
          <a href="/signin"> SIGN IN </a>
        </div>
      <div className="main">
        <ul>
          <div className="row center">
            {
              data.products.map((product) => (
                  <div 
                  key = {product.id}className="card">
              <a href={`/product/${product.id}`}>
                <img
                  className="medium"
                  src={product.image}
                  alt={product.name}
                />
              </a>
              <div className="card-body">
                <a href={`/product/${product.id}`}>
                  <h2>{product.name}</h2>
                </a>

                <div className="price center">{product.price}Rs</div>
              </div>
            </div>
          
              ))
            }
            </div>

        </ul>
      </div>
      <footer>All right reserved. &copy;</footer>
    </div>
    
  );
}

export default App;
