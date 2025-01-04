import './App.css';

import Counter from './components/Counter';
function App() {
  return (
    <div className="App">
      <div style={{ padding: '20px' , marginTop: '90px' }}>
      <h1 style={{ color: 'white', textAlign: 'center' }}>React Counter</h1>
      <Counter />
      </div>
    </div>
  );
}

export default App;
