import { Meme } from "./meme"

export interface ApiResponse {
    success: boolean,
    data: {
        memes: Meme[],
    }
}