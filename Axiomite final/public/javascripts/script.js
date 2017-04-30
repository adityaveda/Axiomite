
        var canvas = new fabric.Canvas('canvas');

                    // initialize fabric canvas and assign to global windows object for debug
                    canvas.setBackgroundImage('https://c1.staticflickr.com/5/4051/4510967899_293f0dd5ac_z.jpg',
                            canvas.renderAll.bind(canvas), {crossOrigin: 'anonymous'});
                    document.getElementById('file').addEventListener("change", function (e) {
                        var file = e.target.files[0];
                        var reader = new FileReader();
                        
                        console.log("reader   " + reader);
                        reader.onload = function (f) {

                            var data = f.target.result;
                            fabric.Image.fromURL(data, function (img) {
                                var oImg = img.set({left: 215, top: 325, width: 250, height: 200, angle: 0}).scale(0.9);
                                canvas.add(oImg).renderAll();
                                canvas.setActiveObject(oImg);
                            });
                        };
                        reader.readAsDataURL(file);
                    });

                    document.querySelector('.txt').onclick = function (e) {
                        e.preventDefault();
                        canvas.deactivateAll().renderAll();
                        console.log("ncbfnbfgnmfd   " + canvas.toDataURL("image/jpeg", 0.5));
                        document.querySelector('#preview').src = canvas.toDataURL("image/jpeg", 1.0);
                    };

        // test input module
        //
        // document.getElementById('text').addEventListener("change", function (e) {
        //     reader.onload = function (f) {
        //
        //         var data = f.target.result;
        //         fabric.text.fromURL(data, function (text) {
        //             var oText = text.set({left: 70, top: 100, width: 250, height: 200, angle: 0}).scale(0.9);
        //             canvas.add(otext).renderAll();
        //             canvas.setActiveObject(otext);
        //         });
        //     };
        //     reader.readAsDataURL(text);
        // });
        //
        //
        //
        // document.querySelector('.txt').onclick = function (e) {
        //     e.preventDefault();
        //     canvas.deactivateAll().renderAll();
        //     console.log("ncbfnbfgnmfd   " + canvas.toDataURL());
        //     document.querySelector('#preview').src = canvas.toDataURL();
        // };



                    //
                    //
                    // $('#remove').on('click', function () {
                    //     canvas.getActiveObject().remove();
                    // });
                    //
                    // function draw() {
                    //   var ctx = document.getElementById('canvas').getContext('2d');
                    //   ctx.font = "48px serif";
                    //   ctx.fillText("Hello world", 10, 50);
                    // }
