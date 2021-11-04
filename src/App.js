import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';

function App() {
  const saludo = 'Hola Uriel!';

  return (
    <>
    <NavBar/>
    <ItemListContainer greeting = {saludo}/>

    </>
  );
}

export default App;
