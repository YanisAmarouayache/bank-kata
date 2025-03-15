import React from "react";
import { useState, useEffect } from "react";

const TestComponent = () => {
    const [message, setMessage] = useState('')
    useEffect(() => { }, [message]);

    return (
        <div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here"
            />
            <p>{message}</p>
        </div>
    )
}

export default TestComponent;