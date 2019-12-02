/**
 * Header
 * Class that fills in a header element with my navbar to follow DRY
 * Also an illustration that I know some ES6 and modules
 */
class Header {
    
    /**
	 * constructor(el)
	 * Creates the UI header for my portfolio
	 *
	 * @param el - element to be initialized with a navbar
	 * @param enforce - whether or not a non-logged in user should be kicked
	 *
	 */
    constructor (el) {
        el.innerHTML = `<!-- bootstrap navigation bar-->
		<nav class = "navbar navbar-transparent">
		
			<!-- container of elements in the navbar -->
			<div class="container-fluid">
				
				<!-- bold text on the left side -->
				<div class ="navbar-header">
				
					<!-- toggle button that appears on small screens -->
					<button type="button" class="navbar-toggle navbar-default" data-toggle="collapse" data-target="#myNavbar">
						<span class="icon-bar navbar-inverse"></span>
						<span class="icon-bar navbar-inverse"></span>
						<span class="icon-bar navbar-inverse"></span>
					</button>
				
					<h1> Derek Jow </h1>
					<p><a href="mailto:derek.jow@gmail.com" style="color:inherit">derek.jow@gmail.com</a></p>
					<p>650-293-7378</p>
				</div>
				
				<!-- Collapse if screen is too small -->
				<div class = "collapse navbar-collapse" id="myNavbar">
				
					<!-- elements on the right side of the bar -->
					<ul class = "nav navbar-nav navbar-right" id = "navElements">
						<li> <a href="index.html"><br><h3>Home</h3></a></li>
						
						<li class = "dropdown">
							<a class = "dropdown-toggle" data-toggle="dropdown" href="#"><br><h3>About</h3></a>
							<ul class = "dropdown-menu navbar-inverse">
								<li class = "myDropdown"><a href="about.html">Biography</a></li>
								<li class = "myDropdown"><a href="education.html">Education</a></li>
								<li class = "myDropdown"><a href="work.html">Work Experience</a></li>
								<li class = "myDropdown"><a href="volunteer.html">Volunteer Experience</a></li>
								<li class = "myDropdown"><a href="skills.html">Skills</a></li>
							</ul>
						</li>
						
						<li> <a href="activities.html"><br><h3>Activities</h3></a></li>
						<li> <a href="honors.html"><br><h3>Honors</h3></a></li>
						<li> <a href="contact.html"><br><h3>Contact</h3></a></li>
					</ul>
				</div>
				
			</div>
		</nav>`;
    }
    
}

export {Header}