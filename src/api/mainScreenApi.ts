import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.github.com/',
})

//api

export const usersAPI = {
    getUser(login: string) {
        return instance.get<any>(`users/${login}`)
    }
}