import * as a1lib from "alt1"
import * as data from "./data"

export const alt1 = window.alt1

export const displayDetectionMessage = (message: string, duration: number, size?: number) => {
    alt1?.overLayClearGroup("1")
    alt1?.overLaySetGroup("1")
    alt1?.overLayTextEx(
        message, 
        a1lib.mixColor(220, 30, 30), 
        size || 48, 
        Math.round(alt1.rsWidth/2), 
        Math.round(alt1.rsHeight/4),
        duration,
        "serif", 
        true, 
        true
    )
}

export const getMinionFromInitial = (initial: string) => {
    const result = data.minionList.find(minion => minion.initial === initial)

    if (!result){
        console.error(`No minion found with initial ${initial}`)

        return null
    }

    return result
}

export const deduveLastMinion = (order: data.minion[]) => {
    const minionsNotIncluded = data.minionList.filter(minion => !order.includes(minion))

    if (minionsNotIncluded.length === 1){
        return minionsNotIncluded[0]
    }
}