const tabItems = document.querySelectorAll('.tab-item');
const tabContentItem = document.querySelectorAll('.tab-content-item');

//Select tab content item
function selectItem(e) {
    removeBorder();
    removeShow();
    //Add border to current tab
    this.classList.add('tab-border');
    //Grab Content Item From DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    //Add Show class
    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContentItem.forEach(item => item.classList.remove('show'));
}

// Listen For tab Click
tabItems.forEach(item => item.addEventListener('click', selectItem));
