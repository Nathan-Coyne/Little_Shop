
window.onload = function() {
    controller.init();
};
var UIController = (function(){
    //store DOM's into two objects.
    var navDOMstrings = {
        navMain:'.nav',
        galaxyNav: '.nav__hover-galaxy',
        crystalNav:'.nav__hover-crystal',
        metalNav: '.nav__hover-metal',
        seaShellNav: '.nav__hover-sea-shell',
        faqNav:'.nav__FAQ',
        homeNav:'.nav__home',
        aboutMeNav:'.nav__about-me',
        homeIconNav: '.nav__key_logo'
        
    }

    var pageDOMstrings = {
        galaxyPage: '.galaxy_store',
        crystalPage:'.crystal_store',
        metalPage: '.metal_store',
        seaShellPage: '.seashell_store',
        faqPage:'.FAQ',
        homePage:'.home',
        aboutMePage:'.aboutMe'
    }

    return{
        // checks what pages need moving into focus and what pages need to be out of focus.
        pageTransition:function(page, oldPage){
            //take the value of current page before anything happens so it previousPage
            document.querySelector(page).style.cssText +=('left:50%; transform: translateX(-50%); opacity:1; transition:transform 1s, left 1s;');
        
            if (oldPage == pageDOMstrings.galaxyPage) {
                document.querySelector(pageDOMstrings.galaxyPage).style.cssText += ('left:-100%; transform:translate(0%);');     
            }
            else if (oldPage == pageDOMstrings.crystalPage) {
                document.querySelector(pageDOMstrings.crystalPage).style.cssText += ('left:-100%; transform:translate(0%);');    
            }
            else if  (oldPage == pageDOMstrings.metalPage) {
                document.querySelector(pageDOMstrings.metalPage).style.cssText += ('left:-100%; transform:translate(0%);');
            }
            else if  (oldPage == pageDOMstrings.seaShellPage) {
                document.querySelector(pageDOMstrings.seaShellPage).style.cssText += ('left:-100%; transform:translate(0%);');
            }
            if  (oldPage == pageDOMstrings.aboutMePage) {
                document.querySelector(pageDOMstrings.aboutMePage).style.cssText += ('left:-100%; transform:translate(0%);');
            }
            else if  (oldPage == pageDOMstrings.faqPage) {
                document.querySelector(pageDOMstrings.faqPage).style.cssText += ('left:-100%; transform:translate(0%);');
            }
            else if  (oldPage == pageDOMstrings.homePage) {
                document.querySelector(pageDOMstrings.homePage).style.cssText += ('left:-100%; transform:translate(0%);');
            }
            if(oldPage == page){
                document.querySelector(page).style.cssText +=('left:50%; transform: translateX(-50%); opacity:1; transition:transform 1s, left 1s;');    
            }
            
        },
        // once the page is out of focus this function resets the page to it original position
        reset:function(cP){

            if (cP !== pageDOMstrings.galaxyPage) {
                document.querySelector(pageDOMstrings.galaxyPage).style.cssText += ('left:100%; transform:translate(0%); opacity:0;transition:none;');     
            }
            if (cP !== pageDOMstrings.crystalPage) {
                document.querySelector(pageDOMstrings.crystalPage).style.cssText += ('left:100%; transform:translate(0%); opacity:0; transition:none;');   
             } 
            if (cP !== pageDOMstrings.metalPage)  {
                document.querySelector(pageDOMstrings.metalPage).style.cssText += ('left:100%; transform:translate(0%); opacity:0;transition:none;');     
            }
            if (cP !== pageDOMstrings.seaShellPage) {
                document.querySelector(pageDOMstrings.seaShellPage).style.cssText += ('left:100%; transform:translate(0%); opacity:0;transition:none;');     
            }  
            if (cP !== pageDOMstrings.aboutMePage) {
                document.querySelector(pageDOMstrings.aboutMePage).style.cssText += ('left:100%; transform:translate(0%); opacity:0;transition:none;');     
            } 
            if (cP !== pageDOMstrings.faqPage) {
                document.querySelector(pageDOMstrings.faqPage).style.cssText += ('left:100%; transform:translate(0%); opacity:0;transition:none;');     
            }
            if (cP !== pageDOMstrings.homePage) {
                document.querySelector(pageDOMstrings.homePage).style.cssText += ('left:100%; transform:translate(0%); opacity:0;transition:none;');     
            }
        },
        // this function adds selected class
        addSelected:function (navButton, oldNavButton){
            document.querySelector(navButton).classList.add("selected");
            document.querySelector(oldNavButton).classList.remove("selected");
            oldNavButton = navButton;

        },

        getNavDOMstrings:function(){
            return navDOMstrings; 
        },
        getPageDOMstrings:function(){
            return pageDOMstrings; 
        }
        

    };

})();
var popUpController = (function(){
    var popUpDOMstrings = {
        contentOne:'.popUp-1__%placeholder%__content', 
        contentTwo:'.popUp-2__%placeholder%__content',
        contentThree:'.popUp-3__%placeholder%__content',
        contentFour:'.popUp-4__%placeholder%__content',
        contentFive:'.popUp-5__%placeholder%__content',
        contentSix:'.popUp-6__%placeholder%__content',
        contentSeven:'.popUp-7__%placeholder%__content', 
        }
    var popUpAllStrings = {
        popUpDOM: '.popUp',
        popUpClose:'.remove-popUp'
    }
    return{
        //decide what it needs changing too

        //change page
        popUpTransition:function(page, currentItem){
            var buttonArr = [popUpDOMstrings.contentOne, popUpDOMstrings.contentTwo, popUpDOMstrings.contentThree, popUpDOMstrings.contentFour, popUpDOMstrings.contentFive, popUpDOMstrings.contentSix, popUpDOMstrings.contentSeven];
            var i = 0;
            while(i < 7){
            buttonArr[i] = buttonArr[i].replace('%placeholder%' || 'crystal' || 'metal' || 'seaShell', page) 
            i++;
            }
            document.querySelector(popUpAllStrings.popUpDOM).style.cssText +=("transform:scale(1);opacity:1;");  
            document.querySelector(buttonArr[currentItem]).style.display ="grid";
                             
        },
        popUpClose: function(currentStore, currentItem){
            i = 0;
            while(i < 7){
            i++;
            console.log(currentItem);
            document.querySelector('.popUp-'+i+'__'+currentStore+'__content').style.display ="none";
            document.querySelector('.popUp').style.cssText +=("transform:scale(0); opacity:0;");
            }
        },
        popUpDOMstrings:function(){
            return popUpDOMstrings; 
        },
        getPopUpAllstrings:function(){
            return popUpAllStrings; 
        }
    }
   
})();
var controller = (function(UICtrl, PopCtrl){
    var setupEventListeners = function(){
        /* variables to figure out what navigation has been pressed and stores the last one to be pressed. It also stores the page 
           and the last page that was in focus */
    var navDOM = UICtrl.getNavDOMstrings();
    var pageDOM = UICtrl.getPageDOMstrings();
    var popUpButton = PopCtrl.getPopUpAllstrings();
    var currentPageDOM = pageDOM.homePage;
    var currentNavDOM = navDOM.homeNav;
    var oldNavDOM;
    var oldPageDOM;
    var store = document.getElementsByClassName("store");
    var currentStore;
    var currentItem;
        
        document.querySelector(navDOM.navMain).addEventListener('click', function(){
            oldNavDOM = currentNavDOM
            oldPageDOM = currentPageDOM
            console.log ("it works")
            currentNav = event.target;
            if (currentNav.matches(navDOM.galaxyNav)){
                currentPageDOM = pageDOM.galaxyPage;
                currentNavDOM = navDOM.galaxyNav;
                page = 1;
                currentStore = 'galaxy'
            }
            else if (currentNav.matches(navDOM.crystalNav)){
                currentPageDOM = pageDOM.crystalPage;
                currentNavDOM = navDOM.crystalNav;
                page = 2;
                currentStore = 'crystal'
            }
            else if (currentNav.matches(navDOM.metalNav)){
                currentPageDOM = pageDOM.metalPage;
                currentNavDOM = navDOM.metalNav;
                page = 3;
                currentStore = 'metal'
            }
            else if (currentNav.matches(navDOM.seaShellNav)){
                currentPageDOM = pageDOM.seaShellPage;
                currentNavDOM = navDOM.seaShellNav;
                page = 4;
                currentStore = 'sea-shell'
            }
            else if (currentNav.matches(navDOM.aboutMeNav)){
                currentPageDOM = pageDOM.aboutMePage;
                currentNavDOM = navDOM.aboutMeNav;
                page = 5;
            }
            else if (currentNav.matches(navDOM.faqNav)){
                currentPageDOM = pageDOM.faqPage;
                currentNavDOM = navDOM.faqNav;
                page = 6;
            }
            else if (currentNav.matches(navDOM.homeNav)){
                currentPageDOM = pageDOM.homePage;
                currentNavDOM = navDOM.homeNav;
                page = 0;
            }
                UICtrl.pageTransition(currentPageDOM, oldPageDOM);
                setTimeout(function(){
                    UICtrl.reset(currentPageDOM);
                }, 1300);
                UICtrl.addSelected(currentNavDOM, oldNavDOM); 
        
               if (page == 1 || page == 2 || page == 3 || page == 4 ){
                store[page - 1].addEventListener("click", function(){       
                    currentButton = event.target
                    if (currentButton.matches(".card__back-1")){
                        currentItem = 0;
                        PopCtrl.popUpTransition(currentStore, currentItem);
                        console.log(true);
                    }
                    if (currentButton.matches(".card__back-2")){
                        currentItem = 1;
                        PopCtrl.popUpTransition(currentStore, currentItem);
                    }
                    if (currentButton.matches(".card__back-3")){
                        currentItem = 2;
                        PopCtrl.popUpTransition(currentStore, currentItem);
                    }
                    if (currentButton.matches(".card__back-4")){
                        currentItem = 3;
                        PopCtrl.popUpTransition(currentStore, currentItem);
                    }
                    if (currentButton.matches(".card__back-5")){
                        currentItem = 4;
                        PopCtrl.popUpTransition(currentStore, currentItem);   
                    }
                    if (currentButton.matches(".card__back-6")){
                        currentItem = 5;
                        PopCtrl.popUpTransition(currentStore, currentItem);
                        }
                    if (currentButton.matches(".card__back-7")){
                        currentItem = 6;
                        PopCtrl.popUpTransition(currentStore, currentItem);
                    } 
                   // adds an event to each of my buttons and then calls my functions to do there magic 
                });
                document.querySelector(popUpButton.popUpClose).addEventListener('click', function(){
                    PopCtrl.popUpClose(currentStore, currentItem)
                });
                console.log(currentStore);
            }                    
        });
                  
    }  
    return {
        init:function(){
            console.log('application has started.');
            setupEventListeners();
        },

    };
})(UIController, popUpController);


