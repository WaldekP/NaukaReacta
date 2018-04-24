import React from 'react'

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count:0,
                  multiplication:0,}
    this.Plus = this.Plus.bind(this)
    this.Minus = this.Minus.bind(this)
    this.Multiply = this.Multiply.bind(this)

}
  Plus() {
    this.setState((prevState) => ({
        count: prevState.count + 1
      }));
  }

  Minus() {


    if (this.state.count>0) {
    this.setState((prevState) => ({
      count: prevState.count - 1
    }));
  }

  else {
    this.setState((prevState) => ({
      count: prevState.count - 2
    }));
  }
}

Multiply() {
  this.setState(() => ({
    multiplication: this.state.count + this.state.count
  }))
}

  render() {
    var myArray = [1,2,3,4]
    myArray.map(function(val) {
        return val + 1
      })
    return(
      <div>
        <h1>Liczba kliknięć {this.state.count}</h1>
        <button onClick={this.Plus}>Dodaj 1</button>
        <button onClick={this.Minus}>Odejmij -1</button>
        <p>Pomnóż liczbę kliknięć przez this.state.count</p>
        <button onClick={this.Multiply}>Pokaż wynik</button>
        <h1>Wynik potęgowania to {this.state.multiplication} </h1>
        <p>{myArray.join("*")}</p>
        <p>Sprawdzenie gita dfvdfdv fdvv</p>

      </div>
    )
  }
}
