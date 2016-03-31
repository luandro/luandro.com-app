import React, {Component} from 'react';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import Message from './Message';
import Footer from './Footer';

const styles = {
	container: {
	},
	messageContainer: {
		margin: '10px 30px',
		paddingBottom: 150
	}
}


@observer
class App extends Component {

    render() {
    	const { messageList, typing, userInput, userName } = this.props.appState;
        return (
            <div style={styles.container}>
            	<div style={styles.messageContainer} className='messages'>
            		{messageList.map((msg, key) => <Message key={key} {...msg} /> )}
            	</div>
            	<Footer typing={typing} handleChange={this.handleChange} handleSendForm={this.handleSendForm} userInput={userInput} />
                {/* <DevTools /> */}
            </div>
        );
    }

    handleSendForm = (e) => {
     	const { userInput, sendInput, clearInput, waitingForName, waitForName, setUserName, userInfo } = this.props.appState;
     	e.preventDefault();

     	if (userInput.length > 0) {
 			// Find if user said Hi
 			const findHi = userInput.split(' ')
     		.map((word) => word.toLowerCase())
     		.filter((w) => w === 'hi');
     		
     		// Push user message
            sendInput(userInput);

            // Responde to Hi
		    if(findHi.length > 0) {
                window.setTimeout(() => {
                    sendInput('Hi there. Can you please tell me your name.', false);
                }, 1000);
		    	waitForName();
     		}
            // Get user name, respond and initiate Skype conversation
            // ####BUG 
     		else if(waitingForName) {
     			new Promise ((resolve, reject) => {
                    resolve(setUserName(userInput));
                })
                .then(
                    () => {
                        console.log("userInfo.name:", userInfo.name)
                        if(userInfo.name !== null) {
                            window.setTimeout(() => {
                                // ####BUG userInfo.name resolving to null
                                resolve(sendInput(`Nice to meet you ${userInfo.name}`, false));
                            }, 1000)    
                        } else {
                            sendInput(`Nice to meet you ${userInfo.name}`, false);
                        }
                    }
                    
                )
                .then(waitForName())
                .catch((err) => console.log(err))
     		}
     	}
     	clearInput();
    }

    handleChange = (e) => {
     	this.props.appState.userInput = e.target.value;
    }
}

export default App;
