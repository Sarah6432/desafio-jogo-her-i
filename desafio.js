class hero {

    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;

    }
    atacar() {
        if (this.tipo === "guerreiro") {
            let ataque = "usando espada";
            console.log(`O ${this.tipo} atacou ` + ataque);
        } else if (this.tipo === "mago") {
            let ataque = "usando magia";
            console.log(`O ${this.tipo} atacou ` + ataque);
        } else if (this.tipo === "monge") {
            let ataque = "usando artes marciais";
            console.log(`O ${this.tipo} atacou ` + ataque);
        } else if (this.tipo === "ninja") {
            let ataque = "usando shuriken"
            console.log(`O ${this.tipo} atacou ` + ataque);
        }
    }
}

let heroi = new hero("julio", 20, "monge");
let heroina = new hero("maria", 19, "ninja");
let mago = new hero("vanessa", 21, "mago");
let guerreiro = new hero("paulo", 23, "guerreiro");

heroi.atacar()
heroina.atacar()
mago.atacar()
guerreiro.atacar()