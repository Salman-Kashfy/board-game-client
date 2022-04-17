import {api} from './api.service'

export const SetBaseUrl = () => {
    return process.env.REACT_APP_BASE_URL;
}

export const POST = async (url, data = null, config = null) => {
    var res = await api.post(SetBaseUrl() + url, data, config)
    return res?.data
}

export const GET = async (url, params = null) => {
    var res = await api.get(SetBaseUrl() + url, {
        params
    });
    return res?.data
}