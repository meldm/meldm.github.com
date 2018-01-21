 /* ===================================================== 
 * The Figures
 * ================================================== */
var triangleA = Bodies.polygon(60, 200, 3, 35, { 
		isStatic: true,
		angle: 40,
		collisionFilter: {
			category: target
		},
		render: {
			fillStyle: '#00abff' 
		}
	});

var triangleB = Bodies.polygon(200, 50, 3, 35, {
		isStatic: true,
		collisionFilter: {
			category: target
		},
		render: {
			fillStyle: '#00abff'
		}
	});

var groundButton = Bodies.rectangle(187, 617, 375, 1, { isStatic: true }),
	groundTop = Bodies.rectangle(187, 0, 375, 1, { isStatic: true }),
	groundLeft = Bodies.rectangle(0, 308, 1, 617, { isStatic: true }),
	groundRight = Bodies.rectangle(375, 308, 1, 617, { isStatic: true });

function createFigures() {
	// add of the bodies to the world
	World.add(engine.world, [triangleA, triangleB, groundButton, groundTop, groundLeft, groundRight]);
};