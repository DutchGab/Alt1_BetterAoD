import { useReducer } from "react"
import * as audio from "./audio"

export const messages = {
    newKillmessage: "Start of kill confirmation",
    smokeMessage: "Smoke warning",
    poolMessage: "Pool warning",
    bombMessage: "Bomb warning",
    deathMessage: "Death warning"
}

type MessageConfig = { text: boolean, volume: number }
export type MessageTypes = keyof typeof messages
type displayType = "Letters" | "Numbers"

type Settings = Record<MessageTypes, MessageConfig> &{
    displayType: displayType
    orderMessage: { volume: number}
}

const defaultSettings: Settings = {
    displayType: "Numbers",
    newKillmessage: { text: true, volume: 100},
    smokeMessage: { text: true, volume: 100},
    poolMessage: { text: true, volume: 100},
    bombMessage: { text: true, volume: 100},
    deathMessage: { text: true, volume: 100},
    orderMessage: { volume: 100}
}

type setTextSettingsValue = { 
    message: MessageTypes
    type: "text"
    newValue: boolean
}

type setVolumeSettingsValue = { 
    message: MessageTypes
    type: "volume"
    newValue: number
}

type setDisplayType = {
    type: "setDisplayType"
    newValue: displayType
}

type setSettingsValue = setTextSettingsValue | setVolumeSettingsValue | setDisplayType

const reducer = (state: Settings, action: setSettingsValue) => {
    const tempState = {...state}

    if ( action.type === "setDisplayType"){
        tempState.displayType = action.newValue

        localStorage.setItem("settings", JSON.stringify(tempState))
        
        return tempState
    }

   //tempState[action.message][action.type] = action.newValue


    localStorage.setItem("settings", JSON.stringify(tempState))
    
    if (action.type === "volume"){
        audio.updateNewKillVolume(tempState.newKillmessage.volume)
        audio.updateSmokeVolume(tempState.smokeMessage.volume)
        audio.updatePoolVolume(tempState.poolMessage.volume)
        audio.updateBombVolume(tempState.bombMessage.volume)
        audio.updateDeathVolume(tempState.deathMessage.volume)
        audio.updateMinionVolume(tempState.deathMessage.volume)
    }
    return tempState
}

const settingsAtBoot: Settings = JSON.parse(localStorage.getItem("settings") || JSON.stringify(defaultSettings))

audio.updateNewKillVolume(settingsAtBoot.newKillmessage.volume)
audio.updateSmokeVolume(settingsAtBoot.smokeMessage.volume)
audio.updatePoolVolume(settingsAtBoot.poolMessage.volume)
audio.updateBombVolume(settingsAtBoot.bombMessage.volume)
audio.updateDeathVolume(settingsAtBoot.deathMessage.volume)
audio.updateMinionVolume(settingsAtBoot.deathMessage.volume)

const useSettings = () => useReducer(reducer, settingsAtBoot)


export default useSettings