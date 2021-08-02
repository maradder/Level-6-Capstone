import axios from 'axios'

// Create an axios instance that will take the token along with every axios request
const userAxios = axios.create()
userAxios.interceptors.request.use( config => {
    const token = localStorage.getItem( "token" )
    config.headers.Authorization = `Bearer ${ token }`
    return config
} )

export default userAxios
