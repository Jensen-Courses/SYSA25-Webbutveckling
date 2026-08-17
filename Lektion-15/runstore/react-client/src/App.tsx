import Navbar from './components/ui/navbar/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <main className='container'>
        <Outlet />
      </main>
    </>
  );
}

export default App;
