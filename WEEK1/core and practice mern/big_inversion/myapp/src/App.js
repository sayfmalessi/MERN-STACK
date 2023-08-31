import logo from './logo.svg';
import './App.css';
import PersonCard from './Conponent/Personcard';


function App() {
  return (
    <div className="App">
    
    <PersonCard firstName="med " lastName="kammoun" age={ 30 } hairColor="black" /> 
    <PersonCard firstName="sayf" lastName="malessi" age={ 27 } hairColor="Brown" />
    <PersonCard firstName="malek" lastName="daoud" age={ 26 } hairColor="yellow" />
    <PersonCard firstName="abderrahim" lastName="kaabechi" age={ 23 } hairColor="red" /> 
     

    
    </div>
  );
  
}
  
export default App;
