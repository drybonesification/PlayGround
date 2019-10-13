import React, { Component } from 'react'
import socialGithub from './POC-icons'



class DataBasePOC extends Component {
  state = {
    LoggedIn: 0
  }
  handleOnSubmit = event => {
    event.preventDefault()
    this.setState({
      LoggedIn: 1,
      Tab: "default"
    })
  }
  SetAdmin = () =>{
    this.setState({
      Tab: 'Admin'
    })
  }
  SetDefault = () => {
    this.setState({
      Tab: 'default'
    })
  }
  SetDataEntry =()=>{
    this.setState({
      Tab: 'DataEntry'
    })
  }
  SetMisc =()=>{
    this.setState({
      Tab: 'Misc'
    })
  }
  SetOvens=()=>{
    this.setState({
      Tab: 'Ovens'
    })
  }
  render() {
    if (this.state.LoggedIn === 0) {
      return (
        <div class="row">
          <form class="col s12" onSubmit={this.handleOnSubmit}>
            <div class="row">
              <div class="input-field col s4">
                <input placeholder="Placeholder" id="UserName" type="text" class="validate" />
                <label for="UserName">UserName</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s4">
                <input id="password" type="password" class="validate" />
                <label for="password">Password</label>
              </div>
            </div>
            <button class='btn waves-effect waves-light' type='submit' name='action'>submit
                <i class='material-icons right'>send</i>
            </button>
          </form>
          <footer class="page-footer">
          <div class="container">
          </div>
          <div class="footer-copyright">
            <div class="container">
            © pfft no copyright
            <a class="grey-text text-lighten-4 right" href="https://github.com/drybonesification"><socialGithub/></a>
            </div>
          </div>
        </footer>
        </div>
      )
    } else if (this.state.LoggedIn === 1 && this.state.Tab === "default") {
      return (
        <div>
          <nav>
            <div class='nav-wrapper'>
              <a href='#' onClick={this.SetDefault} class="brand-logo center">Logo</a>
              <div class="nav-content">
                <ul class=" left tabs-transparent">
                  <li class="tab"><a href="#Admin" onClick={this.SetAdmin}>Admin</a></li>
                  <li class="tab"><a href="#DataEntry" onClick={this.SetDataEntry}>Data Entry</a></li>
                  <li class="tab"><a href="#Ovens" onClick={this.SetOvens}>Ovens</a></li>
                  <li class="tab"><a href="#Misc" onClick={this.SetMisc}>Misc</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      )
    } else if (this.state.LoggedIn === 1 && this.state.Tab === "Admin") {
      return (
        <div>
          <nav>
            <div class='nav-wrapper'>
              <a href='#' onClick={this.SetDefault} class="brand-logo center">Logo</a>
              <div class="nav-content">
                <ul class="left tabs-transparent">
                  <li class="tab"><a href="#Admin" onClick={this.SetAdmin}>Admin</a></li>
                  <li class="tab"><a href="#DataEntry" onClick={this.SetDataEntry}>Data Entry</a></li>
                  <li class="tab"><a href="#Ovens" onClick={this.SetOvens}>Ovens</a></li>
                  <li class="tab"><a href="#Misc" onClick={this.SetMisc}>Misc</a></li>
                </ul>
              </div>
            </div>
          </nav>
        <p>Admin</p>
        </div>
      )
    } else if (this.state.LoggedIn === 1 && this.state.Tab === "DataEntry") {
      return (
        <div>
          <nav>
            <div class='nav-wrapper'>
              <a href='#' onClick={this.SetDefault} class="brand-logo center">Logo</a>
              <div class="nav-content">
                <ul class="left tabs-transparent">
                  <li class="tab"><a href="#Admin" onClick={this.SetAdmin}>Admin</a></li>
                  <li class="tab"><a href="#DataEntry" onClick={this.SetDataEntry}>Data Entry</a></li>
                  <li class="tab"><a href="#Ovens" onClick={this.SetOvens}>Ovens</a></li>
                  <li class="tab"><a href="#Misc" onClick={this.SetMisc}>Misc</a></li>
                </ul>
              </div>
            </div>
          </nav>
        <p>DataEntry</p>
        </div>
      )
    } else if (this.state.LoggedIn === 1 && this.state.Tab === "Ovens") {
      return (
        <div>
          <nav>
            <div class='nav-wrapper'>
              <a href='#' onClick={this.SetDefault} class="brand-logo center">Logo</a>
              <div class="nav-content">
                <ul class="left tabs-transparent">
                  <li class="tab"><a href="#Admin" onClick={this.SetAdmin}>Admin</a></li>
                  <li class="tab"><a href="#DataEntry" onClick={this.SetDataEntry}>Data Entry</a></li>
                  <li class="tab"><a href="#Ovens" onClick={this.SetOvens}>Ovens</a></li>
                  <li class="tab"><a href="#Misc" onClick={this.SetMisc}>Misc</a></li>
                </ul>
              </div>
            </div>
          </nav>
        <p>Ovens</p>
        </div>
      )
    } else if (this.state.LoggedIn === 1 && this.state.Tab === "Misc") {
      return (
        <div>
          <nav>
            <div class='nav-wrapper'>
              <a href='#' onClick={this.SetDefault} class="brand-logo center">Logo</a>
              <div class="nav-content">
                <ul class="left tabs-transparent">
                  <li class="tab"><a href="#Admin" onClick={this.SetAdmin}>Admin</a></li>
                  <li class="tab"><a href="#DataEntry" onClick={this.SetDataEntry}>Data Entry</a></li>
                  <li class="tab"><a href="#Ovens" onClick={this.SetOvens}>Ovens</a></li>
                  <li class="tab"><a href="#Misc" onClick={this.SetMisc}>Misc</a></li>
                </ul>
              </div>
            </div>
          </nav>
        <p>Misc</p>
        </div>
      )
    }
    else {
      return(
        <div>
          <p>Well how'd ya get here?</p>
        </div>
      )
    }
  }

}
export default DataBasePOC