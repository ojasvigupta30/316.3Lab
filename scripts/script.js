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





