import { InlineMath, BlockMath } from 'react-katex';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <BlockMath>
          {`\\sum_{k=1}^n\\frac{1}{k^2}=\\frac{\\pi^2}{6}`}
        </BlockMath>
      </header>
    </div>
  );
}

export default App;
