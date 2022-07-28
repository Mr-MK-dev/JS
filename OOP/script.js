class Atuo {
    #password;
    constructor( username,password) {
        this.#password = password;
        this.username = username;
        this.email = `${username}@mk.com`
    }
    autofun(username,password){
        if(username === this.username && password === this.#password){
            console.log(`All is well`);
            return true;
        }else{
            console.log(`Wrong data `);
        }
    }
    setPassword(newpass){
        console.log(mk.#password);
        this.#password = newpass
        
    }
}

const mk = new Atuo('mkcoder',1234)
mk.autofun('mkcoder',124)
mk.setPassword(124)
mk.autofun('mkcoder',124)

// console.log(mk.#password);
console.log(mk.password);
console.log(mk.email);
