import React from 'react';

type Props = {
    message: Object,
    type: string
}

const Message = ({ message, type }: Props) => (
    <div>{message.value}, {message.time}</div>
);

export default Message;
