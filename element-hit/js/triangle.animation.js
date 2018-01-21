window.onload = function() {
	var shapes = $("polygon"),
		tl = new TimelineMax({ repeat:4});

	tl.staggerFromTo(shapes, 1, {drawSVG:"100%"}, {drawSVG:"50% 50%"}, 0.1)
		.fromTo(shapes, 0.1, {drawSVG:"0%"}, {drawSVG:"10%", immediateRender:false}, "+=0.1")
		.staggerTo(shapes, 1, {drawSVG:"90% 100%"}, 0.5)
		.to(shapes, 1, {rotation:360, scale:0.5, drawSVG:"100%", stroke:"white", strokeWidth:6, transformOrigin:"50% 50%"})
		.staggerTo(shapes, 0.5, { scale:1.5, opacity:0}, 0.2);
}();