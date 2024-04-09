import { atom } from "recoil";
import cardData from '../data/data.json'

export interface Card {
    id: string,
    name: string,
    image: string
}

export interface Rowcard extends Card {
    isValid?: boolean
}

export const cardsDataAtom = atom<Card[]>({
    key: "cardsdata",
    default: cardData
})

export const sourceAtom = atom({
    key: "source",
    default: <Rowcard[]>[]
})

export const loadAtom = atom({
    key: "load",
    default: <Rowcard[]>[]
})

export const pathAtom = atom({
    key: "path",
    default: <Rowcard[]>[]
})

export const triggerClickAtom = atom({
    key: "triggerclick",
    default: false
})