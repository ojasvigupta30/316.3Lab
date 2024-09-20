//Part 1 - Getting Started

// Select and cache the <main> element in a variable named mainEl.
// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
// Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
// Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.



let mainEl = document.querySelector(`main`);

mainEl.style.backgroundColor = `var(--main-bg)`

mainEl.innerHTML = `<h1>DOM Manipulation</h1>`;

mainEl.classList.add(`flex-ctr`);

console.log(mainEl)



//Part 2 - Creating a Menu Bar

// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
// Set the height of the topMenuEl element to be 100%.
// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
// Add a class of flex-around to topMenuEl.


let topMenuEl = document.getElementById(`top-menu`);

topMenuEl.style.height = `100%`;

topMenuEl.style.backgroundColor = `var(--top-menu-bg)`;

topMenuEl.classList.add(`flex-around`);

console.log(topMenuEl);



//Part 3: Adding Menu Buttons

// Iterate over the entire menuLinks array and for each "link" object:
// Create an <a> element.
// On the new element, add an href attribute with its value set to the href property of the "link" object.
// Set the new element's content to the value of the text property of the "link" object.
// Append the new element to the topMenuEl element.

// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];



for (let i = 0; i < menuLinks.length; i++) {


    let navItems = document.createElement(`a`);


    navItems.textContent = menuLinks[i].text;
    

    navItems.setAttribute(`href`, menuLinks[i].href);

    console.log(navItems);

    topMenuEl.appendChild(navItems);



}



//Add-on - Part 3 - Creating Sub-menu

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



//Part 4: Adding Menu Interaction

var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];


//   Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.

let topMenuLinks = document.querySelectorAll(`a`);

// Attach a delegated 'click' event listener to topMenuEl.

topMenuEl.addEventListener(`click`, () => {handleClickMenu(eve)});

// The first line of code of the event listener function should call the event object's preventDefault() method.
// The second line of code of the function should immediately return if the element clicked was not an <a> element.

function handleClickMenu (eve){

    eve.preventDefault();
   
    if(eve.target.tagName !== `a`){
        return;
    }
    console.log(evt.target.textContent);

    topMenuLinks.forEach(link => link.classList.remove('active'));
  eve.target.classList.add('active');

}


// Log the content of the <a> to verify the handler is working.
// Progress Check - Ensure that clicking ABOUT, CATALOG, etc. logs about, catalog, etc. when a link is clicked. Clicking anywhere other than on a link should do nothing.

// Now that we have references to each of these links, and a registered event listener, we will want to add a toggled "active" state to each menu item, showing whether or not it is currently selected:
// The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
// The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
// Hint: Removing a non-existent class from an element does not cause an error!


topMenuEl.addEventListener(`click`, () => {handleClickMenu(eve)});

function handleClickMenu (eve){

    for(let i=0;i<topMenuLinks.length;i++){
        
        topMenuLinks[i].classList.remove(`active`);
        
    }

    eve.target.classList.add(`active`);

}







