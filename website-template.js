function display(){
  let e=document.querySelector('.menu-buttons');
  e.classList.toggle('display1');
}
function activeButton(selected){
    document.querySelector('.active').classList.remove('active');
    document.querySelector(selected).classList.add('active');
};
const disappearingButton = document.querySelector('.up-button');
const scrollHeightToDisappear = 600;

let x='.button1';
let y='.button1';

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY >= scrollHeightToDisappear) {
        disappearingButton.style.opacity = 1;
    } else {
        disappearingButton.style.opacity = 0;
    }
    if(scrollY<600)
    {
        x='.button1';
    }else if(scrollY>=600 && scrollY<1300)
    {
        x='.button2';
    } else if(scrollY>=1300 && scrollY<2800)
    {
        x='.button3';
    } else if(scrollY>=2800){
        x='.button4';
    }
    if(x!=y){
        activeButton(x);
        y=x;
    }
});
function sendEmail(){
    
    if(document.querySelector('.i1').value){
    document.querySelector('.message').innerHTML=`A message from ${document.querySelector('.i1').value} has been sent!`;

    document.querySelector('.i1').value=``;
    document.querySelector('.i2').value=``;
    document.querySelector('.i3').value=``;
    document.querySelector('.sq').value=``;

    } else document.querySelector('.message').innerHTML='Please enter your data!';

    let q=document.querySelector('.message-container');
    q.classList.add('display1');
}
function closeMessage(){
    let q=document.querySelector('.message-container');
    q.classList.remove('display1');
}
