import axios from "axios";

export async function login(username, password) {
    console.log(username)
    console.log(password)
    const data = {
        username: username,
        password: password
    };
    let accessToken = null;
    await axios({
        method: 'POST',
        url: `http://shop.isuncharge.com/ISCHolding/api/auth/signin`,
        headers: {
            'Content-Type': 'application/json',
        },
        data: data
    }).then(response => {
        console.log(response)
        accessToken = response.data.accessToken;
    }).catch((error) => {
        throw error
    });
    return accessToken;
}
