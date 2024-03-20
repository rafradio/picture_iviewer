function createData() {
    
    if (Galleria) { 
        var data = [
            { 
                image: 'C:/Users/Abdyushev.R/Documents/web/picture/img/IMG_6418.PNG',
                thumb: 'C:/Users/Abdyushev.R/Documents/web/picture/img/IMG_6418.PNG',
                big: 'C:/Users/Abdyushev.R/Documents/web/picture/img/berezy.jpg',
            },
            { 
                image: "C:/Users/Abdyushev.R/Documents/web/picture/img/repin_krest_hod.jpg",
                thumb: 'C:/Users/Abdyushev.R/Documents/web/picture/img/repin_krest_hod.jpg',
                big: 'C:/Users/Abdyushev.R/Documents/web/picture/img/night.png',
            },
            { 
                image: "C:/Users/Abdyushev.R/Documents/web/picture/img/savr.jpg", 
                thumb: 'C:/Users/Abdyushev.R/Documents/web/picture/img/savr.jpg',
                big: 'C:/Users/Abdyushev.R/Documents/web/picture/img/step.jpg',
            },
        ];
        // $(".galleria").text('Galleria works');
        // Galleria.loadTheme('https://cdnjs.cloudflare.com/ajax/libs/galleria/1.5.7/themes/classic/galleria.classic.min.js');
        Galleria.loadTheme('galleria/themes/classic/galleria.classic.min.js');
        Galleria.run('.galleria', {dataSource: data,});
        Galleria.ready(function(options) {

            let modal = document.querySelectorAll(".myModal");
            let modalImg = document.getElementById("viewer1");
            let span = document.getElementsByClassName("close")[0];
            let findImage = document.querySelectorAll(".galleria-images");
         
            
            

            // 'this' is the gallery instance
            // 'options' is the gallery options
        
            this.bind('image', function(e) {
                // Galleria.log(e.scope._data);
                // console.log(e.imageTarget);
                
                e.imageTarget.style.cursor = "pointer";
                // tabElements[0].style.cursor = "pointer";
                e.imageTarget.addEventListener('click', () => {
                    let picSrc = this._data[e.index].big;
                    if (modalImg.hasChildNodes()) {
                        console.log("", modalImg.firstElementChild.src);
                        modalImg.firstElementChild.src = picSrc;
                    }
                    
                    let mainFunc = (pic) => {
                        let myPic = pic;
                        let myFunc = function pcFunc($) {
                            viewer = $("#viewer1").iviewer({
                                src: myPic,
                                angle: "0" ,
                            });
                        }
                        jQuery(myFunc);
                    }

                    
               

                    modal[0].classList.toggle('modal_vis');
                    // modalImg.classList.toggle('modal-content-vis');

                    mainFunc(picSrc);
                   
                    

                    // tabElements[0].addEventListener('click', () => {
                    //     console.log("hello world from pic 2", modalImg);
                    //     modalImg.style.transform = "rotate(90deg)"; 
                    // });
                    span.onclick = function() { 
                        modal[0].classList.toggle('modal_vis');
                       
                        
                     
               
                        
                        // modalImg.classList.toggle('modal-content-vis');
                    }

                    // Открытие новой страницы
                    // url = "https://www.geeksforgeeks.org" + this._data[e.index].big;
                    // window.open(url, "_blank");
               
                });
                
                
            });
            
        });
        
    }
};

createData();

let findImage = document.querySelectorAll(".galleria-images");
console.log("проверка длины - ", findImage.length);
