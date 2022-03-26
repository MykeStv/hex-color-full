import './App.css';
import Color from './components/Color'
import HomeIndex from './containers/index'

export * as actionCreators from './actions/index'

function App() {
  
  return (
    <div>
      <HomeIndex />
    </div>
  );
}

export default App;
