
export function ApiLogin(email: string, password: string) {

    let login = [
        {
            email: "denilsongestords@gmail.com",
            password: "dsmoke20"
        }
    ]
    if (email === login[0].email && password === login[0].password) {
        return true
    } else {
        return false
    }
    
}

