import { useState } from 'react'

const database = [
    { username: "jeff", text: "This should be the first message" },
    { username: "Clarise", text: "Message number two lol" },
    { username: "xDemonx", text: "3rd message" }
]

const Chat = () => {
    const [messages, setMessages] = useState(database)
    const [newMessage, setNewMessage] = useState('TEXT')
    const [username, setUsername] = useState('ADMIN')



    function handleSubmit(e) {
        e.preventDefault()
        const msg = { username: username, text: newMessage }
        setMessages([...messages, msg])
        console.log(messages)
        setNewMessage('')
    }


    const mapped = messages.map(msg => <p>{msg.username}: {msg.text}</p>)

    return (
        <div className='chat'>
            <p>Chat</p>
            <div className='messages'>
                {mapped}
            </div>
            <form onSubmit={handleSubmit} className='msg-inputs'>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text"
                        name='username'
                        onChange={event => setUsername(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <input type="text"
                        name='message'
                        onChange={event => setNewMessage(event.target.value)} />
                </div>
                <input type="submit" value={"Submit"} />

            </form>
        </div>
    )
}

export default Chat