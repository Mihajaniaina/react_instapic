import logo from './logo.svg';
import './App.css';
import sary1 from './img/rox.jpg';
import sary2 from './img/joh.jpg';
import sary3 from './img/sayd.jpg';
import sary4 from './img/rak.jpg';
function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
    <a class="navbar-brand" href="#"><h3>INSTAPIC</h3></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
   
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" href="#"><h4>ANDRIANAIVO Mihajaniaina ESIIA5</h4>
            <span class="visually-hidden">(current)</span>
          </a>
        </li>
        </ul>
        
    </div>
    
      </nav>
      <br/><br/>
      <div class="coutener">
        <div class="row">
          <div class="col-3">

          </div>
          <div class="col-6">
          <div class="card border-primary mb-3" >
      <div class="card-header"></div>
      <div class="card-body">
        <h5>Roxanne_12</h5>
      <img src={sary1}/>
      <div class="form-group">
      <label for="exampleTextarea" class="form-label mt-4"><h5>commentaire</h5></label>
      <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
    </div>
      <br/><br/>
      <h5>Johanne_24</h5>
    <img src={sary2}/>
    <div class="form-group">
      <label for="exampleTextarea" class="form-label mt-4"><h5>commentaire</h5></label>
      <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
    </div>
    <br/><br/>
    <h5>Misié Sayda</h5>
    <img src={sary3}/>
    <div class="form-group">
      <label for="exampleTextarea" class="form-label mt-4"><h5>commentaire</h5></label>
      <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
    </div>
    <br/><br/>
    <h5>Rak_Roots</h5>
    <img src={sary4}/>
    <div class="form-group">
      <label for="exampleTextarea" class="form-label mt-4"><h5>commentaire</h5></label>
      <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
    </div>
  </div>
      </div>
            </div>
          <div class="col-3">
          <div class="card text-white bg-primary mb-3" > 
          <div class="card-header"></div>
          <div class="card-body"></div>
          </div> 
          </div>
        </div>
      </div>
   
    </div>
  );
}

export default App;
