import data from './data';
import React, { Component } from 'react';
import Botones from './Botones';
import Elegidas from './Elegidas';


class Historia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      historial: [],
      paso: 0,
      opcionElegida: '',
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.paso !== this.state.paso) {
      this.state.historial.push(this.state.opcionElegida);
    }
  }

  handleClick = (e) => {
    const id = e.target.id;
    if (this.state.paso >= 7) {
      alert('Fin.');
    } else if (id === 'A' && this.state.opcionElegida !== 'A') {
      this.setState({
        paso: this.state.paso + 1,
        opcionElegida: 'A',
      });
    } else if (id === 'A' && this.state.opcionElegida === 'A') {
      this.setState({
        paso: this.state.paso + 2,
      });
    } else if (id === 'B' && this.state.opcionElegida === 'A') {
      this.setState({
        paso: this.state.paso + 3,
        opcionElegida: 'B',
      });
    } else if (id === 'B') {
      this.setState({
        paso: this.state.paso + 2,
        opcionElegida: 'B',
      });
    }
  };

  render() {
    return (
      <div className="layout">
        <h1 className="historia">{data[this.state.paso].historia}</h1>
        <Botones
          handleClick={this.handleClick}
          opcionA={data[this.state.paso].opciones.a}
          opcionB={data[this.state.paso].opciones.b}
        />
        <Elegidas
          opcionElegida={this.state.opcionElegida}
          historial={this.state.historial.map(
            (e, index) => (
              <li key={index}>{e}</li>
            ),
            data[this.state.paso].id
          )}
        />
      </div>
    );
  }
}

export default Historia;

