import './App.css';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

function App() {

  const [wish,setWish] = useState()
  const [wishlist,setWishlist] = useState([])

  const onInputChange = (event) => {
    setWish(event.target.value)
  }

  const onAddClick = () => {
    setWishlist([...wishlist, {id:uuid(), wish:wish}])
    console.log(wishlist);
    
  }

  return (
    <>
      <div>
        <h1>Wishlist App</h1>
      </div>
      <div>
        <input value={wish} onChange={onInputChange} type="text" placeholder="Enter your Wish" />
        <button onClick={onAddClick}>Add</button>
      </div>
      <div>
        <h2>My Wishlist</h2>
        <ul>
          {wishlist.map(item => (
            <li key={item.id}>{item.wish}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
