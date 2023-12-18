//-----------------------------Hero Class-------------------------------------------
class Hero{
    constructor(Name, Xp, Level){
        this.Name = Name
        this.Xp = Xp
        this.Level = Level
    }
    

    Conditions(){
        if (this.Xp <= 1000 ){                                                           
            this.Level = ("Iron");
        }
        else if (this.Xp >= 1001 && (this.Xp) <= 2000){
            this.Level = ("Bronze");
        }
        else if (this.Xp >= 2001 && (this.Xp) <= 5000){
            this.Level = ("Silver");
        }
        else if (this.Xp >= 6001 && (this.Xp) <= 7000){
            this.Level = ("Gold");
        }
        else if (this.Xp >= 7001 && (this.Xp) <= 8000){
            this.Level = ("Platinum");
        }
        else if (this.Xp >= 8001 && (this.Xp) <= 9000){
            this.Level = ("Ascending");
        }
        else if (this.Xp >= 9001 && (this.Xp) <= 10000){
            this.Level = ("Immortal");
        }
        else if (this.Xp >= 10001){
            this.Level = ("Radiant");
        }
    }
    Text(){
        console.log(`The hero named ${this.Name}, is at the level of: ${this.Level}.`)
    }    
    Execute(){
    this.Conditions()
    this.Text()
    }
    
}    
//-------------------------Definition and Execution---------------------------------
let IHero = new Hero("Percy", 5000, "Cobre")
IHero.Execute()
//-----------------------------End of Code------------------------------------------