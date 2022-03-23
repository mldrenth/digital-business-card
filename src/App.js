import logo from './logo.svg';
import './App.css';
import Info from './components/Info';
import Section from './components/Sections';
import { data } from './data';

function App() {
  return (
    <div className="App">
      <div id="card">
      <Info/>
      {data.map((section) => <Section title={section.title} description={section.description}/> )}
      </div>
    </div>
  );
}

export default App;
