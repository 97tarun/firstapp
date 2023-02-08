import './App.css';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import MyComp from './component/MyComp';



function App() {
  const obj = {name:"Ritesh",age:20, salary:67777};
  return (  
   
  <>
  <Navbar title="My Project" about="About Us" searchBar={false}/>
  <MyComp country="us" data={obj}/>

</>
  );
}

export default App;
