$(document).ready(function() {
	console.log('hello world');
	// When hamburger or 'Collapse <-' buttons are pushed, toggle '.active' class to key divs to create expanded/collapsed sidebar
	$('#sidebarToggle, #collapseToggle').on('click', function() {
		$(
			'.layout__side-bar, .layout__main, .layout__main-container, .menu'
		).toggleClass('active');
	});

	var introCard =
		'<div id="intro-card"><h1 class="display-4 mb-4">Geoffrey Peel</h1><h2 class="h1 text-uppercase">Full Stack Web Developer</h2><div class="social-links__container"><a href="https://www.linkedin.com/in/geoffpeel/" target="_blank"><i class="fab fa-linkedin fa-5x"></i></a><a href="https://github.com/gkpeel" target="_blank"><i class="fab fa-github-square fa-5x"></i></a></div><h2 class="intro-card--muted">Philadelphia, PA - Fishtown</h2><div class="buttons__container"><a href="#" id="intro-button__about">About</a><a href="#" id="intro-button__portfolio">Portfolio</a></div></div>';

	var aboutCard =
		'<div id="about-card"><h2 class="h1 text-uppercase">About</h2><div class="row"><div class="col-sm-8 order-2 order-sm-1"><p class="fw-bold">Hi everyone, I\'m Geoff. A former Project Manager and Inbound Marketing Consultant. I enjoy collaborating with others to make quality products.</p><p>I began coding five years ago and leveraged those skills to become an Email Marketing Coordinator. Typically using WordPress themes, I began developing websites for friends, family, and a few clients. Two years ago I started coding custom WordPress themes as a freelance developer.</p><p>But I wasn\'t done yet!<p><p>As an ongoing learner, I know development is an ever changing landscape, and that I could do more to improve my abilities. I took Python and Java classes at Temple University and in the summer of 2018 I enrolled in a Full Stack Development Boot Camp at the University of Pennsylvania.</p><p>Throughout this course I\'ve had the opportunity to create projects that levarage my frontend skills as I learned the MERN stack. With graduation approaching in January 2019, I\'m excited to pursue a career that leverages my abilities to code outstanding web apps.</p></div><div class="col-sm-4 order-1 order-sm-2"><img class="img-fluid" src="assets/images/portfolio-about.jpg"/></div></div><a class="button--white button--third mt-4 btn btn-lg btn-block mx-auto" href="#">See My Resume</a>';

	$('#main-content').append();
});
