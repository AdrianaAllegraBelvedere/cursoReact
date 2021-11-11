import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemCount from './Components/itemCount';

function App() {
  const saludo = 'Hola Uriel!';

  return (
    <>
    <NavBar/>
    <ItemListContainer greeting = {saludo}/>
    <ItemCount />
    </>
  );
}

export default App;
