import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import io from "socket.io-client";
import { addMessageToListAction } from './ChatAction'
const URL = process.env.REACT_APP_SERVER_URL;
const socket = io(URL);

function Socket(props) {


    socket.once('RECEIVE_MESSAGE', function (data) {
        props.addMessage(data);
    });

    useEffect(() => {
        if (props.message.length > 0) {
            socket.emit('SEND_MESSAGE', {
                author: 'Ravi',
                message: props.message
            });
        }
        return () => {

        }
    }, [props.message])


    return <></>
}

const mapStateToProps = (state, ownProps) => {
    return {
        message: state.chatUi.message
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch,
        addMessage: (message) => dispatch(addMessageToListAction(message))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Socket);