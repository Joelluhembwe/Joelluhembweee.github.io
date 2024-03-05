var names = new Array();
names[0] = "joel";
names[1] = "john";
names[2] = "anaelle";
names[3] = "peter";
names[4] = "eric";
names[5] = "joseph";
names[6] = "francois";
names[7] = "jeanne";
names[8] = "guy";
names[9] = "yannick";
for (var i = 0; i < names.length; i++) {
  if (names[i].charAt(0) === "J" || names[i].charAt(0) === "j") {
    console.log("Goodbye " + names[i]);
  } else {
    console.log("Hello " + names[i]);
  }
}
