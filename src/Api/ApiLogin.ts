
export function ApiLogin(email: string, password: string) {

    let login = [
        {
            email: "denilsongestords@gmail.com",
            password: "dsmoke20"
        }
    ]
    console.log("Fazendo loing")
    if (email === login[0].email && password === login[0].password) {
        const token = "123565465465546546565626987978";
        const user = "denilson";
        const email = "denilsongestords@gmail.com";

        document.cookie = `token=${token}; path=/; expires=${new Date(Date.now() + 2 * 60 * 60 * 1000).toUTCString()}`; //2 hours
        //localStorage.setItem('token', token);
        localStorage.setItem('email', email);
        localStorage.setItem('user', user);
        return {
            token,
            email,
            user
        }
    } else {
        return {
            token: "",
            email: "",
            user: ""
        }
    }
    
}

export function ApiLogout() {
    document.cookie = "token=; expires=Thu, 1 Jan 1970 00:00:00 UTC; path=/";
    localStorage.removeItem('email');
    localStorage.removeItem('user');
}

export function ApiGetUser() {
    const token = document.cookie.split(';').find(cookie => cookie.startsWith('token='))?.split('=')[1];
    return {
        token,
        email: localStorage.getItem('email'),
        user: localStorage.getItem('user')
    }
}
// Exporta funcao de verificar token
export function ApiVerifyToken(token: string) {
    if (token === "123565465465546546565626987978") {
        return true;
    }
    return false;
}




