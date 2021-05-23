import React, {useEffect, useState} from 'react';
import { Widget, addResponseMessage  } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import {conn} from "../Play";
import {getUser} from "../Utils/Common";

const io = require("socket.io-client");
const http = require("http");


function Chat(props){

    console.log("estoy en chat");
    console.log(conn);

    /*let connTest1 = io(ENDPOINT,{
        extraHeaders:{
            jwt: getToken(),
            operacion: "crearSala",
            priv: "true"
        }
    });*/

    conn.on('nuevoJugador',(user)=> {
        const usuario = user.jugador;
        addResponseMessage("El jugador " + usuario + " ha entrado a la sala.");
    })

    conn.on('reconexionJugador',(user)=> {
        const nombre = user.jugador;
        addResponseMessage("El jugador " + nombre + " se ha reconectado.");
    })

    conn.on('abandonoSala',(user)=>{
        addResponseMessage("El jugador " + user + " ha abandonado la sala.");
    })

    conn.on('jugadorSale',(user)=>{
        addResponseMessage("El jugador " + user + " ha abandonado la partida");
    })

    conn.on('chat', ({usuario, msg})=>{
        let msgFull = 'Mensaje de ' + usuario + ': ' + msg;
        addResponseMessage(msgFull);
    })


    const handleNewUserMessage = (newMessage) => {
        console.log(`New message incomig! ${newMessage}`);
        // Now send the message throught the backend API
        conn.emit("mensaje", `${newMessage}`);
        //end backend
        //addResponseMessage("que tal");
    }



    return (
        <div className="Chat">
            <Widget
                handleNewUserMessage={handleNewUserMessage}
                title="CHAT"
                subtitle="Chat de la sala actual"
            />

        </div>
    );

}

export default Chat;