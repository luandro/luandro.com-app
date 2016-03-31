import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import appState from './store';
import { StyleRoot } from 'radium';

ReactDOM.render(
	<StyleRoot>
		<App appState={appState} />
	</StyleRoot>, 
	document.getElementById('root')
);