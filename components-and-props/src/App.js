import logo from './logo.svg';
import './App.css';
import Profile from './Profile';


function App() {
  const user = {
    name: 'Jim',
    email: 'jim@gmail.com',
    picture: 'https://bit.ly/2zVs57p'
  }
  return (
    <div className="App">
      <Profile data={user} />
    </div>
  );
}

export default App;
