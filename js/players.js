const buttons = document.querySelectorAll('.buttons');

for(const button of buttons){
    button.addEventListener('click', function(event){
        const parent = event.target.parentNode.childNodes[1].innerText;
        const setPlayer = document.getElementById('orderdList');
        // console.log(setPlayer.childNodes.length);
        event.target.setAttribute('disabled', true);
        if(setPlayer.childNodes.length <= 5){
            const li = document.createElement('li');
            li.innerText = parent;
           setPlayer.appendChild(li);
        } else{
            alert('can`t added your player!');
            return;
        }
        
    })

}