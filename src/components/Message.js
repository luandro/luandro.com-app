import React, { Component } from 'react';
import Radium from 'radium';

const styles = {
	box: {
		clear: 'both',
		width: '100%',
	},
	innerBox: {
		background: '#E0E3DA',
		padding: '20px 15px',
		borderRadius: 15,
		fontSize: '1em',
		margin: '5px 0',
		clear: 'both',
		minWidth: '50%',
		maxWidth: '80%',
		'@media (min-width: 768px)': {
		    minWidth: '45%',
		    maxWidth: '65%',
		    fontSize: '1.5em'
		}
	},
	notUser: {
		color: 'black',
		float: 'left'
	},
	user: {
		float: 'right'
	},
	

}

@Radium
class Message extends Component {
	render() {
		const {body, user} = this.props;
		
		return (
			<div style={styles.box}>
				<div style={Object.assign({}, 
					styles.innerBox,
					user && styles.user,
					!user && styles.notUser
				)}>
					{
						body
						.split(' ')
						.map((word, key) => {
							if (word.toLowerCase() === 'work' 
								|| word.toLowerCase() === 'skills' 
								|| word.toLowerCase() === 'hi' ) {
								return <span style={{color: '#A593E0'}} key={key}>{word} </span>
							} else if(word.toLowerCase().split('')[0] === '*') {
								const finalLink = word.split('');
								finalLink.shift();
								return <a href={`https://${finalLink.join('')}`} style={{color: '#A593E0', textDecoration: 'underline'}} key={key}>{finalLink} </a>
							} else {
								return <span key={key}>{word} </span>
							}
						})
					}
				</div>
			</div>
		)	
	}
	
}

export default Message;