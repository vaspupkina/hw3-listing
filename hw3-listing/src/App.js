import './App.css';
import Listing from './components/Listing';
import etsyArticles from './data/etsy.json';

function App() {
  return (
    <Listing items={etsyArticles}/>
  );
}

export default App;
