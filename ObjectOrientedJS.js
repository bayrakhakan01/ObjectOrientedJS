
const dataN = document.querySelector('.dataN');
const dataV = document.querySelector('.dataV');
const btn = document.querySelector('.Submit');
let vDataN;
let vDataV;
btn.onclick = function () {
  vDataN = dataN.value;
  vDataV = dataV.value;
  return console.log(vDataN), console.log(vDataV);
  
  
  //return vDataN, vDataV;

  
}

const person = {
  name: ['Bob', 'Smith'],
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
  bio: function() {
    alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  },
  greeting: function() {
    alert('Hi! I\'m ' + this.name[0] + '.');
  }
};


const myDataName = vDataN;
console.log(myDataName);
const myDataValue = vDataV;
console.log(myDataValue);
person[myDataName] = myDataValue;
//const myDataName = dataN.value;
//const myDataValue = dataV.value;
//const myDataName = 'height';
//const myDataValue = '1.75m';
//person[myDataName] = myDataValue;
//person['eyes'] =  'hazel'
//person.farewell = function () { alert('Bye everybody!')}