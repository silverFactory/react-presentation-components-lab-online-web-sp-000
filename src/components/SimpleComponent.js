import React from 'react'

export default class SimpleComponent extends React.Component {

    state = {
      mood: 'happy'
    }

    handleClick = () => {
      this.setState(function(prevState){
        return prevState.mood === 'happy' ? {mood: 'sad'} : {mood: 'happy'}
      })
    }

    render(){
      return <div onClick={this.handleClick}>{this.state.mood}</div>
    }
}
