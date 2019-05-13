window.onload = function() {
    //buttons for the different pages
    var galaxyNav = document.querySelector(".nav__hover-galaxy");
    var crystalNav = document.querySelector('.nav__hover-crystal');
    var metalNav = document.querySelector('.nav__hover-metal');
    var seaShellNav = document.querySelector('.nav__hover-sea-shell');
    var faqNav = document.querySelector(".nav__FAQ");
    var homeNav = document.querySelector(".nav__home");
    var aboutMeNav = document.querySelector(".nav__about-me");
    var homeIconNav = document.querySelector(".nav__key_logo");

    //different Pages
    var galaxyButton = document.querySelector('.galaxy_store');
    var crystalButton = document.querySelector('.crystal_store');
    var metalButton = document.querySelector(".metal_store");
    var seaShellButton = document.querySelector(".seashell_store");
    var faqButton = document.querySelector(".FAQ");
    var aboutMeButton = document.querySelector(".aboutMe");
    var homeButton = document.querySelector(".home");

    //checks for the previous page to reset it's location
    var previousPage = 0;

    //store a number to detect what page need to be moved into focus
    var currentPage = 0;

    //popUp buttons galaxy Page
    var itemOne = document.querySelector(".item-one");
    var itemOneBack = document.querySelector(".card__back-1");
    var itemTwo = document.querySelector(".item-two");
    var itemTwoBack = document.querySelector(".card__back-2");
    var itemThree = document.querySelector(".item-three");
    var itemThreeBack = document.querySelector(".card__back-3");
    var itemFour = document.querySelector(".item-four");
    var itemFourBack = document.querySelector(".card__back-4");
    //popUp buttons crystal Page
    var itemFive = document.querySelector(".item-five");
    var itemFiveBack = document.querySelector(".card__back-5");
    var itemSix = document.querySelector(".item-six");
    var itemSixBack = document.querySelector(".card__back-6");
    var itemSeven = document.querySelector(".item-seven");
    var itemSevenBack = document.querySelector(".card__back-7");
    var itemEight = document.querySelector(".item-eight");
    var itemEightBack = document.querySelector(".card__back-8");
    var itemNine = document.querySelector(".item-nine");
    var itemNineBack = document.querySelector(".card__back-9");
    var itemTen = document.querySelector(".item-ten");
    var itemTenBack = document.querySelector(".card__back-10");
    //closes the popup
    var popUpClose = document.querySelector(".remove-popUp");
    //opens the popUp
    var popUpDOM = document.querySelector(".popUp")
    //display the correct content on the page
    //galaxy page
    var contentOne = document.querySelector(".popUp-1__galaxy__content");
    var contentTwo = document.querySelector(".popUp-2__galaxy__content");
    var contentThree = document.querySelector(".popUp-3__galaxy__content");
    var contentFour = document.querySelector(".popUp-4__galaxy__content");
    //crystal page
    var contentFive = document.querySelector(".popUp-1__crystal__content");
    var contentSix = document.querySelector(".popUp-2__crystal__content");
    var contentSeven = document.querySelector(".popUp-3__crystal__content");
    var contentEight = document.querySelector(".popUp-4__crystal__content");
    var contentNine = document.querySelector(".popUp-5__crystal__content");
    var contentTen = document.querySelector(".popUp-6__crystal__content");
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
    homeIconNav.addEventListener('mouseover', border);
    homeIconNav.addEventListener('mouseout', borderRemove);
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
        else if  (previousPage == 5) {
            aboutMeButton.style.cssText += ('left:-100%; transform:translate(0%);');
        }
        else if  (previousPage == 6) {
            faqButton.style.cssText += ('left:-100%; transform:translate(0%);');
        }
        else if  (previousPage == 0) {
            homeButton.style.cssText += ('left:-100%; transform:translate(0%);');
        }


        //assigns a number so it the code know what page needs to be moved;
        if (button == galaxyButton){
            currentPage = 1;
        }
        else if (button == crystalButton){
            currentPage = 2;
        }
        else if (button == metalButton){
            currentPage = 3;
        }
        else if (button == seaShellButton){
            currentPage = 4;
        }
        else if (button == aboutMeButton){
            currentPage= 5
        }
        else if (button == faqButton){
            currentPage = 6;
        }
        else{
            currentPage = 0;
        }
        

        //checks both values to ensure the section doesn't scroll off the screen if they press the same button twice in a row.
        if (currentPage == 1 && previousPage == 1 ){
            galaxyButton.style.cssText += ('left:50%; transform: translateX(-50%); opacity:1;');
        }
        
        else if (currentPage == 2 && previousPage == 2 ){
            crystalButton.style.cssText += ('left:50%; transform: translateX(-50%); opacity:1;');
        }
        else if (currentPage == 3 && previousPage == 3 ){
            metalButton.style.cssText += ('left:50%; transform: translateX(-50%); opacity:1;');
        }
        else if (currentPage == 4 && previousPage == 4 ){
            seaShellButton.style.cssText += ('left:50%; transform: translateX(-50%); opacity:1;');
        }
        else if (currentPage == 5 && previousPage == 5 ){
            aboutMeButton.style.cssText += ('left:50%; transform: translateX(-50%); opacity:1;');
        }
        else if (currentPage == 6 && previousPage == 6 ){
            faqButton.style.cssText += ('left:50%; transform: translateX(-50%); opacity:1;');
        }
        else if (currentPage == 0 && previousPage == 0 ){
            homeButton.style.cssText += ('left:50%; transform: translateX(-50%); opacity:1;');
        }
    
    };
    var reset = function(){

        if (currentPage < 2 || currentPage > 2 ) {
            crystalButton.style.cssText += ('left:100%; transform:translate(0%); opacity:0; transition:none;');   
         } 
        if (currentPage < 1 || currentPage > 1) {
            galaxyButton.style.cssText += ('left:100%; transform:translate(0%); opacity:0;transition:none;');     

        }
        if (currentPage < 3 || currentPage > 3)  {
            metalButton.style.cssText += ('left:100%; transform:translate(0%); opacity:0;transition:none;');     

        }
        if (currentPage < 4 || currentPage > 4) {
            seaShellButton.style.cssText += ('left:100%; transform:translate(0%); opacity:0;transition:none;');     

        }  
        if (currentPage < 5 || currentPage > 5) {
            aboutMeButton.style.cssText += ('left:100%; transform:translate(0%); opacity:0;transition:none;');     

        } 
        if (currentPage < 6 || currentPage > 6) {
            faqButton.style.cssText += ('left:100%; transform:translate(0%); opacity:0;transition:none;');     

        }
        if (currentPage > 0) {
            homeButton.style.cssText += ('left:100%; transform:translate(0%); opacity:0;transition:none;');     

        }       
    }
    //When calling the function when you pass you variables 
    //through the function make sure the first you pass is the one you want to apply the button
    var addSelected = function (navAdd, navRemove1, navRemove2, navRemove3, navRemove4, navRemove5, navRemove6){
        navRemove1.classList.remove("selected");
        navRemove2.classList.remove("selected");
        navRemove3.classList.remove("selected");
        navRemove4.classList.remove("selected");
        navRemove5.classList.remove("selected");
        navRemove6.classList.remove("selected");
        navAdd.classList.add("selected");
    };
    var popUp = function ( placeholderOne, placeholderTwo, placeholderThree, placeholderFour, placeholderFive, placeholderSix){
         popUpDOM.style.cssText +=("transform:scale(1);opacity:1;");

          
        if(currentPage == 1){   
            placeholderOne.style.display ="grid";
            placeholderTwo.style.display ="none";
            placeholderThree.style.display ="none";
            placeholderFour.style.display ="none";

        }
        if(currentPage == 2){  
            placeholderOne.style.display ="grid";
            placeholderTwo.style.display ="none";
            placeholderThree.style.display ="none";
            placeholderFour.style.display ="none";
            placeholderFive.style.display ="none";
            placeholderSix.style.display ="none";
        }
        
        console.log(currentPage);
             
    }

    // adds an event to each of my buttons and then calls my functions to do there magic
    galaxyNav.addEventListener('click', function(){
       switchPage(galaxyButton);
       addSelected(galaxyNav, aboutMeNav, faqNav, seaShellNav, metalNav, crystalNav, homeNav);
       setTimeout(reset, 1300);  
    });
    crystalNav.addEventListener('click', function(){
        switchPage(crystalButton);
        addSelected(crystalNav, galaxyNav, aboutMeNav, faqNav, seaShellNav, metalNav, homeNav); 
        setTimeout(reset, 1300); 
    });
    metalNav.addEventListener('click', function(){
        switchPage(metalButton); 
        addSelected(metalNav, crystalNav, galaxyNav, aboutMeNav, faqNav, seaShellNav, homeNav); 
        setTimeout(reset, 1300);
    });
    seaShellNav.addEventListener('click', function(){
        switchPage(seaShellButton); 
        addSelected(seaShellNav, metalNav, crystalNav, galaxyNav, aboutMeNav, faqNav, homeNav); 
        setTimeout(reset, 1300);
    });
    aboutMeNav.addEventListener('click', function(){
        switchPage(aboutMeButton);
        addSelected(aboutMeNav, seaShellNav, metalNav, crystalNav, galaxyNav, faqNav, homeNav);
        setTimeout(reset, 1300); 
    });
    faqNav.addEventListener('click', function(){
        switchPage(faqButton); 
        addSelected(faqNav, aboutMeNav, seaShellNav, metalNav, crystalNav, galaxyNav, homeNav);
        setTimeout(reset, 1300); 
    });
    homeNav.addEventListener('click', function(){
        switchPage(homeButton);
        addSelected(homeNav, faqNav, aboutMeNav, seaShellNav, metalNav, crystalNav, galaxyNav);  
        setTimeout(reset, 1300);
    });
    homeIconNav.addEventListener('click', function(){
        switchPage(homeButton);
        addSelected(homeNav, faqNav, aboutMeNav, seaShellNav, metalNav, crystalNav, galaxyNav);  
        setTimeout(reset, 1300);
    });
    itemOne.addEventListener('click', function(){
        popUp( contentOne, contentTwo, contentThree, contentFour);
    });
    itemOneBack.addEventListener('click', function(){
        popUp( contentOne, contentTwo, contentThree, contentFour);
    });
    itemTwo.addEventListener('click', function(){
        popUp( contentTwo, contentOne, contentThree, contentFour);
    });
    itemTwoBack.addEventListener('click', function(){
        popUp( contentTwo, contentOne, contentThree, contentFour);
    });
    itemThree.addEventListener('click', function(){
        popUp(contentThree, contentOne, contentTwo, contentFour);
    });
    itemThreeBack.addEventListener('click', function(){
        popUp(contentThree, contentOne, contentTwo, contentFour);
    });
    itemFour.addEventListener('click', function(){
        popUp(contentFour, contentOne, contentTwo, contentThree);
    });
    itemFourBack.addEventListener('click', function(){
        popUp(contentFour, contentOne, contentTwo, contentThree);
    });
    itemFive.addEventListener('click', function(){
        popUp(contentFive, contentSix, contentSeven, contentEight, contentNine, contentTen);
    });
    itemFiveBack.addEventListener('click', function(){
        popUp(contentFive, contentSix, contentSeven, contentEight, contentNine, contentTen );
    });
    itemSix.addEventListener('click', function(){
        popUp(contentSix, contentFive, contentSeven, contentEight, contentNine, contentTen );
    });
    itemSixBack.addEventListener('click', function(){
        popUp(contentSix, contentFive, contentSeven, contentEight, contentNine, contentTen);
        console.log(currentPage);
    });
    itemSeven.addEventListener('click', function(){
        popUp(contentSeven, contentSix, contentFive, contentEight, contentNine, contentTen );
    });
    itemSevenBack.addEventListener('click', function(){
        popUp(contentSeven, contentFive, contentSix, contentEight, contentNine, contentTen);
        console.log(currentPage);
    });
    itemEight.addEventListener('click', function(){
        popUp(contentEight, contentSeven, contentSix, contentFive,  contentNine, contentTen );
    });
    itemEightBack.addEventListener('click', function(){
        popUp(contentEight, contentSeven, contentFive, contentSix,  contentNine, contentTen);
        console.log(currentPage);
    });
    itemNine.addEventListener('click', function(){
        popUp(contentNine, contentEight, contentSeven, contentSix, contentFive,   contentTen );
    });
    itemNineBack.addEventListener('click', function(){
        popUp(contentNine, contentEight, contentSeven, contentFive, contentSix,   contentTen);
        console.log(currentPage);
    });
    itemTen.addEventListener('click', function(){
        popUp(contentTen, contentNine, contentEight, contentSeven, contentSix, contentFive);
    });
    itemTenBack.addEventListener('click', function(){
        popUp(contentTen, contentNine, contentEight, contentSeven, contentFive, contentSix);
        console.log(currentPage);
    });
   
    popUpClose.addEventListener('click', function(){
        popUpDOM.style.cssText +=("transform:scale(0); opacity:0;")
        contentOne.style.display ="none";
        contentTwo.style.display ="none";
        contentThree.style.display ="none";
        contentFour.style.display ="none";
        contentFive.style.display ="none";
        contentSix.style.display ="none";
        contentSeven.style.display ="none";
        contentEight.style.display ="none";
        contentNine.style.display ="none";
        contentTen.style.display ="none";
    });
}