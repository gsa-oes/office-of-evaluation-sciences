console.log('hello');


// $(this).mouseenter(
//   function() {
//     $('.question').show();
//   }).mouseleave(function() {
//       $(".question").hide();
// })
// 
// $('.question-div').hover(function() {
//   $(this).hide()
// })

const flip = () => {
  let rotatingCards = document.getElementsByClassName('.question-div');
  for (let i = 0; i < rotatingCards.length; i++) {
    let rotatingCard = rotatingCards[i];
    let rotatingWrapper = rotatingCard.parentElement;
    let cardWidth = rotatingCard.parentElement.offsetWidth;
    let cardHeight = rotatingCard.children[0].children[0].offsetHeight;
    let cardFront = rotatingCard.getElementsByClassName(classes.front)[0];
    let cardBack = rotatingCard.getElementsByClassName(classes.back)[0];
  }
}

flip();
