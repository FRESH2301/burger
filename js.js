'use scrict';
const spice = document.querySelectorAll('.spice');

spice.forEach(item => {
    item.addEventListener('mouseover', car);
    item.addEventListener('mouseout', removeKoko);
});

function car() {
    this.style.transition = 'transform 0.3s';
    this.style.transform = 'scale(1.15)';
}

function removeKoko() {
    this.style.transition = 'transform 0.3s';
    this.style.transform = 'scale(1)';
    this.style.transform = 'scale(1)';

}