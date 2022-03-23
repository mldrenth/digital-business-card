import logo from './logo.svg';
import './App.css';
import Info from './components/Info';
import Section from './components/Sections';
import SocialsFooter from './components/SocialsFooter';
import { data } from './data';

function App() {
  return (
    <div className="App">
      <div id="card">
      <Info/>
      {data.map((section) => <Section title={section.title} description={section.description}/> )}
      <SocialsFooter/>
      </div>
      
    </div>
  );
}

export default App;
