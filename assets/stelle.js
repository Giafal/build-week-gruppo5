const starsRating = [...document.querySelectorAll('.star')];

function rating(stars){
    const starActive =
    //const starInactive =
    //const starsLength = starsRating.length;
    let i;
}

stars.map((star) => {
    star.addEventListener('click', (e) => {
        e.target.classList.toggle('active');
    });
});