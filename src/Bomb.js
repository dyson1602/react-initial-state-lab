import React from 'react'

class Bomb extends React.Component {

  constructor(props) {
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }
  message = () => {
    if(this.state.secondsLeft > 0){
      return `${this.state.secondsLeft} seconds left before I go boom!`
    } else {
      return "Boom!"
    } 
  }

  render(){
    // const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
    return(
      <div>{ this.message() }</div>
    )
  }
}

export default Bomb