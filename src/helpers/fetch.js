const baseURL = 'https://randomuser.me/api/?';

const fetchAPI = ( endpoint, method = 'GET' ) => {

    const url = `${baseURL}${endpoint}`

    if( method === 'GET' ){
        return fetch(url)
    }

}

export {
    fetchAPI
}