const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.4;

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e){
    // reset the opacity
    imgs.forEach(img => (img.style.opacity = 1));

    // Change current image to src of clicked image
    current.src = e.target.src;
    // Add class of fade in
    current.classList.add('fade-in');
    // Remove fade in class
    setTimeout(() => current.classList.remove('fade-in'), 500);

    // Change the opacity
    e.target.style.opacity = opacity;
}
   
