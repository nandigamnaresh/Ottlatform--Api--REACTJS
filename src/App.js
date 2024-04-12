// import Nav from './Navabar';
import './App.css';
import App2 from './App2';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>




      <BrowserRouter>
       {/* <Nav /> */}
        <Routes>



          <Route path='/'           element={<App2   gen="Action" />      }> </Route>
          <Route path='/come'       element={<App2   gen="Comedy"/>       }> </Route>
          <Route path='/horr'       element={<App2   gen="Horror"/>       }> </Route>
          <Route path='/dram'       element={<App2   gen="Drama"/>        }> </Route>
          <Route path='/thri'       element={<App2   gen="Thriller"/>     }> </Route>
          <Route path='/anim'       element={<App2   gen="Animation"/>    }> </Route>
          <Route path='/roma'       element={<App2   gen="Romance"/>      }> </Route>
          <Route path='/adve'       element={<App2   gen="Adventure"/>    }> </Route>

      

      
        </Routes>

      </BrowserRouter>






    
    </div>
  );
}

export default App;
