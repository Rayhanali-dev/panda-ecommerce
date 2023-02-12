const headingCollection = document.getElementsByTagName('h2');
for (const element of headingCollection) {
    element.style.color = 'lightBlue';
}

const backpack = document.getElementById('backpack');
backpack.style.backgroundColor = 'tomato';

const cardClass = document.getElementsByClassName('card');
for (const card of cardClass) {
    card.style.borderRadius = '30px';
}

function clickMe() {
    console.log('Hello js');
}

const buyButton = document.getElementsByClassName('panda-btn-buy-now');

for (const button of buyButton) {
    button.addEventListener('click', function(){
        button.parentNode.parentNode.parentNode.style.display = 'none';
    })
}

const emailInput = document.getElementById('exampleInputEmail1');

emailInput.addEventListener('keyup', function(event){
    const text = event.target.value;
    const submit = document.getElementById('submit-btn');

    if (text === 'email'){
        submit.removeAttribute('disabled');
    } else {
        submit.setAttribute('disabled', true);
    }
})

const images = document.getElementsByTagName('img');
for (const img of images) {
    img.addEventListener('mouseenter', function(){
        img.src = "images/bags/bag-1.png";
    })
}

const footer = document.getElementById('subscribe');
footer.addEventListener('dblclick', function(){
    footer.style.background = 'red';
})