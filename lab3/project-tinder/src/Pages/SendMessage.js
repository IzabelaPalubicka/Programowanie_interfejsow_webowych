import { useState } from "react";

let wasSend = false;

const SendMessage = (props) => {
    const { student } = props;
    const [message, setMessage] = useState("");
    const handleMessage = (event) => {
        setMessage(event.target.value);
    }

    const handleSendMessage = (event) => {
        if(wasSend === 'false')
            wasSend = true;
    }

    return (
        <div className="App">
            <h5>Send message to: {student.name}</h5>
            <input type="text" placeholder="Type message.." value={message} onChange={handleMessage} />
            <input className="btn" type="button" value="Send"onClick={handleSendMessage} />
            {<h5 id="send-tost" disabled={wasSend} >Message was send.</h5>}
        </div>
    );
}

export default SendMessage;