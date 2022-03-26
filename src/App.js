import './App.css';
import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';
import QNA from './components/QNA/QNA';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Meals></Meals>
      <QNA></QNA>
      
    </div>
  );
}

export default App;