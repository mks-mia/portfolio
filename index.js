function updateProgressBarB(){
    let progressBar = document.getElementById('progressBarB');
    let width = 0;
    let interval = setInterval(frame,20);
    function frame(){
        if(width>=100){
            clearInterval(interval);
            setTimeout(()=>{
                width = 0;
                progressBar.style.width = width + "%";
                // progressBar.innerHTML = width + "%";
                interval = setInterval(frame,20);
            },2000);
        }
        else{
            width ++;
            progressBar.style.width = width + "%";
            // progressBar.innerHTML = width + "%";
        }
    }
}
updateProgressBarB();

function updateProgressBarE(){
    let progressBar = document.getElementById('progressBarE');
    let width = 0;
    let interval = setInterval(frame,20);
    function frame(){
        if(width>=80){
            clearInterval(interval);
            setTimeout(()=>{
                width = 0;
                progressBar.style.width = width + "%";
                // progressBar.innerHTML = width + "%";
                interval = setInterval(frame,20);
            },2500);
        }
        else{
            width ++;
            progressBar.style.width = width + "%";
            // progressBar.innerHTML = width + "%";
        }
    }
}
updateProgressBarE();

function updateProgressBarC(){
    let progressBar = document.getElementById('progressBarC');
    let width = 0;
    let interval = setInterval(frame,20);
    function frame(){
        if(width>=50){
            clearInterval(interval);
            setTimeout(()=>{
                width = 0;
                progressBar.style.width = width + "%";
                // progressBar.innerHTML = width + "%";
                interval = setInterval(frame,20);
            },3200);
        }
        else{
            width ++;
            progressBar.style.width = width + "%";
            // progressBar.innerHTML = width + "%";
        }
    }
}
updateProgressBarC();

function updateProgressBarT(){
    let progressBar = document.getElementById('progressBarT');
    let width = 0;
    let interval = setInterval(frame,20);
    function frame(){
        if(width>=20){
            clearInterval(interval);
            setTimeout(()=>{
                width = 0;
                progressBar.style.width = width + "%";
                // progressBar.innerHTML = width + "%";
                interval = setInterval(frame,20);
            },3850);
        }
        else{
            width ++;
            progressBar.style.width = width + "%";
            // progressBar.innerHTML = width + "%";
        }
    }
}
updateProgressBarT();

function remove(){
    document.getElementById('name').value='';
    document.getElementById('email').value='';
    document.getElementById('message').value='';
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxe1sAdtX9XlbvSeGr4lVdGHtrx_K-1ZpfVy5y2nMcyiwcR288cMutnPAEWISKFARUCWw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Your inquiry is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
  remove()
})


