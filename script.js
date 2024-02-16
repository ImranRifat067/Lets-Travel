const allBtn = document.getElementsByClassName('add-btn');
let count = 0;

for(const btn of allBtn){
    btn.addEventListener('click',function handleSelect(event){
        console.log('boss click korci');
        count = count + 1 ;
        setInnerText('card-count',count);

        const place = event.target.parentNode.parentNode.childNodes[1].innerText;

        const prise =event.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
        
        const selectedCard = document.getElementById('selected-card-container');

        const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerText = place;
        const p2 = document.createElement('p');
        p2.innerText = prise;

        li.style.display = 'flex';
        p.style.marginRight = '10px';

        li.appendChild(p);
        li.appendChild(p2);

        selectedCard.appendChild(li);

    } )
}

function setInnerText (elementId,value){
    document.getElementById(elementId).innerText = value;
}