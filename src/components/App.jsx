import React from 'react';
import Hacker from './Hacker.jsx'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      currentName: '',
      currentMessage: '',
      serverResponse: 'server response goes here'
    }

    this.onNameChange = this.onNameChange.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  onNameChange(event){
    this.setState({
      currentName: event.target.value
    })
  }

  onMessageChange(event){
    this.setState({
      currentMessage: event.target.value
    })
  }

  submitHandler(event){
    event.preventDefault();

    let newMessage = {
      name: this.state.currentName,
      message: this.state.currentMessage
    }

    Hacker.create(newMessage, (data) => {
      this.setState({
        serverResponse: data
      })
    })
  }
  
  render() {
    return(
        <div>
          Server Response:
          <div>
            {this.state.serverResponse}
          </div>
          <div>
           Name: <input type='text' onChange={this.onNameChange}></input>
           Message: <input type='text' onChange ={this.onMessageChange}></input>
           <button onClick={this.submitHandler}>Crush the assingnment!</button>
          </div>
        </div> 
    )
  }

}

export default App;