import React, { Component } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/database'
import config from './config';

class Chat extends Component {
    constructor(props){
        super(props);
        this.state={
            database:null,
            myId:'',
            receiverId:'',
            messages:[]
        }
    }
    componentDidMount=async()=>{
        firebase.initializeApp(config);
        this.setState({
            database:firebase.database()
        })
    }
    shouldComponentUpdate(nextProps,nextState){
        if(this.state.database !== nextState.database)
            return false;
        return true;
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }

}

export default Chat;
