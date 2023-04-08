import './App.css';
import Accordion from './components/Accordion';
import Calculator from './components/Calculator';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Accordion title="Accordion title">content.</Accordion>
      <Calculator />
      <Form />
    </div>
  );
}

export default App;
