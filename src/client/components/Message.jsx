import React from 'react';

type Props = {
    message: Object,
    type: string
}

const Message = ({ message, type }: Props) => (
    <li>
        {type}: {message.value}, {message.time}
    </li>
);

export default Message;
