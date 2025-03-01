export const newkill = new Audio("./assets/audio/NewKill/1.mp3")
export const north = new Audio("./assets/audio/North/1.mp3")
export const east = new Audio("./assets/audio/East/1.mp3")
export const pool = new Audio("./assets/audio/Pool/1.mp3")
export const poolPop = new Audio("./assets/audio/PoolPopping/1.mp3")
export const bomb = new Audio("./assets/audio/Bomb/1.mp3")
export const umbra = new Audio("./assets/audio/Umbra/1.mp3")
export const glacies = new Audio("./assets/audio/Glacies/1.mp3")
export const cruor = new Audio("./assets/audio/Cruor/1.mp3")
export const fumus = new Audio("./assets/audio/Fumus/1.mp3")
export const death = new Audio("./assets/audio/Death/1.mp3")


export const updateNewKillVolume = (volume: number) => {
    newkill.volume = volume
}
export const updateSmokeVolume = (volume: number) => {
    north.volume = volume
    east.volume = volume
}

export const updatePoolVolume = (volume: number) => {
    pool.volume = volume
    poolPop.volume = volume
}

export const updateBombVolume = (volume: number) => {
    bomb.volume = volume
}

export const updateMinionVolume = (volume: number) => {
    umbra.volume = volume
    glacies.volume = volume
    cruor.volume = volume
    fumus.volume = volume
}

export const updateDeathVolume = (volume: number) => {
    death.volume = volume
}