// import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import AwesomeProject from './App';
import { AppRegistry } from 'react-native'
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, 
//   document.getElementById('root')
// );

AppRegistry.registerComponent('AwesomeProject',() => AwesomeProject)
AppRegistry.runApplication('AwesomeProject',{ rootTag: document.getElementById('root') })

registerServiceWorker();
