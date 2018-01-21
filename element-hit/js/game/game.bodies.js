/* ===================================================== 
 * Setup Matter Engine
 * ================================================== */
var Game = document.getElementById('game');

// module aliases
var Engine = Matter.Engine,
	World = Matter.World,
	Body = Matter.Body,
	Bodies = Matter.Bodies,
	// Common = Matter.Common,
	// Constraint = Matter.Constraint,
	// Composites = Matter.Composites,
	// Contact = Matter.Contact,
	// Detector = Matter.Detector,
	MouseConstraint = Matter.MouseConstraint,
	Events = Matter.Events;

var engine,
	render,
	width,
	height;

function setupMatter() {
	// create an engine
	engine = Engine.create(Game, {
		render: {
			options: {
				width: 375,
				height: 617,
				
				background: '#052332',
				// background: rgba(255, 255, 255, 0),

				// наличие опознавателей на объектах
				showAngleIndicator: false,

				// возможность менять цвета и фоны
				wireframes: false
			}
		}
	});

	// gravity init
	engine.world.gravity.x = 0;
	engine.world.gravity.y = 0;

	// add a mouse controlled constraint
	var mouseConstraint = MouseConstraint.create(engine);
	World.add(engine.world, mouseConstraint);
};

 /* ===================================================== 
 * Event Listener and Handlers
 * ================================================== */
 function addEventListeners() {};

 /* ===================================================== 
 * The Player Class
 * ================================================== */
// create unit
var circle = Bodies.circle(187, 550, 30, {
	// плотность
	density: 0.0005,

	// трение о воздух
	frictionAir: 0.034,

	// отталкивание
	restitution: 1.3,

	// трение
	friction: 0.01,

	slop: 0.5,

	collisionFilter: {
		mask: defaultCategory | target
	},

	// отрисовка
	render: {
		fillStyle: '#00abff',
		sprite: {

		}
	}
});

function createCircle() {
	// add unit to the world
	World.add(engine.world, circle);
};

 /* ===================================================== 
 * The Game Bodies
 * ================================================== */
 /* ===================================================== 
 * The Game
 * ================================================== */
function runMatter() {
	// run the engine
	Engine.run(engine);

	Events.on(engine, 'collisionStart', endGame);
};

function endGame() {
	console.log("position X " + circle.position.x);
	console.log("position Y " + circle.position.y);

	deadX = circle.position.x;
	deadY = circle.position.y;

	dead = true;

	var animation = document.getElementById("animation");
	// animation.className = "animation dimensions";
	// animation.classList.add("dimensions");
	animation.classList.remove("off");
};

 /* ===================================================== 
 * The GUI
 * ================================================== */
function setupGUI() {};

 /* ===================================================== 
 * Utilities
 * ================================================== */
 /* ===================================================== 
 * Kickoff
 * ================================================== */
function init() {
	// Setup the Matter engine and renderer
	setupMatter();

	// Add event listeners
	addEventListeners();

	// Add the necessary Matter bodies to the world
	createFigures();
	createCircle();
	// createGround();

	// GUI 
	setupGUI();

	// Runs the engine and renderer
	runMatter();
};