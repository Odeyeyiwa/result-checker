
					function eng() {

					var a= document.getElementById('score1').value
				
					if(a==''){
						document.getElementById('grade1').value=''
					}
					else if(a<40){
						document.getElementById('grade1').value='F'
					}
					else if(a>40 && a<=45){
						document.getElementById('grade1').value='E'
					}
					else if(a>45 && a<=50){
						document.getElementById('grade1').value='D'
					}
					else if(a>50 && a<=60){
						document.getElementById('grade1').value='C'
					}
					else if(a>60 && a<=69){
						document.getElementById('grade1').value='B'
					}
					else if(a>69 && a<=100){
						document.getElementById('grade1').value='A'
					}
					else{
						alert('Invalid value')
					}
					}


					function math() {

					var b= document.getElementById('score2').value

					if(b==''){
						document.getElementById('grade2').value=''
					}
					else if(b<40){
						document.getElementById('grade2').value='F'
					}
					else if(b>40 && b<=45){
						document.getElementById('grade2').value='E'
					}
					else if(b>45 && b<=50){
						document.getElementById('grade2').value='D'
					}
					else if(b>50 && b<=60){
						document.getElementById('grade2').value='C'
					}
					else if(b>60 && b<=69){
						document.getElementById('grade2').value='B'
					}
					else if(b>69 && b<=100){
						document.getElementById('grade2').value='A'
					}
					else{
						alert('Invalid value')
					}
					}


					function chem() {
				
					var c= document.getElementById('score3').value

					if(c==''){
						document.getElementById('grade3').value=''
					}
					else if(c<40){
						document.getElementById('grade3').value='F'
					}
					else if(c>40 && c<=45){
						document.getElementById('grade3').value='E'
					}
					else if(c>45 && c<=50){
						document.getElementById('grade3').value='D'
					}
					else if(c>50 && c<=60){
						document.getElementById('grade3').value='C'
					}
					else if(c>60 && c<=69){
						document.getElementById('grade3').value='B'
					}
					else if(c>69 && c<=100){
						document.getElementById('grade3').value='A'
					}
					else{
						alert('Invalid value')
					}
					}


					function bio() {

					var d= document.getElementById('score4').value

					if(d==''){
						document.getElementById('grade4').value=''
					}
					else if(d<40){
						document.getElementById('grade4').value='F'
					}
					else if(d>40 && d<=45){
						document.getElementById('grade4').value='E'
					}
					else if(d>45 && d<=50){
						document.getElementById('grade4').value='D'
					}
					else if(d>50 && d<=60){
						document.getElementById('grade4').value='C'
					}
					else if(d>60 && d<=69){
						document.getElementById('grade4').value='B'
					}
					else if(d>69 && d<=100){
						document.getElementById('grade4').value='A'
					}
					else{
						alert('Invalid value')
					}
					}


					function frh() {
						
					var e= document.getElementById('score5').value

					if(e==''){
						document.getElementById('grade5').value=''
					}
					else if(e<40){
						document.getElementById('grade5').value='F'
					}
					else if(e>40 && e<=45){
						document.getElementById('grade5').value='E'
					}
					else if(e>45 && e<=50){
						document.getElementById('grade5').value='D'
					}
					else if(e>50 && e<=60){
						document.getElementById('grade5').value='C'
					}
					else if(e>60 && e<=69){
						document.getElementById('grade5').value='B'
					}
					else if(e>69 && e<=100){
						document.getElementById('grade5').value='A'
					}
					else{
						alert('Invalid value')
					}
					}


					 function tot(ans){
						var a=document.getElementById('score1').value
						var b=document.getElementById('score2').value
						var c=document.getElementById('score3').value
						var d=document.getElementById('score4').value
						var e=document.getElementById('score5').value	

						var t=Number(a)+Number(b)+Number(c)+Number(d)+Number(e)
						document.getElementById('total').innerHTML = t

						var z= t/5
						document.getElementById('average').innerHTML = z

						if (z>=60) {
							document.getElementById('image').src='happy2.png'
							document.getElementById('remark').innerHTML = 'kudos! You have definately made your teachers proud, keep it up'
						} 
						else if (z>=40 && z<=60) {
							document.getElementById('image').src='newer.jpg'
							document.getElementById('remark').innerHTML = 'There is still room for improvement, all you have to do is make more effort!'
						} 
						else{
							document.getElementById('image').src='new.jpg'
							document.getElementById('remark').innerHTML = 'This is quite low, you can do better next time!'}
						}
