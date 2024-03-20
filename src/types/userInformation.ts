import { Phone } from "./Phone"

export type UserInfo = {
    _id: string
    username: string
    email: string
    password: string
    profileImg: string
    shoppingCart: Phone[]
    boughtList: Phone[]
    createdOffers: Phone[]
    __v: number
}
