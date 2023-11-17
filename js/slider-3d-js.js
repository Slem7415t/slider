export function slider3dJs() {
   const galleryContainer = document.querySelector('.gallery-js-container');
   const galleryControlsContainer = document.querySelector('.gallery-js-controls');
   const galleryControls = ['previous', 'next'];
   const galleryItems = document.querySelectorAll('.gallery-js-item');

    class Carousel {

        constructor(container, items, controls) {
            this.carouselContainer = container;
            this.carouselControls = controls;
            this.carouselArray = [...items];
        }

        updateGallery(){
            this.carouselArray.forEach(el => {
                el.classList.remove('gallery-js-item-1');
                el.classList.remove('gallery-js-item-2');
                el.classList.remove('gallery-js-item-3');
                el.classList.remove('gallery-js-item-4');
                el.classList.remove('gallery-js-item-5');
            });

            this.carouselArray.slice(0, 5).forEach((el, i) => {
                el.classList.add(`gallery-js-item-${i+1}`);
            });

        }
    
        setCurrentState(direction){
            if (direction.className == 'gallery-js-controls-previous') {
                this.carouselArray.unshift(this.carouselArray.pop());
            } else {
                this.carouselArray.push(this.carouselArray.shift());
            }
            this.updateGallery();
        }

        setControls() {
            this.carouselControls.forEach(control => {
                galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-js-controls-${control}`;
                document.querySelector(`.gallery-js-controls-${control}`).innerText = `${control}`;
            });
        }

        useControls(){
            const triggers = [...galleryControlsContainer.childNodes];
                triggers.forEach(control => {
                    control.addEventListener('click', e => {
                    e.preventDefault();
                    this.setCurrentState(control);
                });
            });
        }
    
    }

    const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

    exampleCarousel.setControls();
    exampleCarousel.useControls();

}