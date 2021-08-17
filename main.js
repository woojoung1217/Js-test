
function user (first, last){
  this.firstName = first
  this.lastName = last 
  this.fullName = first+last
}

const myName = new user('Yoon ', 'woojoung')

console.log(myName);