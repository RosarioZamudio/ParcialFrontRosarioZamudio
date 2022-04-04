import React, { Component } from "react";

class Botones extends Component{
    render(){
        return(
            <div className="opciones">
            <div className="opcion">
              <button  type="button" className="btn btn-danger" id="A" onClick={this.props.handleClick}>
                A
              </button>
              <h2>{this.props.opcionA}</h2>
            </div>
            <div className="opcion">
              <button type="button" className="btn btn-success" id="B" onClick={this.props.handleClick}>
                B
              </button>
              <h2>{this.props.opcionB}</h2>
            </div>
          </div>
        )
    }
}

export default Botones;