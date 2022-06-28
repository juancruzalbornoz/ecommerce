import ItemCount from "./components/ItemCount";
import ItemListConteiner from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {

  const onAdd = () => {
    console.log("PRODUCTOS AGREGADOS");
}

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Hola Mundo!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        <NavBar />
        <ItemListConteiner grettings="Bienvenida" />
        <ItemCount stock={6} initial={1} onAdd={onAdd}/>
      </header>
    </div>
  );
}

export default App;
