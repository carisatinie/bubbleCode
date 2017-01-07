$(document).ready(function() {
	$('#home').show();
	$('#instructions1').hide();
	$('#instructions2').hide();
	$('#instructions3').hide();
	$('#selectTopics').hide();
	$('#topicChosen').hide();
	$('#teachCode').hide();
	$('#contact').hide();
});

function homepage()
{
	document.getElementById("home").style.display = "";
	document.getElementById("instructions").style.display = "none";
	document.getElementById("selectTopics").style.display = "none";
	document.getElementById("topicChosen").style.display = "none";
	document.getElementById("teachCode").style.display = "none";
	document.getElementById("contact").style.display = "none";
}

function contact()
{
	document.getElementById("contact").style.display = "";
	document.getElementById("home").style.display = "none";
	document.getElementById("instructions").style.display = "none";
	document.getElementById("selectTopics").style.display = "none";
	document.getElementById("topicChosen").style.display = "none";
	document.getElementById("teachCode").style.display = "none";
}

function instructions1()
{
	document.getElementById("instructions").style.display = "";
	document.getElementById("instructions1").style.display = "";
	document.getElementById("home").style.display = "none";
	document.getElementById("instructions2").style.display = "none";
	document.getElementById("instructions3").style.display = "none";
	document.getElementById("selectTopics").style.display = "none";
	document.getElementById("topicChosen").style.display = "none";
	document.getElementById("teachCode").style.display = "none";
	document.getElementById("contact").style.display = "none";
}

function instructions2()
{
	document.getElementById("instructions2").style.display = "";
	document.getElementById("home").style.display = "none";
	document.getElementById("instructions1").style.display = "none";
	document.getElementById("instructions3").style.display = "none";
	document.getElementById("selectTopics").style.display = "none";
	document.getElementById("topicChosen").style.display = "none";
	document.getElementById("teachCode").style.display = "none";
	document.getElementById("contact").style.display = "none";
}

function instructions3()
{
	document.getElementById("instructions3").style.display = "";
	document.getElementById("home").style.display = "none";
	document.getElementById("instructions1").style.display = "none";
	document.getElementById("instructions2").style.display = "none";
	document.getElementById("selectTopics").style.display = "none";
	document.getElementById("topicChosen").style.display = "none";
	document.getElementById("teachCode").style.display = "none";
	document.getElementById("contact").style.display = "none";
}

function selectTopics()
{
	document.getElementById("instructions").style.display = "none";
	document.getElementById("home").style.display = "none";
	document.getElementById("selectTopics").style.display = "";
	document.getElementById("topicChosen").style.display = "";
	document.getElementById("comments").style.display = "none";
	document.getElementById("functions").style.display = "none";
	document.getElementById("variables").style.display = "none";
	document.getElementById("whileLoops").style.display = "none";
	document.getElementById("conditionals").style.display = "none";
	document.getElementById("forLoops").style.display = "none";
	document.getElementById("teachCode").style.display = "none";
	document.getElementById("contact").style.display = "none";
}

function comments()
{
	document.getElementById("instructions").style.display = "none";
	document.getElementById("home").style.display = "none";
	document.getElementById("selectTopics").style.display = "none";
	document.getElementById("comments").style.display = "";
	document.getElementById("functions").style.display = "none";
	document.getElementById("variables").style.display = "none";
	document.getElementById("whileLoops").style.display = "none";
	document.getElementById("conditionals").style.display = "none";
	document.getElementById("forLoops").style.display = "none";
	document.getElementById("teachCode").style.display = "none";
	document.getElementById("contact").style.display = "none";
}

function functions()
{
	document.getElementById("instructions").style.display = "none";
	document.getElementById("home").style.display = "none";
	document.getElementById("selectTopics").style.display = "none";
	document.getElementById("comments").style.display = "none";
	document.getElementById("functions").style.display = "";
	document.getElementById("variables").style.display = "none";
	document.getElementById("whileLoops").style.display = "none";
	document.getElementById("conditionals").style.display = "none";
	document.getElementById("forLoops").style.display = "none";
	document.getElementById("teachCode").style.display = "none";
	document.getElementById("contact").style.display = "none";
}

function variables()
{
	document.getElementById("instructions").style.display = "none";
	document.getElementById("home").style.display = "none";
	document.getElementById("selectTopics").style.display = "none";
	document.getElementById("comments").style.display = "none";
	document.getElementById("functions").style.display = "none";
	document.getElementById("variables").style.display = "";
	document.getElementById("whileLoops").style.display = "none";
	document.getElementById("conditionals").style.display = "none";
	document.getElementById("forLoops").style.display = "none";
	document.getElementById("teachCode").style.display = "none";
	document.getElementById("contact").style.display = "none";
}

function whileLoops()
{
	document.getElementById("instructions").style.display = "none";
	document.getElementById("home").style.display = "none";
	document.getElementById("selectTopics").style.display = "none";
	document.getElementById("comments").style.display = "none";
	document.getElementById("functions").style.display = "none";
	document.getElementById("variables").style.display = "none";
	document.getElementById("whileLoops").style.display = "";
	document.getElementById("conditionals").style.display = "none";
	document.getElementById("forLoops").style.display = "none";
	document.getElementById("teachCode").style.display = "none";
	document.getElementById("contact").style.display = "none";
}

function conditionals()
{
	document.getElementById("instructions").style.display = "none";
	document.getElementById("home").style.display = "none";
	document.getElementById("selectTopics").style.display = "none";
	document.getElementById("comments").style.display = "none";
	document.getElementById("functions").style.display = "none";
	document.getElementById("variables").style.display = "none";
	document.getElementById("whileLoops").style.display = "none";
	document.getElementById("conditionals").style.display = "";
	document.getElementById("forLoops").style.display = "none";
	document.getElementById("teachCode").style.display = "none";
	document.getElementById("contact").style.display = "none";
}

function forLoops()
{
	document.getElementById("instructions").style.display = "none";
	document.getElementById("home").style.display = "none";
	document.getElementById("selectTopics").style.display = "none";
	document.getElementById("comments").style.display = "none";
	document.getElementById("functions").style.display = "none";
	document.getElementById("variables").style.display = "none";
	document.getElementById("whileLoops").style.display = "none";
	document.getElementById("conditionals").style.display = "none";
	document.getElementById("forLoops").style.display = "";
	document.getElementById("teachCode").style.display = "none";
	document.getElementById("contact").style.display = "none";
}

function comments2()
{
	document.getElementById("home").style.display = "none";
	document.getElementById("instructions").style.display = "none";
	document.getElementById("selectTopics").style.display = "none";
	document.getElementById("topicChosen").style.display = "none";
	document.getElementById("teachCode").style.display = "";
	document.getElementById("contact").style.display = "none";
	document.getElementById("commentsTeach").style.display = "";
	document.getElementById("functionsTeach").style.display = "none";
	document.getElementById("variablesTeach").style.display = "none";
	document.getElementById("whileTeach").style.display = "none";
	document.getElementById("conditionalsTeach").style.display = "none";
	document.getElementById("forTeach").style.display = "none";
}

function functions2()
{
	document.getElementById("home").style.display = "none";
	document.getElementById("instructions").style.display = "none";
	document.getElementById("selectTopics").style.display = "none";
	document.getElementById("topicChosen").style.display = "none";
	document.getElementById("teachCode").style.display = "";
	document.getElementById("contact").style.display = "none";
	document.getElementById("commentsTeach").style.display = "none";
	document.getElementById("functionsTeach").style.display = "";
	document.getElementById("variablesTeach").style.display = "none";
	document.getElementById("whileTeach").style.display = "none";
	document.getElementById("conditionalsTeach").style.display = "none";
	document.getElementById("forTeach").style.display = "none";
}

function variables2()
{
	document.getElementById("home").style.display = "none";
	document.getElementById("instructions").style.display = "none";
	document.getElementById("selectTopics").style.display = "none";
	document.getElementById("topicChosen").style.display = "none";
	document.getElementById("teachCode").style.display = "";
	document.getElementById("contact").style.display = "none";
	document.getElementById("commentsTeach").style.display = "none";
	document.getElementById("functionsTeach").style.display = "none";
	document.getElementById("variablesTeach").style.display = "";
	document.getElementById("whileTeach").style.display = "none";
	document.getElementById("conditionalsTeach").style.display = "none";
	document.getElementById("forTeach").style.display = "none";
}

function while2()
{
	document.getElementById("home").style.display = "none";
	document.getElementById("instructions").style.display = "none";
	document.getElementById("selectTopics").style.display = "none";
	document.getElementById("topicChosen").style.display = "none";
	document.getElementById("teachCode").style.display = "";
	document.getElementById("contact").style.display = "none";
	document.getElementById("commentsTeach").style.display = "none";
	document.getElementById("functionsTeach").style.display = "none";
	document.getElementById("variablesTeach").style.display = "none";
	document.getElementById("whileTeach").style.display = "";
	document.getElementById("conditionalsTeach").style.display = "none";
	document.getElementById("forTeach").style.display = "none";
}

function conditionals2()
{
	document.getElementById("home").style.display = "none";
	document.getElementById("instructions").style.display = "none";
	document.getElementById("selectTopics").style.display = "none";
	document.getElementById("topicChosen").style.display = "none";
	document.getElementById("teachCode").style.display = "";
	document.getElementById("contact").style.display = "none";
	document.getElementById("commentsTeach").style.display = "none";
	document.getElementById("functionsTeach").style.display = "none";
	document.getElementById("variablesTeach").style.display = "none";
	document.getElementById("whileTeach").style.display = "none";
	document.getElementById("conditionalsTeach").style.display = "";
	document.getElementById("forTeach").style.display = "none";
}

function for2()
{
	document.getElementById("home").style.display = "none";
	document.getElementById("instructions").style.display = "none";
	document.getElementById("selectTopics").style.display = "none";
	document.getElementById("topicChosen").style.display = "none";
	document.getElementById("teachCode").style.display = "";
	document.getElementById("contact").style.display = "none";
	document.getElementById("commentsTeach").style.display = "none";
	document.getElementById("functionsTeach").style.display = "none";
	document.getElementById("variablesTeach").style.display = "none";
	document.getElementById("whileTeach").style.display = "none";
	document.getElementById("conditionalsTeach").style.display = "none";
	document.getElementById("forTeach").style.display = "";
}

// function comments3()
// {
// 	document.getElementById("commentsPlay").style.display = "";
// 	document.getElementById("playCode").style.display = "";
// 	document.getElementById("home").style.display = "none";
// 	document.getElementById("instructions").style.display = "none";
// 	document.getElementById("selectTopics").style.display = "none";
// 	document.getElementById("topicChosen").style.display = "none";
// 	document.getElementById("teachCode").style.display = "none";
// 	document.getElementById("contact").style.display = "none";
// }

// function functions3()
// {
// 	document.getElementById("commentsPlay").style.display = "none";
// 	document.getElementById("playCode").style.display = "";
// 	document.getElementById("home").style.display = "none";
// 	document.getElementById("instructions").style.display = "none";
// 	document.getElementById("selectTopics").style.display = "none";
// 	document.getElementById("topicChosen").style.display = "none";
// 	document.getElementById("teachCode").style.display = "none";
// 	document.getElementById("contact").style.display = "none";
// }

// function variables3()
// {
// 	document.getElementById("commentsPlay").style.display = "none";
// 	document.getElementById("playCode").style.display = "";
// 	document.getElementById("home").style.display = "none";
// 	document.getElementById("instructions").style.display = "none";
// 	document.getElementById("selectTopics").style.display = "none";
// 	document.getElementById("topicChosen").style.display = "none";
// 	document.getElementById("teachCode").style.display = "none";
// 	document.getElementById("contact").style.display = "none";
// }

// function while3()
// {
// 	document.getElementById("commentsPlay").style.display = "none";
// 	document.getElementById("playCode").style.display = "";
// 	document.getElementById("home").style.display = "none";
// 	document.getElementById("instructions").style.display = "none";
// 	document.getElementById("selectTopics").style.display = "none";
// 	document.getElementById("topicChosen").style.display = "none";
// 	document.getElementById("teachCode").style.display = "none";
// 	document.getElementById("contact").style.display = "none";
// }

// function conditionals3()
// {
// 	document.getElementById("commentsPlay").style.display = "none";
// 	document.getElementById("playCode").style.display = "";
// 	document.getElementById("home").style.display = "none";
// 	document.getElementById("instructions").style.display = "none";
// 	document.getElementById("selectTopics").style.display = "none";
// 	document.getElementById("topicChosen").style.display = "none";
// 	document.getElementById("teachCode").style.display = "none";
// 	document.getElementById("contact").style.display = "none";
// }

// function for3()
// {
// 	document.getElementById("commentsPlay").style.display = "none";
// 	document.getElementById("playCode").style.display = "";
// 	document.getElementById("home").style.display = "none";
// 	document.getElementById("instructions").style.display = "none";
// 	document.getElementById("selectTopics").style.display = "none";
// 	document.getElementById("topicChosen").style.display = "none";
// 	document.getElementById("teachCode").style.display = "none";
// 	document.getElementById("contact").style.display = "none";
// }
