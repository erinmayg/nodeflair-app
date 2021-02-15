import './App.css';
import Navbar from './components/Navbar';
import JobListingsView from './components/JobListingsView';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <JobListingsView />
    </div>
  );
}

export default App;
