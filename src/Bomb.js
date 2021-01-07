// your Bomb code here!

import React from 'react';

class Bomb extends React.Component {

  constructor(props) {
    // console.log(props)
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  timeLeft = () => {

    if(this.state.secondsLeft === 0) {
      return (
        'Boom!'
      )
    } else {
      return (
        `${this.state.secondsLeft} seconds left before I go boom!`
      )
    }

  }
  
  render() {
    // console.log(this.props)
    // console.log(this.state.secondsLeft)
    // const renderText = (this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} left before I go boom!`)
    return (
      <div>        
        
        {/* {this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`} */}
        
        {this.timeLeft()}

        {/* {renderText} */}
      </div>
    )
  }


}

export default Bomb