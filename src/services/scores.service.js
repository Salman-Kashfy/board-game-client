import {apiUrl} from "../constants";
import {GET, POST} from "./api.service.wrapper";

export const GetScores = async () => {
    return await GET(apiUrl.scores)
}

export const CreateScore = async (data) => {
    return await POST(apiUrl.scores,data)
}