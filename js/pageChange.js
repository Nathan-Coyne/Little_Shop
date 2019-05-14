window.onload = function() {
   
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
    var page = 0;
    var oldPage;

    //store a number to detect what page need to be moved into focus

    var contentOne; 
    var contentTwo;
    var contentThree;
    var contentFour;
    var contentFive;
    var contentSix;
    var contentSeven; 
    var contentEight;
    //stores a list of the card buttons 
    var store = document.getElementsByClassName("store");
    //closes the popup
    var popUpClose = document.querySelector(".remove-popUp");
    //opens the popUp
    var popUpDOM = document.querySelector(".popUp")
    //display the correct content on the page
    

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

        if (oldPage == 1) {
            galaxyButton.style.cssText += ('left:-100%; transform:translate(0%);');     
        }
        else if (oldPage == 2) {
            crystalButton.style.cssText += ('left:-100%; transform:translate(0%);');    
        }
        else if  (oldPage == 3) {
            metalButton.style.cssText += ('left:-100%; transform:translate(0%);');
        }
        else if  (oldPage == 4) {
            seaShellButton.style.cssText += ('left:-100%; transform:translate(0%);');
        }
        else if  (oldPage == 5) {
            aboutMeButton.style.cssText += ('left:-100%; transform:translate(0%);');
        }
        else if  (oldPage == 6) {
            faqButton.style.cssText += ('left:-100%; transform:translate(0%);');
        }
        else if  (oldPage == 0) {
            homeButton.style.cssText += ('left:-100%; transform:translate(0%);');
        }
        if(oldPage == page){
            button.style.cssText +=('left:50%; transform: translateX(-50%); opacity:1; transition:transform 1s, left 1s;');    
        }

    };
    var reset = function(){

        if (page < 2 || page > 2 ) {
            crystalButton.style.cssText += ('left:100%; transform:translate(0%); opacity:0; transition:none;');   
         } 
        if (page < 1 || page > 1) {
            galaxyButton.style.cssText += ('left:100%; transform:translate(0%); opacity:0;transition:none;');     

        }
        if (page < 3 || page > 3)  {
            metalButton.style.cssText += ('left:100%; transform:translate(0%); opacity:0;transition:none;');     

        }
        if (page < 4 || page > 4) {
            seaShellButton.style.cssText += ('left:100%; transform:translate(0%); opacity:0;transition:none;');     

        }  
        if (page < 5 || page > 5) {
            aboutMeButton.style.cssText += ('left:100%; transform:translate(0%); opacity:0;transition:none;');     

        } 
        if (page < 6 || page > 6) {
            faqButton.style.cssText += ('left:100%; transform:translate(0%); opacity:0;transition:none;');     
4
        }
        if (page > 0) {
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
    var popUp = function (page, placeholderOne, placeholderTwo, placeholderThree, placeholderFour, placeholderFive, placeholderSix, placeholderSeven, placeholderEight){
        popUpDOM.style.cssText +=("transform:scale(1);opacity:1;");
        if(page == 1){
        placeholderOne.style.display ="grid";
        placeholderTwo.style.display ="none";
        placeholderThree.style.display ="none";
        placeholderFour.style.display ="none";
        }
        else if (page == 2){
        placeholderOne.style.display ="grid";
        placeholderTwo.style.display ="none";
        placeholderThree.style.display ="none";
        placeholderFour.style.display ="none";
        placeholderFive.style.display ="none";
        placeholderSix.style.display ="none";
        }
        else if (page == 3){
            placeholderOne.style.display ="grid";
            placeholderTwo.style.display ="none";
            placeholderThree.style.display ="none";
            placeholderFour.style.display ="none";
            placeholderFive.style.display ="none";
            placeholderSix.style.display ="none";
            placeholderSeven.style.display ="none";
            placeholderEight.style.display ="none";
        }
        

             
    }

    document.querySelector(".nav").addEventListener("click", function(){
        oldPage = page;
        currentPage = event.target;
        if (currentPage.matches(".nav__hover-galaxy")){
        switchPage(document.querySelector('.galaxy_store'));
        addSelected(galaxyNav, aboutMeNav, faqNav, seaShellNav, metalNav, crystalNav, homeNav);
        setTimeout(reset, 1300);
        page = 1;
        //galaxy page
         contentOne = document.querySelector(".popUp-1__galaxy__content");
         contentTwo = document.querySelector(".popUp-2__galaxy__content");
         contentThree = document.querySelector(".popUp-3__galaxy__content");
         contentFour = document.querySelector(".popUp-4__galaxy__content");   
         //closes all popups
 
         popUpClose.addEventListener('click', function(){
         popUpDOM.style.cssText +=("transform:scale(0); opacity:0;");
         contentOne.style.display ="none";
         contentTwo.style.display ="none";
         contentThree.style.display ="none";
         contentFour.style.display ="none";
         });
        }
        else if (currentPage.matches(".nav__hover-crystal")){
            switchPage(crystalButton);
            addSelected(crystalNav, galaxyNav, aboutMeNav, faqNav, seaShellNav, metalNav, homeNav); 
            setTimeout(reset, 1300);
            page = 2;
    
            //crystal page
            contentOne = document.querySelector(".popUp-1__crystal__content");
            contentTwo = document.querySelector(".popUp-2__crystal__content");
            contentThree = document.querySelector(".popUp-3__crystal__content");
            contentFour = document.querySelector(".popUp-4__crystal__content");
            contentFive = document.querySelector(".popUp-5__crystal__content");
            contentSix = document.querySelector(".popUp-6__crystal__content");
    
            
            // closes all popUps
            popUpClose.addEventListener('click', function(){
                popUpDOM.style.cssText +=("transform:scale(0); opacity:0;");
                contentOne.style.display ="none";
                contentTwo.style.display ="none";
                contentThree.style.display ="none";
                contentFour.style.display ="none";
                contentFive.style.display ="none";
                contentSix.style.display ="none";
            }); 
            

        }
        else if (currentPage.matches(".nav__hover-metal")){
            switchPage(metalButton); 
            addSelected(metalNav, crystalNav, galaxyNav, aboutMeNav, faqNav, seaShellNav, homeNav); 
            setTimeout(reset, 1300);
            page = 3;

            //metal page
            contentOne = document.querySelector(".popUp-1__metal__content");
            contentTwo = document.querySelector(".popUp-2__metal__content");
            contentThree = document.querySelector(".popUp-3__metal__content");
            contentFour = document.querySelector(".popUp-4__metal__content");
            contentFive = document.querySelector(".popUp-5__metal__content");
            contentSix = document.querySelector(".popUp-6__metal__content");
            contentSeven = document.querySelector(".popUp-7__metal__content");

            // closes all popUps
            popUpClose.addEventListener('click', function(){
                popUpDOM.style.cssText +=("transform:scale(0); opacity:0;");
                contentOne.style.display ="none";
                contentTwo.style.display ="none";
                contentThree.style.display ="none";
                contentFour.style.display ="none";
                contentFive.style.display ="none";
                contentSix.style.display ="none";
                contentSeven.style.display ="none";
                contentEight.style.display ="none";
            }); 
        }
        else if (currentPage.matches(".nav__hover-sea-shell")){
            switchPage(seaShellButton); 
            addSelected(seaShellNav, metalNav, crystalNav, galaxyNav, aboutMeNav, faqNav, homeNav); 
            setTimeout(reset, 1300); 
            page = 4;
            // closes all popUps
            popUpClose.addEventListener('click', function(){
                popUpDOM.style.cssText +=("transform:scale(0); opacity:0;");
                contentOne.style.display ="none";
                contentTwo.style.display ="none";
                contentThree.style.display ="none";
                contentFour.style.display ="none";
                contentFive.style.display ="none";
                contentSix.style.display ="none";
            }); 
        }
        else if (currentPage.matches(".nav__about-me")){
            switchPage(aboutMeButton);
            addSelected(aboutMeNav, seaShellNav, metalNav, crystalNav, galaxyNav, faqNav, homeNav);
            setTimeout(reset, 1300); 
            page = 5;
        }
        else if (currentPage.matches(".nav__fAQ")){
            switchPage(faqButton); 
            addSelected(faqNav, aboutMeNav, seaShellNav, metalNav, crystalNav, galaxyNav, homeNav);
            setTimeout(reset, 1300);
            page = 6; 
        }
        else if (currentPage.matches(".nav__home")){
            switchPage(homeButton);
            addSelected(homeNav, faqNav, aboutMeNav, seaShellNav, metalNav, crystalNav, galaxyNav);  
            setTimeout(reset, 1300);
            console.log(homeButton);
            page = 0;
        }
        console.log(oldPage);
        console.log(page);
            // - 1 as arrays start at 0 
            store[page-1].addEventListener("click", function(){       
                currentButton = event.target
                console.log(currentButton);
                if (currentButton.matches(".card__back-1")){
                    popUp(page, contentOne, contentTwo, contentThree, contentFour, contentSix, contentFive);
                }
                if (currentButton.matches(".card__back-2")){
                    popUp(page, contentTwo, contentOne,  contentThree, contentFour, contentSix, contentFive);
                }
                if (currentButton.matches(".card__back-3")){
                    popUp(page, contentThree, contentTwo, contentOne,  contentFour, contentSix, contentFive);
                }
                if (currentButton.matches(".card__back-4")){
                    popUp(page, contentFour, contentThree, contentOne, contentTwo,  contentSix, contentFive);
                }
                if (currentButton.matches(".card__back-5")){
                    popUp(page, contentFive, contentSix, contentOne, contentTwo, contentThree, contentFour);   
                }
                if (currentButton.matches(".card__back-6")){
                    popUp(page, contentSix, contentFive, contentOne, contentTwo, contentThree, contentFour);
                    }
                if (currentButton.matches(".card__back-7")){
                    popUp(page, contentSeven, contentSix, contentFive, contentOne, contentTwo, contentThree, contentFour);
                }
                if (currentButton.matches(".card__back-8")){
                    popUp(page, contentEight, contentSeven, contentSix, contentFive, contentOne, contentTwo, contentThree, contentFour);
                }
            });
    });
    // adds an event to each of my buttons and then calls my functions to do there magic
    homeIconNav.addEventListener('click', function(){
        switchPage(homeButton);
        addSelected(homeNav, faqNav, aboutMeNav, seaShellNav, metalNav, crystalNav, galaxyNav);  
        setTimeout(reset, 1300);
    });


}