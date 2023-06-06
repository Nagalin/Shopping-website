import React, { useEffect, useState } from 'react'
import chatData from '../../../data/chat.json'

export default function useChat() {
  const [chat,setChat] = useState<object[]>([])

  useEffect(()=>{
    setChat(chatData)
  },[])

  return chat
}
