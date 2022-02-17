import { useState } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleClick = (e) => {
    e.preventDefault();


  }

  console.log(name, email);
  return (
    <div >
      <nav className='navigation'> username is ...</nav>
      <div className="user-form">
        
        <form >
          <label >username :</label>
          <input type="text" placeholder='username' onChange={ (e) => setName(e.target.value) } />
          <br />

          <label >email :</label>
          <input type="text" placeholder='email@gmail.com' onChange={ (e) => setEmail(e.target.value) } />
          <br />

          <button onClick={handleClick}>submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
