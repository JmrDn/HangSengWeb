const FRASER_PLACE = document.getElementById('fracer-place');
const ANVAYA_COVE = document.getElementById('anvaya-cove');

if (FRASER_PLACE != null){
    FRASER_PLACE.addEventListener('click', function(){
        window.location.href ="../../Our properties/For Sale/fraser-place.html";
    });
}

if (ANVAYA_COVE != null){
    ANVAYA_COVE.addEventListener('click', function(){
        window.location.href ="../../Our properties/For Sale/anvaya-cove.html";
        console.log("anvaya cove clicked");
    });
}


const backBtn = document.querySelectorAll('.selected-item-container .main-item-container .title-container .back-container');

const martinville = document.getElementById("martin-ville");


function showItemSelected(property){
    let propertySelected = property.toString();


    document.querySelector('.selected-item-container').style.display = 'flex';
    let selectedMartinvile = document.querySelector('.selected-item-container .selected-martinville-homes');


    if (propertySelected === "martinville"){
 
        selectedMartinvile.style.display = 'flex';
    
    }

};

function hideItemSelected(){
    document.querySelector('.selected-item-container').style.display='none';

  
};

backBtn.forEach(backBtn => {
    backBtn.addEventListener('click', function(){
        hideItemSelected();
    });
});

martinville.addEventListener('click', function(){

    showItemSelected("martinville");
    

});

document.querySelector('#martinville-homes-unita').addEventListener('click',function(){
 
    localStorage.setItem('property-name', 'Unit A');
    window.location.href ="../../Our properties/For Sale/martinvillehomes.html";
});

document.querySelector('#martinville-homes-unitb').addEventListener('click',function(){
 
    localStorage.setItem('property-name', 'Unit B');
    window.location.href ="../../Our properties/For Sale/martinvillehomes.html";
});

document.querySelector('#martinville-homes-unitc').addEventListener('click',function(){
 
    localStorage.setItem('property-name', 'Unit C');
    window.location.href ="../../Our properties/For Sale/martinvillehomes.html";
});



