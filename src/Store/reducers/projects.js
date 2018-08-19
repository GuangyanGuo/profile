import { UPDATE_PROJECTS } from '../actions/updateProjects';


const initState = {
  projects: [
      {
      "id":1,
      "thumbnailTitle": 'React',
      "title":"React Projects",
      "message":"While working at Bwin.party (part of the GVC Group), I used ReactJs to create components that are used in our websites. <br /><br />We use Redux for our data store, we use Babel to compile the ReactJs code, we use Webpack to package everything up. And we use Gulp to deploy the packaged code to our server. Our websites all have lots of data including user information and game information, they are all responsive. <br /><br />Have a look at the <a href='https://www.foxybingo.com' target='_blank'>Foxybingo</a> website.",
      "headerImage":"react.ico"
    },{
      "id":2,
      "thumbnailTitle": 'Angular',
      "title":"Angular Projects",
      "message":"I started to use Angular recently when our website contents need to be migrated to other server that use Angular. I finished a small Angular project in 3 day. It has a button to allow the user to browse to a spreadsheet file, it then import some user data into the app, the user can then select how many winners they want, by clicking a button, the app produce the required number of winners. The user can click another button to export the winner list to a spreadsheet file. <br /><br />I made the app available both online and as a desktop executable by using Angular Electron.",
       "headerImage":"angular.ico"
    },{
      "id":3,
      "thumbnailTitle": 'Games',
      "title":"HTML5 Games",
      "message":"I made some small online games for promotion using Quintus HTML5 Game Engine.<br /><br />I made the animation using Adobe Animate. <br /><br />You can have a look of the game without backend support here: <br /><br /><ul><li><a href='./external/wheelOfXmas/index.html' target='_blank'>Wheel of Fortune</a></li><li><a href='./external/squid/index.html' target='_blank'>Million Squids</a></li></ul>",
        "headerImage":"gamepad.png"
      }],
  currentProject: -1,
}

const CURRENT_UPDATE = 'CURRENT_UPDATE'
export const updateCurrent = (val) => ({type:CURRENT_UPDATE, payload: val})

export default (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE_PROJECTS':
      return {...state, projects: state.projects.concat(action.payload)}
     case 'CURRENT_UPDATE':
      return {...state, currentProject: action.payload}
    default:
      return state

  }
}