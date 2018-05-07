$(document).ready(function(){

	var rottenTomatillos = {
		type: "Class Project",
		description: "Rotten Tomatillos was a web app designed to be a mix between social media and a movie database app, where users" + 
		" would be able to create an account, add friends, search for movies and recommend those movies to those on their friends list. " +
		"I worked on this project on a team of five, and together we built this system within Spring framework, using Java and MySQL on the backend, " +
		"HTML/CSS and Javascript on the front end, and Git and Github for version control. We also followed continuous integration principles, and " +
		"used Jenkins to monitor our builds constantly. Additionally, we hosted the website through AWS.",
		img: "rottentomatillos.jpg"
	}
	var musicEditor = {
		type: "Class Project",
		description: "Music Editor was simple application built within Java that allowed users to read midi files and play the songs outloud, " + 
		"with the visual representation of the sheet music displayed through a user interface that utilizes the Java Swing graphics library. "+ 
		"Users were able to play any songs, provided that there was a midi file present, as well as standard music editor features such as " + 
		"pausing, playing, looping, adding, and removing notes. As this was one of my first major projects, I learnt and applied many design " +
		"patterns that were new to me at the time, such as the MVC and Adaptor pattern.",
		img: "me.jpg"
	}

	var projects = {"Rotten Tomatillos": rottenTomatillos, "Music Editor": musicEditor}

    $(".project2").find(".btn").click(function(){
        $("#cardTitle").html(this.value);
        $("#cardSubtitle").html(projects[this.value].type);
        $("#cardBody").html(projects[this.value].description);
        $("#projectImage").attr("src", projects[this.value].img);
    });
});