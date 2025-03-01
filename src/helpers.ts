import * as a1lib from "alt1";

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
