import ItemListConteiner from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {



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
        <ItemListConteiner grettings="Landing" />
        <ItemDetailContainer id={2}/>
      </header>
    </div>
  );
}

export default App;
