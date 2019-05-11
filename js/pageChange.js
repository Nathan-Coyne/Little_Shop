window.onload = function() {
    //buttons for the different pages
    var galaxyNav = document.querySelector(".nav__hover-galaxy");
    var crystalNav = document.querySelector('.nav__hover-crystal');
    var metalNav = document.querySelector('.nav__hover-metal');
    var seaShellNav = document.querySelector('.nav__hover-sea-shell');
    //different Pages
    var galaxyButton = document.querySelector('.galaxy_store');
    var crystalButton = document.querySelector('.crystal_store');
    var metalButton = document.querySelector(".metal_store");
    var seaShellButton = document.querySelector(".seashell_store");
    //checks for the previous page to reset it's location
    var previousPage = 0;
    //store a number to detect what page need to be moved out of focus
    var currentPage = 0;

    //changes style on .nav__item-3 and applies the border
    var border = function (){
        var keyBackground = document.querySelector('.nav__item-3');
        keyBackground.style.boxShadow = "10px 10px 50px 2px #3c78d8";
    }
    //this removes the border
    var borderRemove = function (){
        var keyBackground = document.querySelector('.nav__item-3');
        keyBackground.style.boxShadow = "none";
    }
    document.querySelector('.nav__key_logo').addEventListener('mouseover', border);
    document.querySelector('.nav__key_logo').addEventListener('mouseout', borderRemove);
    //changes the subject of the page by moving it to the center and moving the current page to the left
    var switchPage = function (button){ 
        //take the value of current page before anything happens so it previousPage
        previousPage = currentPage;  
        button.style.cssText +=('left:50%; transform: translateX(-50%); opacity:1; transition:transform 1s, left 1s;');

        if (previousPage == 1) {
            galaxyButton.style.cssText += ('left:-100%; transform:translate(0%);');     
        }
        else if (previousPage == 2) {
            crystalButton.style.cssText += ('left:-100%; transform:translate(0%);');    
        }
        else if  (previousPage == 3) {
                metalButton.style.cssText += ('left:-100%; transform:translate(0%);');
        }
        else if  (previousPage == 4) {
                seaShellButton.style.cssText += ('left:-100%; transform:translate(0%);');
        }


        //assigns a number so it the code know what page needs to be moved;
        if (button == document.querySelector('.galaxy_store')){
            currentPage = 1;
        }
        else if (button == document.querySelector('.crystal_store')){
            currentPage = 2;
        }
        else if (button == document.querySelector('.metal_store')){
            currentPage = 3;
        }
        else if (button == document.querySelector('.seashell_store')){
            currentPage = 4;
        }

        //checks both values to ensure the section doesn't scroll off the screen if they press the same button twice in a row.
        if (currentPage == 1 && previousPage == 1 ){
            galaxyButton.style.cssText += ('left:50%; transform: translateX(-50%); opacity:1;');
            console.log(true);
        }
        
        else if (currentPage == 2 && previousPage == 2 ){
            crystalButton.style.cssText += ('left:50%; transform: translateX(-50%); opacity:1;');
            console.log(true);
        }
        else if (currentPage == 3 && previousPage == 3 ){
            metalButton.style.cssText += ('left:50%; transform: translateX(-50%); opacity:1;');
            console.log(true);
        }
        else if (currentPage == 4 && previousPage == 4 ){
            seaShellButton.style.cssText += ('left:50%; transform: translateX(-50%); opacity:1;');
            console.log(true);
        }
    
    };
    var reset = function(){

        console.log(previousPage && currentPage);
        if (currentPage <2 || currentPage >2 ) {
            crystalButton.style.cssText += ('left:100%; transform:translate(0%); opacity:0; transition:none;');   
         } 
        if (currentPage >1) {
            galaxyButton.style.cssText += ('left:100%; transform:translate(0%); opacity:0;transition:none;');     

        }
        if (currentPage <3 || currentPage >3) {
            metalButton.style.cssText += ('left:100%; transform:translate(0%); opacity:0;transition:none;');     

        }
        if (currentPage < 4 || currentPage > 4) {
            seaShellButton.style.cssText += ('left:100%; transform:translate(0%); opacity:0;transition:none;');     

        }  
        console.log("previous image = " + previousPage );
        console.log("current image = " + currentPage );       
    }
    //set timeout so it only counts to 1300ms once. Tried with intervals
    galaxyNav.addEventListener('click', function(){
        setTimeout(reset, 1300);
        galaxyNav.classList.add("selected");
        crystalNav.classList.remove("selected");
        metalNav.classList.remove("selected");
        seaShellNav.classList.remove("selected");
    });
    
    crystalNav.addEventListener('click', function(){
        setTimeout(reset, 1300);
        crystalNav.classList.add("selected");
        galaxyNav.classList.remove("selected");
        metalNav.classList.remove("selected");
        seaShellNav.classList.remove("selected");
    });
    metalNav.addEventListener('click', function(){
        setTimeout(reset, 1300);
        crystalNav.classList.remove("selected");
        galaxyNav.classList.remove("selected");
        metalNav.classList.add("selected");
        seaShellNav.classList.remove("selected");
    });
    seaShellNav.addEventListener('click', function(){
        setTimeout(reset, 1300);
        crystalNav.classList.remove("selected");
        galaxyNav.classList.remove("selected");
        metalNav.classList.remove("selected");
        seaShellNav.classList.add("selected");
    });

    // I still need a way to reset the position
    galaxyNav.addEventListener('click', function(){
       switchPage(galaxyButton);  
   });
   crystalNav.addEventListener('click', function(){
        switchPage(crystalButton);  
    });
    metalNav.addEventListener('click', function(){
        switchPage(metalButton);  
    });
    seaShellNav.addEventListener('click', function(){
        switchPage(seaShellButton);  
    });

}