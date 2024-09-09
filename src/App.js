import {Routes,Route} from "react-router-dom"
// import './App.css';
import Home from './component/Home';
import Room from "./component/Room";

function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/room/:roomId' element={<Room/>} />
      </Routes>
    </>
  );
}

export default App;
