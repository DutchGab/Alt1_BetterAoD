// alt1 base libs, provides all the commonly used methods for image matching and capture
// also gives your editor info about the window.alt1 api
import * as a1lib from "alt1";
import ChatBoxReader from "alt1/chatbox";
import * as helpers from "./helpers";
import React, {useEffect, useRef, useState} from "react"
import {createRoot} from "react-dom/client"


// tell webpack that this file relies index.html, appconfig.json and icon.png, this makes webpack
// add these files to the output directory
// this works because in /webpack.config.js we told webpack to treat all html, json and imageimports
// as assets
import "./index.html";
import "./appconfig.json";
import "./icon.png";

var output = document.getElementById("output")

const createNewReader = () => {
    const reader = new ChatBoxReader()

    reader.readargs = {
        colors: [
            a1lib.mixColor(255, 160, 0), // Orange practice mode
            a1lib.mixColor(45, 186, 21), // Completion time green
            a1lib.mixColor(45, 184, 20), // Completion time green
            a1lib.mixColor(159, 255, 159), // Clan chat green
            a1lib.mixColor(255, 82, 86), // PM red
            a1lib.mixColor(225, 35, 35), // Nex P3 spec text
            a1lib.mixColor(235, 47, 47), // Nex P3 spec text NEW 16/7/24
            a1lib.mixColor(153, 255, 153), // "Nex:" green
            a1lib.mixColor(155, 48, 255), // "Nex:" purple
            a1lib.mixColor(255, 0, 255), //
            a1lib.mixColor(0, 255, 255), //
            a1lib.mixColor(255, 0, 0), // Red
            a1lib.mixColor(255, 255, 255), // White
            a1lib.mixColor(127, 169, 255) // Clock blue
        ]
    }
    return reader
}

const secondsForPoolToPop = 22
const poolReminderSeconds = [3,2,1]

helpers.displayDetectionMessage("Better Aod starting test", 5000)

function App(){
    const [settingsWindow, setSettingsWindows] = useState<Window | null>(null)
    const showSettings = () => {
        const newWindow = window.open("", "Settings", "width = 350, height = 500")
        if(newWindow){
            if(newWindow.document.getElementById("root") === null){
                newWindow.document.write(`<div id="root" style="height:100%; width:100%"></div>`)
            }
            setSettingsWindows(newWindow)
        }
    }

    return <div
    style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100%",
        minWidth: "100%",
        color: "white",
        backgroundColor: "#04121b",
        backgroundImage: "url(/assets/img/background.png)"
    }}
    >Better AoD</div>
}

const container = document.getElementById("root")

const root = createRoot(container!)
root.render(alt1? <App /> : <div>Run this in alt1</div>)