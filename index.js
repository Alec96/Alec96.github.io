$(document).ready(function(){

	var rottenTomatillos = {
		type: "Class Project",
		description: "This is the Rotten Tomatillos Description",
		img: "rottentomatillos.jpg"
	}
	var musicEditor = {
		type: "Class Project",
		description: "This is the Music Editor Description",
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