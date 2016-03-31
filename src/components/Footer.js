import React, { Component } from 'react';
import Radium from 'radium';

const styles = {
	container: {
		clear: 'both',
		width: '100%',
		position: 'fixed',
		bottom: 0,
		marginTop: 40,
		background: '#FFFFF3'
	},
	typing: {
		position: 'absolute',
		bottom: 100,
		right: '50%',
		left: '50%'
	},
	form: {
		clear: 'both',
		borderTop: '1px solid #E0E3DA',
		borderBottom: '1px solid #E0E3DA',
	},
	inputBox: {
		width: '100%',
		display: 'flex',
		flexFlow: 'row nowrap',
		justifyContent: 'space-around'
	},
	input: {
		background: 'none',
		width: '74%',
		border: 'none',
		fontSize: '1em',
		height: 30,
		paddingLeft: 50,
		marginRight: -50,
		'@media (min-width: 768px)': {
			height: 50,
			fontSize: '1.5em',
			width: '90%',
		},
		':focus': {
			border: 'none'
		}

	},
	sendButton: {
		// float: 'right',
		width: '25%',
		border: 'none',
		background: '#A593E0',
		padding: '10px 0',
		color: 'white',
		height: 30,
		'@media (min-width: 768px)': {
			height: 50,
			fontSize: '1.5em',
			width: '10%',
		}

	},
	subFooter: {
		clear: 'both',
		height: 50,
		width: '95%',
		margin: '0 auto',
		display: 'flex',
		alignItems: 'center',

	},
	social: {
		display: 'flex',
		justifyContent: 'space-around'
	}
}

class Footer extends Component {
	render() {
		const { handleChange, handleSendForm, userInput, typing } = this.props;
		return (
			<div style={styles.container}>
				{typing ? <div style={styles.typing}><img src='/dist/imgs/loader.svg' /></div> : <div style={styles.typing}></div>}
				{/*<form style={styles.form}>
					<div style={styles.inputBox}>
		        		<input style={styles.input} onChange={handleChange.bind(this)} value={userInput}></input>
		        		<button style={styles.sendButton} onClick={handleSendForm.bind(this)}>Send</button>
	        		</div>
	        	</form>
	        	<div style={styles.subFooter}>
	        		<img src='/dist/imgs/more.svg' />
	        		<div style={styles.social}>
	        		</div>
	        	</div>*/}
        	</div>
		)
	}
}

export default Radium(Footer);