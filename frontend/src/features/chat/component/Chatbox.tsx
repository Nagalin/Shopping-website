import React from 'react';
import { ListGroup } from 'react-bootstrap';
import useChat from '../hook/useChat';

interface ChatMessage {
  name: string;
  message: string;
}

export default function ChatBox() {
  const chat= useChat() as ChatMessage[]

  return (
    <div style={{ maxHeight: '300px', overflowY: 'scroll', }}>

      <ListGroup>
        {chat.map((val,index)=>{
          return (
            
              <ListGroup.Item key={index} >
                <div>
                  <div style={{ fontSize: '1.4rem' }}>{val.name}</div>
                  <span style={
                    {
                      display: 'block',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                      maxWidth: '100px'
                    }}>
                    {val.message}
                  </span>
                </div>
              </ListGroup.Item>
          )
        })}
      </ListGroup>
    </div>
  )
  
}
