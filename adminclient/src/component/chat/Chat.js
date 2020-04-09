import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { sendMessageAction } from './ChatAction';
import './chat.css';

function Chat(props) {

    const [showChatBoxClass, setShowChatBoxClass] = useState(props.isChatBoxVisible ? 'show-chatBox' : 'hide-chatBox')
    const [message, setMessage] = useState('');
    const [messageList, setMessageList] = useState([]);

    useEffect(() => {
        setShowChatBoxClass(props.isChatBoxVisible ? 'show-chatBox' : 'hide-chatBox');
    }, [props.isChatBoxVisible])

    useEffect(() => {
        console.log("-----------", props.messageList.length)
        setMessageList(props.messageList);
    }, [props.messageList.length])


    return (<div className={`modal fade chat-design-trade ${showChatBoxClass}`} id="myModal"
        onClick={props.showChatBox}
        tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" data-backdrop="static" data-keyboard="false">
        <div className="modal-dialog" role="document" style={{ transform: 'translate(0, 0%)' }}>
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    <h4 className="modal-title" id="myModalLabel"><i className="fa fa-comments" /> Mo Danish</h4>
                </div>
                <div className="modal-body">
                    <div className="messegebox">
                        <div className="received-messege">
                            <p>Hello Rashid</p>
                        </div>
                        <div className="send-messege">
                            <p>Hi, welcome to Salam Trade! Go ahead and send me a message.</p>
                        </div>
                        <div className="received-messege">
                            <p>Hi, welcome to Salam Trade! Go ahead and send me a message.</p>
                        </div>
                        <div className="send-messege">
                            <p>Hello Rashid </p>
                        </div>
                        {
                            messageList.map(item => {
                                return <div className="send-messege">
                                    <p>{item.message}</p>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className="modal-footer">
                    <div className="form-inline">
                        <div className="form-group">
                            <input type="text" className="form-control" value={message} placeholder="Enter your message..." onChange={(ev) => setMessage(ev.target.value)} />
                        </div>
                        <button className="btn btn-default" onClick={() => props.sendMessage(message)}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

const mapStateToProps = (state, ownProps) => {
    return {
        messageList: state.chatUi.messageList
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch,
        sendMessage: (message) => dispatch(sendMessageAction(message))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);