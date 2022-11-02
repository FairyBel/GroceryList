import './App.css';
import image from './shoppingbag.jpg';
import imageTwo from './man.jpg';
import { GrosseryList } from './GrosseryList';

function App() {
  return (
    <div className='app'>
      <div className="container">
      <img src={image} alt='Shopping' width='200px'/>
      </div>
      <div className='container'>
      <h1>Grossery list</h1>
      </div>
      <GrosseryList />
      <div className="container">
      <img src={imageTwo} alt='Man' width='250px'/>
      </div>
    </div>
  )
}

export default App;
