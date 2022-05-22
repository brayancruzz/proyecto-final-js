window.addEventListener('load', () =>{
    
    var imagenes = [];

    imagenes[0] = 'img/img1.jpg';
    imagenes[1] = 'img/img2.jpg';
    imagenes[2] = 'img/img3.jpg';

    var indexImg = 0

    function cambiar(){
        document.slider.src = imagenes[indexImg];

        if(indexImg < 2){
            indexImg++;
        } else {
            indexImg = 0
        } 
    }

    setInterval(cambiar, 2000)
})