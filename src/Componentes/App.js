import logo from '../Imagenes/logo.svg';
import '../Styles/App.css';
import Consejos from "./Consejos";
import NuevoConsejo from "./NuevoConsejo";
import BuscarConsejos from "./BuscarConsejos";
import Search from "./Search";
function App() {
  return (
    <div>
    
        <Consejos/>
        <NuevoConsejo/>
      <Search/>

    </div>
  );
}

export default App;
