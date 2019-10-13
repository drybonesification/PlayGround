import React, {Component} from 'react'



class DataBasePOC extends Component {
  state={
    LoggedIn: 0
  }
  handleOnSubmit= event=>{
    event.preventDefault()
    this.setState({
      LoggedIn: 1,
      Tab: "default"
    })
  }
  handleOnTabChange = event =>{
    event.preventDefault()
    
  }
  TestTab =()=>
  {
    this.setState({
      Tab: "Test"
    })
  }
    render(){
      if (this.state.LoggedIn === 0){
        return(
            <div class="row">
            <form class="col s12" onSubmit={this.handleOnSubmit}>
              <div class="row">
                <div class="input-field col s4">
                  <input placeholder="Placeholder" id="UserName" type="text" class="validate"/>
                  <label for="UserName">UserName</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s4">
                  <input id="password" type="password" class="validate"/>
                  <label for="password">Password</label>
                </div>
              </div>
              <button class='btn waves-effect waves-dark' type='submit' name='action'>submit
                <i class='material-icons right'>send</i>
              </button>
            </form>
          </div>
        )
    }  else if (this.state.LoggedIn === 1 && this.state.Tab === "default"){
      return(
        <div>
          <button onClick={this.TestTab}>Click me</button>
        </div>
      )
    } else if (this.state.LoggedIn === 1 && this.state.Tab === "Test"){
      return(
        <div>
          <p>Test</p>
        </div>
      )
    }
  }

}
export default DataBasePOC