import './App.css';
import './componentCss/Table.css';
import './ClaimAllowanceButton.css';
import ClaimAllowance from './components/Buttons';
import Table from './components/Table';
function App() {
  return (
    <div className="App">
     <ClaimAllowance />
     <Table />
    </div>
  );
}

export default App;
