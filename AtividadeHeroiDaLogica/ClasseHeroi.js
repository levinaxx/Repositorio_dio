// Codigo com laço de repetição if/else


// class Heroi {
//     constructor(name, idade, tipo, ataque) {
//         this.name = name
//         this.idade = idade
//         this.tipo = tipo
//         this.ataque = ataque
//     }
//     atacar() {
//         if (this.tipo === "Mago") {
//             console.log(`O ${this.tipo} ${this.name}, atacou usando ${this.ataque}!`)
//         }
//         else if (this.tipo === "Guerreiro") {
//             console.log(`O ${this.tipo} ${this.name}, atacou usando ${this.ataque}!`)
//         }
//         else if (this.tipo === "Monge") {
//             console.log(`O ${this.tipo} ${this.name}, atacou usando ${this.ataque}!`)
//         }
        
//     }
// }
// let mago = new Heroi("Levi", 20, "Mago", "Magia")
// let guerreiro = new Heroi("Roberto", 35, "Guerreiro", "Espadas")
// let monge = new Heroi("Albert", 56, "Monge", "Artes Marciais")

// monge.atacar()



// Codigo com laço de repetição usando Switch/case


// class Heroi {
//     constructor(nome, idade, tipo, ataque) {
//         this.nome = nome;
//         this.idade = idade;
//         this.tipo = tipo;
//         this.ataque = ataque;
//     }

//     atacar() {
//         let mensagem = "";
//         switch (this.tipo) {
//             case "Mago":
//             case "Guerreiro":
//             case "Monge": 
//             case "Ninja":
//                 mensagem = `O ${this.tipo} ${this.nome}, atacou usando ${this.ataque}!`;
//                 break;
//             default:
//                 mensagem = `O ${this.nome} atacou usando ${this.ataque}!`;
//                 break;
//         }
//         console.log(mensagem);
//     }
// }

// let mago = new Heroi("Levi", 20, "Mago", "Magia");
// let guerreiro = new Heroi("Roberto", 35, "Guerreiro", "Espadas");
// let monge = new Heroi("Albert", 56, "Monge", "Artes Marciais");
// let ninja = new Heroi("Hanzo", 30, "Ninja", "Shurikens");

// ninja.atacar();
