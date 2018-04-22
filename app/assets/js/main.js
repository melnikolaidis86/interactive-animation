//Javascript function to toggle the card flip animation
var cards = document.getElementsByClassName('img-grid--list-item');

// Looping through cards and adding flip effect on click
for(var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('mouseenter', function() {
        this.children[0].style.transform = 'rotateY(180deg)';
        this.children[1].style.transform = 'rotateY(0)';
    });
}  

// Looping through cards and adding flip effect on mouse leave
for(var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('mouseleave', function() {
        this.children[0].style.transform = 'rotateY(0)';
        this.children[1].style.transform = 'rotateY(180deg)';
    });
}