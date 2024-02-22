import logo from './logo.svg';
import { initGA, logPageView } from './analytics';
import './App.css';

function App() {
  useEffect(() => {
    initGA();
    logPageView();
  }, []);

  useEffect(() => {
    logPageView();
  });
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
