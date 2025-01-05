import './App.css';
import Counter from './components/Counter';
import Timer from './components/Timer';
function App() {
  return (
    <div className="App">
      <div style={{ padding: '20px' , marginTop: '90px' }}>
      <h1 style={{ color: 'white', textAlign: 'center' }}>React Counter</h1>
      <Counter />
<br/>
      <header className="App-header">
                <h1>
                    Timer App
                </h1>
     <Timer />
     </header>
      </div>
    </div>
  );
}

export default App;
