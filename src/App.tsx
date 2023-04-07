import './App.css';
import Accordion from './components/Accordion';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <Accordion title="Accordion title">content.</Accordion>
      <Calculator/>
    </div>
  );
}

export default App;
