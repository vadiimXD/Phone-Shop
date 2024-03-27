import { User } from "./User"

export type Phone = {
    _id?: string
    name: string
    type: string
    damages: string
    image: string
    description: string
    shoppingCart: string[]
    year: string
    price: string
    boughtFrom: User
    owner: User
}