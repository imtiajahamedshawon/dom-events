function makeRed() {
    document.body.style.backgroundColor = 'red';
}
// handle blue button click by setting function name

const blueButton = document.getElementById('make-blue-button');
// just set the name of the function
blueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}
// handle even using anonymous function
const greenButton = document.getElementById('make-green-button')
//  anonymous function
  greenButton.onclick = function(){
      document.body.style.backgroundColor='green';
  }

//   direct shorcut

document.getElementById('light-blue').addEventListener('click', function(){
    document.body.style.backgroundColor='lightblue';
})

