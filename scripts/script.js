//----------------------------------------------Part 1 - Getting Started----------------------------------------


// Select and cache the <main> element in a variable named mainEl.
let mainEl = document.querySelector(`main`);

// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
mainEl.style.backgroundColor = `var(--main-bg)`

// Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.

mainEl.innerHTML = `<h1>DOM Manipulation</h1>`;

// Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.
mainEl.classList.add(`flex-ctr`);

//console.log(mainEl);



//--------------------------------------------------Part 2 - Creating a Menu Bar-------------------------------------------------


// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
let topMenuEl = document.getElementById(`top-menu`);

// Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = `100%`;

// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = `var(--top-menu-bg)`;

// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add(`flex-around`);

//console.log(topMenuEl);





//------------------------------------------------Part 3: Adding Menu Buttons-------------------------------------------------


// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];


// Iterate over the entire menuLinks array and for each "link" object:
for (let i = 0; i < menuLinks.length; i++) {


    // Create an <a> element.
    let navItems = document.createElement(`a`);

    // On the new element, add an href attribute with its value set to the href property of the "link" object.
    navItems.setAttribute(`href`, menuLinks[i].href);

    // Set the new element's content to the value of the text property of the "link" object.
    navItems.textContent = menuLinks[i].text;

    // console.log(navItems);

    // Append the new element to the topMenuEl element.

    topMenuEl.appendChild(navItems);

}

// console.log(topMenuEl);






//****************************************************Continuation******************************************************


//-----------------------------------------------------Part 3 - Creating Sub-menu--------------------------------------


// Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
let subMenuEl = document.getElementById(`sub-menu`);

// Set the height subMenuEl element to be "100%".
subMenuEl.style.height = `100%`;

// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = `var(--sub-menu-bg)`;


// Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add(`flex-around`);


// console.log(subMenuEl);

// Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = `absolute`;

// Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = `0`;



//------------------------------------------------Part 4: Adding Menu Interaction-------------------------------------------

//Updated MenuLinks data
menuLinks = [
    { text: 'about', href: '/about' },
    {
        text: 'catalog', href: '#', subLinks: [
            { text: 'all', href: '/catalog/all' },
            { text: 'top selling', href: '/catalog/top' },
            { text: 'search', href: '/catalog/search' },
        ]
    },
    {
        text: 'orders', href: '#', subLinks: [
            { text: 'new', href: '/orders/new' },
            { text: 'pending', href: '/orders/pending' },
            { text: 'history', href: '/orders/history' },
        ]
    },
    {
        text: 'account', href: '#', subLinks: [
            { text: 'profile', href: '/account/profile' },
            { text: 'sign out', href: '/account/signout' },
        ]
    },
];



//   Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
let topMenuLinks = document.querySelectorAll(`a`);
//console.log(topMenuLinks); //This is an array


// Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener(`click`, handleClickMenu);


function handleClickMenu(eve) {

    // The first line of code of the event listener function should call the event object's preventDefault() method.
    eve.preventDefault();
    //console.log(eve.target.tagName); //This returns `A`


    // The second line of code of the function should immediately return if the element clicked was not an <a> element.
    if (eve.target.tagName !== `A`) {
        return;
    }


    // Log the content of the <a> to verify the handler is working.
    // console.log(eve.target.textContent);


    // Progress Check - Ensure that clicking ABOUT, CATALOG, etc. logs about, catalog, etc. when a link is clicked. Clicking anywhere other than on a link should do nothing. //Checked


    // Now that we have references to each of these links, and a registered event listener, we will want to add a toggled "active" state to each menu item, showing whether or not it is currently selected:
    // The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
    eve.target.classList.toggle(`active`);

    // The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
    // Hint: Removing a non-existent class from an element does not cause an error!
    for (i = 0; i < topMenuLinks.length; i++) {
        //console.log(topMenuLinks[i]);
        if (topMenuLinks[i] !== eve.target) {
            topMenuLinks[i].classList.remove(`active`);
        }
    }


    // console.log(eve.target);




    //--------------------------------------------Part 5: Adding Submenu Interaction-----------------------------------------


    let clickedLink;

    for (let i = 0; i < menuLinks.length; i++) {

        if (menuLinks[i].text === eve.target.textContent) {
            clickedLink = menuLinks[i];
            // console.log(clickedLink);
            break;

        }

    }

    // Within the same event listener, we want to toggle the submenu between active and non-active states. First, we will set the submenu to show or hide itself depending on the menu state:
    // Within the event listener, if the clicked <a> element does not yet have a class of "active" (it was inactive when clicked):

    // If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.

    if (clickedLink.subLinks && eve.target.classList.contains(`active`)) {
        subMenuEl.style.top = `100%`;
        buildSubMenu(clickedLink.subLinks); // Once you have created your helper function, include it in the event listener within the same logic that shows the submenu, remembering to pass the array of sub-links as an argument. function return
    }

    // Otherwise, set the CSS top property of subMenuEl to 0.
    else {
        subMenuEl.style.top = `0`;

    }

}



// Progress Check - Ensure that clicking CATALOG, ORDERS, etc. shows the submenu bar, and that clicking them again hides it. Clicking ABOUT should not show the submenu bar. //IT IS FINALLY WORKING..!!!!!!!




// The submenu needs to be dynamic based on the clicked link. To facilitate that, we will create a helper function called buildSubmenu that does the following:
function buildSubMenu(subLinks) {

    // Clear the current contents of subMenuEl.
    subMenuEl.innerHTML = ``;


    // Iterate over the subLinks array, passed as an argument, and for each "link" object:
    for (let i = 0; i < subLinks.length; i++) {


        // Create an <a> element.
        let subLinkItems = document.createElement(`a`);

        // Add an href attribute to the <a>, with the value set by the href property of the "link" object.
        subLinkItems.setAttribute(`href`, subLinks[i].href);

        // Set the element's content to the value of the text property of the "link" object.
        subLinkItems.textContent = subLinks[i].text;

        // console.log(subLinkItems);

        // Append the new element to the subMenuEl.
        subMenuEl.appendChild(subLinkItems);

    }

}





// The menu is almost complete! Now, we need to add interactions to the submenu items themselves:
// Attach a delegated 'click' event listener to subMenuEl.
subMenuEl.addEventListener(`click`, clickEventSubMenuLink);

function clickEventSubMenuLink(eve) {


    // The first line of code of the event listener function should call the event object's preventDefault() method.
    eve.preventDefault();

    // console.log(eve.target.tagName); //Returns `A`

    // The second line of code within the function should immediately return if the element clicked was not an <a> element.
    if (eve.target.tagName !== `A`) {
        return;
    }

    // Log the content of the <a> to verify the handler is working.
    // console.log(eve.target);


    // Next, the event listener should set the CSS top property of subMenuEl to 0.
    subMenuEl.style.top = `0`;


    // Remove the active class from each <a> element in topMenuLinks.
    for (let i = 0; i < topMenuLinks.length; i++) {
        topMenuLinks[i].classList.remove(`active`);
    }


    // Update the contents of mainEl, within an <h1>, to the contents of the <a> element clicked within subMenuEl.
    // If the ABOUT link is clicked, an <h1>About</h1> should be displayed.
    mainEl.innerHTML = `<h1>${eve.target.innerHTML}</h1>`;
    mainEl.style.textTransform = `capitalize`; //CApitalize the first letter of the text

}