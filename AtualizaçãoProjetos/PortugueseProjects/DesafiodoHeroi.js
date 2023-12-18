//-----------------------------Classe Herói------------------------------------
class Heroi{
    constructor(Nome, Xp, Nivel){
        this.Nome = Nome
        this.Xp = Xp
        this.Nivel = Nivel
    }
    

    Condicoes(){
        if (this.Xp <= 1000 ){                                                           
            this.Nivel = ("Ferro");
        }
        else if (this.Xp >= 1001 && (this.Xp) <= 2000){
            this.Nivel = ("Bronze");
        }
        else if (this.Xp >= 2001 && (this.Xp) <= 5000){
            this.Nivel = ("Prata");
        }
        else if (this.Xp >= 6001 && (this.Xp) <= 7000){
            this.Nivel = ("Ouro");
        }
        else if (this.Xp >= 7001 && (this.Xp) <= 8000){
            this.Nivel = ("Platina");
        }
        else if (this.Xp >= 8001 && (this.Xp) <= 9000){
            this.Nivel = ("Ascendente");
        }
        else if (this.Xp >= 9001 && (this.Xp) <= 10000){
            this.Nivel = ("Imortal");
        }
        else if (this.Xp >= 10001){
            this.Nivel = ("Radiante");
        }
    }
    Texto(){
        console.log(`O herói de nome ${this.Nome}, está no nível de: ${this.Nivel}.`)
    }    
    Executar(){
    this.Condicoes()
    this.Texto()
    }
    
}    
//-------------------------Definição e Execução--------------------------------
let IHeroi = new Heroi("Percy", 5000, "Cobre")
IHeroi.Executar()
//-----------------------------Fim do Código----------------------------------