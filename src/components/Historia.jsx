import data from './data';
import React, { Component } from 'react';
import Botones from './Botones';
import Elegidas from './Elegidas';


class Historia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paso: 0,
      historia: data,
      opcionElegida: "",
      historial: []

    };
  }

manejaEleccion = (e) => {
const esUltimoPaso = this.state.paso === 4;
  this.setState({
    paso: esUltimoPaso? 0 : this.state.paso + 1,
    opcionElegida: esUltimoPaso? "" : e, 
    historial: esUltimoPaso? [] : this.state.historial.concat(e)
  })
}

//poner sweetalert
componentDidMount() {
  alert("Comienza la historia");
}

  render() {

    return (
      <div className="layout">
     
        <p className='historia'>{this.state.historia.filter(e => e.id === ((this.state.paso + 1).toString().concat(this.state.opcionElegida) )).pop().historia}</p>
        <div>
          <Botones/>
          <ol>
            <li><button onClick={() => this.manejaEleccion("a")}>A</button><p>{this.state.historia[this.state.paso].opciones.a}</p></li>
            <li><button onClick={() => this.manejaEleccion("b")}>B</button><p>{this.state.historia[this.state.paso].opciones.b}</p></li>
            
          </ol>
        </div>
        <div>
          <Elegidas/>
          <ol>
            {this.state.historial.map(e => <li key={e}>{e}</li>)}
          </ol>
        </div>
      </div>
    );
  }
}

export default Historia;

