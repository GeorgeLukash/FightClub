class Fighter{
  constructor(name = 'Player1', power = 10, health = 200){
    this.name = name;
    this.power = power;
    this.health = health;
  }
  
  getStatistics(){
    console.log(`Name: ${this.name} 
Power: ${this.power}
Health : ${this.health}`)
  }
  getHealth(){
    return this.health;
  }
  setDamage(damage = 10){
    this.health = this.health - damage;
    this.getStatistics();
  }
  
  Hit(enemy, point){
    let damage = point * this.power;
    enemy.setDamage(damage);
  }
  
}

class ImprovedFighter extends Fighter{
  doubleHit(enemy, point){
    super.Hit(enemy, 2*point);
  }
}

var fighter1 = new Fighter('Bruce',20,100);
var newFighter = new ImprovedFighter();

let fight = (firstPlayer,secondPlayer, ...point) => {
  
  let hits = point;
  
  for(let i in hits){
    
    firstPlayer.Hit(secondPlayer, hits[i]);
    
   if(secondPlayer.getHealth() < 0){
     console.log('First Player Wins');
     break;
   }
    
    secondPlayer.doubleHit(firstPlayer, hits[i]);
    
   if(firstPlayer.getHealth() < 0){
     console.log('Second Player Wins');
     break;
   }
    
  }
  if(firstPlayer.getHealth() >0 && secondPlayer.getHealth()){
    console.log('Draw!!!');
  }
}

fight(fighter1,newFighter,1,2);
