import * as audio from "./audio"

export const minions = {
    Umbra: {
        name: "Umbra",
        initial: "U",
        color: "#904090",
        audio: audio.umbra
    },
    Glacies:{
        name: "Glacies",
        initial: "G",
        color: "#2090A0",
        audio: audio.glacies
    },
    Cruor:{
        name: "Cruor",
        initial: "C",
        color: "#A04040",
        audio: audio.cruor
    },
    Fumus:{
        name: "Fumus",
        initial: "F",
        color: "#708070",
        audio: audio.fumus
    }
} as const

export type minion = (typeof minions)[keyof typeof minions]

export const minionList = Object.values(minions)