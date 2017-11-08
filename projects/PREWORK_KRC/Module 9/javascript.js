		// button 1 = Grow

		document.getElementById("button1").addEventListener("click", function(){

            document.getElementById("box").style.height = "250px";

        });

		// button 2 = Blue

        document.getElementById("button2").addEventListener("click", function(){

        	document.getElementById("box").style.backgroundColor = "Blue";

        });

        // button 3 = Fade

   		document.getElementById("button3").addEventListener("click", function(){

            document.getElementById("box").style.opacity = ".5";

        });

       // Button 4 = Reset

        document.getElementById("button4").addEventListener("click", function(){

            box.reset = location.reload();

        });