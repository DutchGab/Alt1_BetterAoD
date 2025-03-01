import { useReducer } from "react"
import * as data from "./data"
import * as helpers from "./helpers"


export type State = { allDead: boolean; order: data.minion[]}