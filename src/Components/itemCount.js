import React from 'react';

export default class ItemCount extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        contador: 0
      };
    }
  
    Sumar() {
        this.setState({contador: this.state.contador + 1});
    }
    Restar() {
        this.setState({contador: this.state.contador - 1});
    }
  
    render() {
        return(
            <div className='contenedor'>
            <div className= 'contador'>
            <button onClick={() => this.Restar()}> - </button>
            <p>{this.state.contador}</p>
            <button onClick={() => this.Sumar()}> + </button>
            </div>
            <button onClick={() => this.Sumar()}>Agregar al carrito</button>
    
            </div>
        );
    }
}