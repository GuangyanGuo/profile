import React, { Component } from 'react';
import {connect} from 'react-redux';
import {updateCurrent} from '../Store/reducers/projects';


class Projects extends Component {
  
  constructor(props) { 
    super(props); 
    this.closePopup = this.closePopup.bind(this);
    this.ProjectButtonClicked = this.ProjectButtonClicked.bind(this);
    const {changeCurrent} = props
   
    const { projects } = props;
    this.state = {
      currentProject: this.props.currentProject
    };
    this.renderPopup = this.renderPopup.bind(this);
    this.storeContainerRef = this.storeContainerRef.bind(this);
    
    
    
  };
 
  ProjectButtonClicked(e) {
    
    console.log("e.target " + e.target + " id " + e.target.id + " El.id " +  this.containerEl.id + " this.containerEl " + this.containerEl);
    
      console.log(this.containerEl.key + " " + this.containerEl.id);
   
    e.preventDefault();
    const val = Number( e.target.id);
    updateCurrent(val);
    this.setState({"currentProject": val});
  }

  storeContainerRef(el) {
    this.containerEl = el;
  }
  
  closePopup(e) {
    this.setState({"currentProject": -1});

    
  }

  renderPopup(i){
    console.log("renderPopup " + i);
    return (
      <div className= "popup">
        <div className="head-close">
          <h2 dangerouslySetInnerHTML={{__html: this.props.projects[i].title}}></h2>
          <div className={ 'close-popup fa fa-window-close' } onClick={ this.closePopup }>
            
          </div>
        </div>
        
        
        <p dangerouslySetInnerHTML={{__html: this.props.projects[i].message}} ></p>
        
        
      </div>
    )
  
  }
  
  render() {
    
    return (
      
      <div className="projects"> 
        
        <h1>Past Projects</h1>

        <div className="project-buttons show">
        {this.props.projects.map((aProject, index)=> (
            <div key={index} 
             className={`project-button ${this.state.currentProject===index? ' active': ''}`}
             id={index} onClick={this.ProjectButtonClicked}
             ref={this.storeContainerRef}
             >
             <p id={index}>{aProject.thumbnailTitle} </p>
             <img src={aProject.headerImage} id={index} />
            </div>)
         )}
         </div>
         {this.state.currentProject >= 0? this.renderPopup(Number(this.state.currentProject)): null}
      </div>
        
    );
  }
}

export default connect(
  (state) => ({projects: state.projects, currentProject: state.currentProject }),
  {updateCurrent}
)(Projects)

