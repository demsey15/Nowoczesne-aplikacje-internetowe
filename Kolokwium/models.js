window.addEventListener('DOMContentLoaded', function () {
    
    var marki = [
        "nissan",
        "fiat",
        "ford"
    ];
    
    function addMarkaToSelect(select, marka) {
        var option = document.createElement('option');
        option.text = marka;
        select.appendChild(option);
    }
    
    var markaSelect = document.querySelector('#marka');
    
    marki.forEach(function(marka) {
        addMarkaToSelect(markaSelect, marka);
    });
});
