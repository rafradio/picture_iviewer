const mainFunc = (picSrc) => {

    let myPic = picSrc;

    let myFunc = function($) {
        viewer = $("#viewer1").iviewer({
            src: myPic,
            angle: "0" ,
        });
    }

    jQuery(myFunc);
}

// export default mainFunc;