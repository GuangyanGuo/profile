import  React, {Component } from 'react';
import { connect } from 'react-redux'
import './App.less';
import Projects from './Projects';


class App extends Component {
 
  render() {
    console.log("this.props", this.props);
    

    return (
    
        <div className="App">
              <Projects />
        </div>
       
    );
  }
}


/*const mapStateToProps = (state) => state
const mapDispatchToProps = (dispatch) => bindActionCreators({updateCurrent}, dispatch)*/
/*const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
  onClick: (event) => (_, getState) => {
    event.preventDefault() // <-- control the event
    const state = getState() // <-- access the state
    const { currentProject } = ownProps // <-- access props
    let newCurrent = Number(event.target.id);
    if (currentProject !==newCurrent) { // <-- conditionally dispatch
      dispatch({type: 'CURRENT_UPDATE', payload: newCurrent})
    }
  },
  onClose: kill 
}, dispatch)*/
/*const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
export default ConnectedApp*/
export default App
