import './App.css';
import response from "./http-commons";

function App() {
  return (
    <div className="App">
     <div className="area" >
     <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><strong>CrickZone</strong></a>

    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" >About</a>
        </li>
      </ul>
    </div>
  </div>
  </nav>
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    </div>
  );
}

export default App;
