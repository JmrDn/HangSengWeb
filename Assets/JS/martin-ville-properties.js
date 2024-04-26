const PROPERTY_NAME = localStorage.getItem("property-name");

if (PROPERTY_NAME !== null && PROPERTY_NAME !== ""){
    document.getElementById("property-name").innerText = "Martinville Homes " + PROPERTY_NAME ;
}

