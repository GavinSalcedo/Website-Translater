function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: "en"}, 'google_translate_element');
} // end of function

function changeLanguage(receive) {
    
    //Filipino = tl, Japanese = ja, Arabic = ar, Spanish = es
    
    var language = receive;
    var selectField = document.querySelector("#google_translate_element select");
    for(var i=0; i < selectField.children.length; i++){
        var option = selectField.children[i];
        // find desired langauge and change the former language of the hidden selection-field 
        if(option.value==language){
            selectField.selectedIndex = i;
            // trigger change event afterwards to make google-lib translate this side
            selectField.dispatchEvent(new Event('change'));
            break;
        }
    }
} // end of function