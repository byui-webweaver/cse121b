
// operators.js
let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;


function isHit() {
    //true if number > .5/false if <.5//
    return Math.random() > 0.5;
}

function shipCanFire(){
    //true if ammo > 0 and health > 0; all others false//
    return shipHealth > 0 && shipAmmo > 0;
}

function isDestroyed(health){
    //true if health is <= 0//
    return health <= 0;
}


function reloadShip (){
    //ship health reduced by 1 and add 3 to ammo//
    shipHealth --;
    shipAmmo +=3;
}

function fireShip() {
  if (shipCanFire()) {
    shipAmmo--;
    if (isHit()) {
      targetHealth--;
      console.log("hit - targetHealth:", targetHealth);
    } else {
      console.log("miss");
    }
  } else {
    reloadShip();
    console.log("reloading, shipHealth:", shipHealth);
  }
}

function encounter() {
  console.log("You see a target");
  if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
    fireShip();
    if (isDestroyed(targetHealth)) {
      console.log("Target eliminated");
    }
    if (isDestroyed(shipHealth)) {
      console.log("ship destroyed");
    }
  }
}






