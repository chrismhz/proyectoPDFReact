import './App.css';
import SearchComponent from './components/SearchComponent';
function App() {
  
  const BarraSuperior = () => {
    return (
      <div
        style={{
          backgroundColor: "#4D82BC",
          color: "white",
          padding: "30px",
          textAlign: "center",
          fontSize: "30px",
          fontWeight: "bold",
        }}>

        <header>
          <img src="/logotipo.png" width="200px" alt="IAOpti-X"></img>
        </header>

      </div>
    );
  };

  return (
    <div style={{ minHeight: "100vh"}}>
      <BarraSuperior/>
        <div className="App">
        <button style={{ backgroundColor: "#4D82BC", color: "white", padding: "10px", borderRadius: "45%", cursor: "pointer", float: "left" ,marginLeft: "200px" }}>
        <img src="/inicio.png" width="30px" alt="IAOpti-X"></img>
          </button>
          <h2 className='text-center' style={{ marginTop: '40px', marginBottom: '40px', marginRight: '270px'}}>LISTA DE PACIENTES</h2>
            <label>
              Escriba dentro del cuadro el nombre del paciente
              <br/>
              <br/>
            </label>
            <SearchComponent/>
              <br/>
              <button style={{ backgroundColor: "#4D82BC", color: "white", padding: "10px", borderRadius: "5px", cursor: "pointer", marginRight: "200px"}}>Agregar Paciente</button>
              {/*<button style={{ backgroundColor: "red", color: "white", padding: "10px", borderRadius: "5px", cursor: "pointer", marginLeft: "200px" }}>Ver Todos PDF's</button>*/}
              <br/>
              <br/>
              <br/>
              <br/>
        </div>
    </div>
  );  
}

export default App;
