const legend = new Array();
legend["fat"] = new Array();
legend["muscle"] = new Array();

legend["fat"]["FW"] = "Global fat";
legend["fat"]["Fr"] = "Arm (right)";
legend["fat"]["Fl"] = "Arm (left)";
legend["fat"]["FR"] = "Leg (right)";
legend["fat"]["FL"] = "Leg (left)";
legend["fat"]["FT"] = "Chest";

legend["muscle"]["mW"] = "Global muscle";
legend["muscle"]["mr"] = "Arm (right)";
legend["muscle"]["ml"] = "Arm (left)";
legend["muscle"]["mR"] = "Leg (right)";
legend["muscle"]["mL"] = "Leg (left)";
legend["muscle"]["mT"] = "Chest";

console.log(legend[0]); // does not work
