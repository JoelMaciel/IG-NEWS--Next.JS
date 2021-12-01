import {Client} from "faunadb";
console.log(process.env.NEXT_PUBLIC_FAUNA_KEY);

export const fauna = new Client({
    secret: process.env.NEXT_PUBLIC_FAUNA_KEY
})