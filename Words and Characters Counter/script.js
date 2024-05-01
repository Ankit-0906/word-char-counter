let textbox=document.getElementById('textbox');
        textbox.addEventListener('input',function(){
            var text= this.value;
            let char= text.length;
            document.getElementById('char').innerHTML = char;

            //use to remove begining and ending space
            text=text.trim();
            // use to make array that create element after each space
            let words=text.split(" ");

            // use to remove the space between the text
            let cleanList = words.filter(function(elm){
                    return elm != "";
            });
            console.log(cleanList);
            document.getElementById('word').innerHTML =  cleanList.length;


        });