import React from "react";
import "@testing-library/jest-dom";
import { render,screen } from "@testing-library/react";
import Chatbox from '../Chatbox'
import user from '../../data/chat.json'

it('Should see a list of message',()=>{
    render(<Chatbox/>)

    //expect to see a chat list on the screen
    user.map(val=>{
        expect(screen.getByText(val.name)).toBeInTheDocument();
        expect(screen.getByText(val.message)).toBeInTheDocument();
    })
})