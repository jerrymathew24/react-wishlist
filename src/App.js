import './App.css';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

function App() {

  const [wish,setWish] = useState('')
  const [wishlist,setWishlist] = useState([])

  const onInputChange = (event) => {
    setWish(event.target.value)
  }

  const onAddClick = () => {
    setWishlist([...wishlist, {id:uuid(), wish:wish, isCompleted:false}])
    setWish('')
  }

  const onDeleteClick = (id) => {
    const filteredWishlist = wishlist.filter(item => item.id !== id)
    setWishlist(filteredWishlist)
  }

  const onInputChekboxChange = (id) => {
    const updatedWishlist = wishlist.map(item => item.id === id ? {...item, isCompleted:!item.isCompleted} : item)
    setWishlist(updatedWishlist)
  }

  
  console.log(wishlist);

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
          {wishlist && wishlist.length > 0 && wishlist.map(item => (
            <div key={item.id}>
              <label>
                <input onChange={()=>onInputChekboxChange(item.id)} type='checkbox' />
                <span className={ item.isCompleted ? 'strike-through' : '' }>{item.wish}</span>
              </label>
              <button onClick={()=>onDeleteClick(item.id)}>Delete</button>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
