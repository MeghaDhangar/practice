import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import Navbar from './Pages/Navbar'
import Navbar from './Pages/Navbar';
import { Outlet } from 'react-router-dom';
import store from './Store/store'
import { Provider } from 'react-redux'
import Main from './Pages/Main'
import Footer from './Pages/Footer'
function App() {
  return (
    <div className="App">
      {/* REDUX TOOLKIT  */}
      {/* <Provider store={store}>
        <Navbar />
        <Outlet />
      </Provider> */}
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
