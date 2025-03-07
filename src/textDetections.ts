import * as helpers from "./helpers"

const confusedCharacters = [
    ["l", "i", "1"],
    ["o", "0"],
    ["z", "2"],
    ["1", "7"]
]

const regexAdjustments = (rawRegexString: string) => {
    console.log("Initial", rawRegexString)

    confusedCharacters.forEach((list) => {
        const replacement = `(?:${list.join("|")})`
    
    list.forEach((character) => {
        try{
            rawRegexString = rawRegexString.replaceAll(character, replacement)
        } catch{
            console.error("replaceAll not a function of rawRegex")
            console.error(rawRegexString)
            console.error(typeof rawRegexString)
        }
        })
    })

    console.log("Updated", rawRegexString)

    return rawRegexString
}

export const detectKillEnd = (text: string) => {
    const translations = [`Completion Time: `, `Abschlusszeit: `, `Temps : `]

    const mainExpression = translations.map((string) => regexAdjustments(string)).join("|")

    const match = text.match(new RegExp(`(${mainExpression})(([0-9]{2}):([0-9]{2}))`, "i"))

    if (match) {
        const minutes = parseInt(match[3], 10)
        const seconds = parseInt(match[4], 10)

        if (!isNaN(minutes) && !isNaN(seconds)) {
            return minutes * 60 + seconds
        }
    }

    return false
}

export const detectPlayerDeath = (text: string) => {
    const translations = [`Oh dear, you are dead!`, `Oje, du bist tot!`, `Oh fichtre, vous etes mort !`]

    const mainExpression = translations.map((string) => regexAdjustments(string)).join("|")

    const match = text.match(new RegExp(`(${mainExpression})`, "i"))

    return !!match
}

export const detectKillStart = (text: string) => {
    const translations = [
        `Welcome to your session against: Nex, Angel of Death`,
        `Willkommen zu deiner Runde gegen: Nex - Engel des Todes`,
        `Bienvenue dans votre session de combat contre : Nex : l'ange de la mort`
    ]

    const mainExpression = translations.map((string) => regexAdjustments(string)).join("|")

    const match = text.match(new RegExp(`(${mainExpression})`, "i"))

    return !!match
}

export const detectMinionDeath = (text: string) => {
    const translations = [`master`, `meister`, `ma`]

    const mainExpression = translations.map((string) => regexAdjustments(string)).join("|")

    const match = text.match(new RegExp(`(umb|glac|cru|fum).*(${mainExpression})`, "i"))

    if (match) {
        const minion = match[0].substring(0, 1)

        return helpers.getMinionFromInitial(minion)
    }
}

export const detectDirectionalSmoke = (text: string) => {
    const match = text.match(
        new RegExp(
            `(Nex begins to draw smoke from the (north|east) towards you)|(Nex zieht Rauch aus dem (Norden|Osten) zu dir hin)|(Nex vous envoie de la fumee venant de l'(est) !)|(Nex se met)`,
            "i"
        )
    )

    if (match) {
        if (text.includes("north") || text.includes("Norden") || text.includes("Nex se met")) {
            return "North"
        } else if (text.includes("east") || text.includes("Osten") || text.includes("est")) {
            return "East"
        }
    }
}

export const detectPool = (text: string) => {
    const translations = [
        `Nex casts thick black smoke towards the centre of the arena`,
        `Nex leitet dichten, schwarzen Rauch zur Mitte der Arena`,
        `Nex lance une epaisse fumee noire vers le centre de l'arene`
    ]

    const mainExpression = translations.map((string) => regexAdjustments(string)).join("|")

    const match = text.match(new RegExp(`(${mainExpression})`, "i"))

    return !!match
}

export const detectBomb = (text: string) => {
    const translations = [
        `Nex has marked you to take the full force `,
        `Nex hat dich markiert, um die gesamte Wucht der Elemente abzubekommen`,
        `Nex vous prend pour cible : vous allez subir toute la puissance des elements`
    ]

    const mainExpression = translations.map((string) => regexAdjustments(string)).join("|")

    const match = text.match(new RegExp(`(${mainExpression})`, "i"))

    return !!match
}