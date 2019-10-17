import axios from "axios";

export async function login(username, password) {
    const data = {
        username: username,
        password: password
    };
    let accessToken = null;
    await axios({
        method: 'POST',
        url: `http://10.8.235.41:20080/isc-holding/api/auth/signin`,
        headers: {
            'Content-Type': 'application/json',
        },
        data: data
    }).then(response => {
        accessToken = response.data.accessToken;
    }).catch((error) => {
        throw error
    });
    return accessToken;
}
