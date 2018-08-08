(function(){

    function Start() {
        console.log(`%c App Started...`, "color: blue; font-size: 30px;");

        if(document.title == "Contact"){
            content.ContactContent();
        }
    }

    window.addEventListener("load", Start);
})();