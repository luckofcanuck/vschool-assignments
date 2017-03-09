function printInfo() {
    var name = document.getElementsByName("first-name")[0].value;
    var lastName = document.getElementsByName("last-name")[0].value;
    var age = document.getElementsByName("age")[0].value;
    var destination = document.getElementById("destinations")
    var index = destination.selectedIndex;
    var finalDestination = destination[index].value
	if (document.getElementsByName("male")[0].checked) {
		gender = "Male";
	} else if (document.getElementsByName("female")[0].checked)	{
		gender = "Female";
	} else {
		gender = "Other";
	}
	if (document.getElementsByName("veg")[0].checked == true) {
		restrictions = "Vegetarian";
	} else if (document.getElementsByName("cannibal")[0].checked == true) {
		restrictions = "Human Brains Only";
	} else if (document.getElementsByName("air")[0].checked == true) {
		restrictions = "Air Only";
	} else {
		restrictions = "None";
	}
    	
alert ("Name: " + name + " " + lastName + ". " + "Age: " + age + ". " + "Gender: " + gender + ". " +  "Destination: " + finalDestination + ". " + "Restrictions: " + restrictions + ".");
}
