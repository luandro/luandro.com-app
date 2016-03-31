import {observable, computed} from 'mobx';
let i = -1;

const appState =  new class AppState {
    @observable windowYPosition = window.scrollY;
    @observable timer = 0;
    @observable messageList = [];
    @observable typing = true;
    @observable userInput = '';
    @observable waitingForName = false;
    @observable userInfo = {
    	name: null,
    	contact: null
    }
    // waitingForName.observe((new, old) => console.log(old, " -> ", new))
    @computed get respondToUserHi() {
        // Once we have the users name, start Skype and respond with greeting
        if(this.userInfo.name !== null) {
            window.setTimeout(() => {
                appState.sendInput(`Nice to meet you ${appState.userInfo.name}`, false);
                // messageList.push({body: `Nice to meet you ${userInfo.name}`, user: false});  
            }, 1000);   
        }
    }
    
    constructor() {
    	const initialMessages = [
	    	{
	    		body: "Hi there, I'm Luandro 😌",
	    		user: false
	    	},
	    	{
	    		body: "I create digital stuff",
	    		user: false
	    	},
	    	// {
	    	// 	body: "Wanna check what I do? Just type work or skills",
	    	// 	user: false
	    	// },
            {
                body: "Check my client projects at *github.com/luandro-com",
                user: false
            },
             {
                body: "Or my personal projects at *github.com/luandro",
                user: false
            },
            {
                body: "I'm available for hire and relocation to anywhere in the globe 🌍",
                user: false
            },
	    	// {
	    	// 	body: "I'm online right now",
	    	// 	user: false
	    	// },
	    	// {
	    	// 	body: 'So if you want to get in touch just say Hi',
	    	// 	user: false
	    	// }
            {
                body: "Cheers!",
                user: false
            }   
	    ];
        setInterval(() => {
            appState.timer += 1;
        }, 1000);

        //####BUG Not working
        if(this.timer > 40) {
        	appState.messageList.push({body: "C'mon interect with me baby....", user: false});
        }

    	setInterval(() => {
    		if(i+1 < initialMessages.length) {
    			i++;
	        	this.sendInput(initialMessages[i].body, initialMessages[i].user);
    		}
    		else {
    			appState.typing = false;
    			return
    		}
	    }, 1500);


        
        
    }

    sendInput(userInput, user = true) {
         // push message to list
        appState.messageList.push({body: userInput, user});

        // Check if position of last element in the list of messages is greater than innerHeight 
        // If true and euqal to pageYOffset, smooth-scroll to bottom of the list
        function getlastMessagePositionFromTop () {
            return document.getElementsByClassName('messages')[0].lastChild.getBoundingClientRect().top;
        }
        let lastMessagePositionFromTop = document.getElementsByClassName('messages')[0].lastChild.getBoundingClientRect().top;
        if (getlastMessagePositionFromTop() > (self.innerHeight-200) ) {
            // window.scrollTo(0, getlastMessagePositionFromTop() + 10);
            window.scrollBy(0, window.innerHeight*2);
        }
        
    }
    
	clearInput() {
    	appState.userInput = ''
    }

    waitForName() {
        appState.waitingForName = !appState.waitingForName;
        console.log("waiting...:", appState.waitingForName)
    }

    

    setUserName(userInput) {
        appState.userInfo = {name: userInput};        
    }

    resetTimer() {
        this.timer = 0;
    }

}();

export default appState;