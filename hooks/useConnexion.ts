var logged : boolean 


function login(username: string, password: string){
    if (username == "Test" && password == "Test"){
        logged = true
    }
    else{
        logged = false
    }
}

function checkLogged(){
return logged
}

export { login, checkLogged }