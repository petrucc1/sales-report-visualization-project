import './App.css';
import SalesChart from './components/SalesChart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sales Report Visualization</h1>
      </header>

      <main>
        <SalesChart />
      </main>
    </div>
  );
}

export default App;
