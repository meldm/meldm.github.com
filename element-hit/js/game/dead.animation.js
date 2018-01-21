window.onload = function() {

	var requestframe = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame ||
	    // IE Fallback, you can even fallback to onscroll
	    function (callback) {
		    window.setTimeout(callback, 1000 / 60);
	    };

	$('#animation').ready(function(){
		// $('#animation').on('click tap',function(e){
		// 	// new point({
		// 	// 	x: e.pageX,
		// 	// 	y: e.pageY
		// 	// });
		// 	new point({
		// 		x: 150,
		// 		y: 300
		// 	});
		// });
		


		// Contexts
		var canvas = $('<canvas/>')[0];
		canvas.height = $('#animation').height();
		canvas.width = $('#animation').width();
		var context = canvas.getContext('2d');
		$('#animation').append(canvas);



		// Timing Variables
		var startTime = new Date().getTime();
		var currentTime = 0;

		// Particles
		var particles = [],
		    points = [];


		var particle = function(coords){
			this.startTime = new Date().getTime();
			this.byTime = (this.startTime/1000) - (startTime/1000);


			this.sides = Math.floor((Math.random() * 6) + 3);
			this.radius = Math.floor((Math.random() * 18) + 8);
			this.lineWidth = (Math.random() * 4) + 2;

			this.startPosition = coords;

			this.direction = {
				x: (Math.floor((Math.random() * 500) + 300)) - 500,
				y: (Math.floor((Math.random() * 500) + 300)) - 500
			};

			this.id = particles.length;
			particles.push(this);
		};

		particle.prototype.draw = function(){
			this.x = this.startPosition.x + (this.direction.x * (currentTime-this.byTime));
			this.y = this.startPosition.y + (this.direction.y * (currentTime-this.byTime));

			if(this.x > canvas.width + 100 || this.x < -100) {
				delete particles[this.id];
			}
			if(this.y > canvas.height + 100 || this.y < -100) {
				delete particles[this.id];
			}

			context.save();

			// Map the first vertice to start with
			var xPos;
			var yPos;

			context.moveTo(this.x,this.y);
			context.beginPath();
			// Loop through the vertices and map the lines
			for (i = 0; i <= this.sides; i++) {
				// Determine the coordinates of the next vertex
				xPos = this.x + this.radius * Math.cos(2 * Math.PI * i / this.sides);
				yPos = this.y + this.radius * Math.sin(2 * Math.PI * i / this.sides);
				// Set line to the next vertex
				context.lineTo(xPos,yPos);
			}
			context.strokeStyle = '#FFFFFF';

			context.lineWidth = this.lineWidth;
			context.lineJoin = 'round';

			context.stroke();
			context.moveTo(0,0);
			context.closePath();
			context.restore();
		}

		var point = function(coords){
			this.position = coords;
			this.radius = 30;
			this.scale = 1;

			this.startTime = new Date().getTime();
			this.byTime = (this.startTime/1000) - (startTime/1000);

			for(i = 0; i < 6; i++){
				new particle(coords);
			}
			points.push(this);
		};

		point.prototype.draw = function(){
			this.scale = this.radius + ((currentTime-this.byTime) * 70);
			context.beginPath();
			context.arc(this.position.x,this.position.y,this.scale,0,2*Math.PI);
			context.fillStyle = 'rgba(0,0,0,'+ (0.25 - ((currentTime-this.byTime) / 2)) +')';
			context.fill();
			context.closePath();
		}

		function frameIt(){
			context.clearRect(0, 0, canvas.width, canvas.height);

			for (var i = 0; i < points.length; i++) {
				if(points[i] != undefined){
					points[i].draw();
					console.log("frameIt1");
				}
			}
			for (var i = 0; i < particles.length; i++) {
				if(particles[i] != undefined){
					particles[i].draw();
					console.log("frameIt2");
				}
			}


		}

		function loop(){
			if (dead == true) {
				console.log("Yes!");
				new point({
					x: deadX,
					y: deadY
				});
				
				dead = false;
			};

			var now = new Date().getTime();
			currentTime = (now - startTime) / 1000;

			frameIt();
			requestframe(loop);
		}
		loop();

	});

	/* ===================================================== 
	* Previous canvas for mouse
	* ================================================== */
	// function passEventLower(e) {
	// 	e.preventDefault();
	// 	e.stopPropagation();
	// 	var $el = $(document.elementFromPoint(e.pageX, e.pageY));
	// 	var c = $el.css('cursor') || 'default';

	// 	if (c == 'auto') c = 'default';

	// 	$(e.target).css('cursor', c);
	// 	$el.trigger(e.type);
	// }

	// $('html *:not(#animation)').on('click', function(e) {
	// 	console.log(this.tagName, e.type);
	// });

	// $('#animation').on('mousedown mouseup click mousemove', function(e) {
	// 	var $animation = $(this);
	// 	$animation.hide();
	// 	passEventLower(e);
	// 	$animation.show();
	// 	return false;
	// });
};