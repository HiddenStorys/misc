	/** 
	=====================
	MATH HW HELP
	=====================
	**/

	 
	function tTest () {
		var dataName = prompt("What do you want to name this data set?");
		var cMean = prompt("What's the mean of your control data set?");
		var tMean = prompt("What's mean of your test data set?");
		var cSTD = prompt("What's the standard deviation of your control data set?");
		var tSTD = prompt("What's the standard deviation of your test data set?");
		var cNum = prompt("How many data points does your control data set have?");
		var tNum = prompt ("How many data points does your test data set have?");
		cMean = parseFloat(cMean);
		tMean = parseFloat(tMean);
		cSTD = parseFloat(cSTD);
		tSTD = parseFloat(tSTD);
		cNum = parseFloat(cNum);
		tNum = parseFloat(tNum);

		
		if (cMean > tMean) {
			var eMean = cMean-tMean;
		} else {
			var eMean = tMean-cMean;
		}
		var dividedCSTD = cSTD/cNum;
		var dividedTSTD = tSTD/tNum;
		var addedSTD = dividedTSTD + dividedCSTD;
		var rootSTD = Math.sqrt(addedSTD);
		var tValue = eMean/rootSTD; 
		var addedNum = cNum + tNum;
		var p = prompt("What would you like your probability to be?"); 
		p = parseFloat(p);

		var val1 = {};
		val1[1] = 6.31;
		val1[2] = 2.92; 
		val1[3] = 2.35; 
		val1[4] = 2.13; 
		val1[5] = 2.02;
		val1[6] = 1.94; 
		val1[7] = 1.89;
		val1[8] = 1.86;
		val1[9] = 1.83; 
		val1[10] = 1.81; 
		val1[11] = 1.80;
		val1[12] = 1.78; 
		val1[13] = 1.77;
		val1[14] = 1.76;
		val1[15] = 1.75; 
		val1[16] = 1.75;
		val1[17] = 1.74; 
		val1[18] = 1.73; 
		val1[19] = 1.73;
		val1[20] = 1.72; 
		val1[21] = 1.72; 
		val1[22] = 1.72; 
		val1[23] = 1.71; 
		val1[24] = 1.71; 
		val1[25] = 1.71;
		val1[26] = 1.71;
		val1[27] = 1.70; 
		val1[28] = 1.70;
		val1[29] = 1.70; 
		val1[30] = 1.70;
		val1[40] = 1.68; 
		val1[60] = 1.67;
		val1[120] = 1.66;
		val1["infinity"] = 1.65;

		var val2 = {}; 
		val2[1] = 12.71; 
		val2[2] = 4.30; 
		val2[3] = 3.18; 
		val2[4] = 2.78; 
		val2[5] = 2.57; 
		val2[6] = 2.45; 
		val2[7] = 2.37; 
		val2[8] = 2.31;
		val2[9] = 2.26;
		val2[10] = 2.23;
		val2[11] = 2.20;
		val2[12] = 2.18;
		val2[13] = 2.16;
		val2[14] = 2.14;
		val2[15] = 2.13;
		val2[16] = 2.12;
		val2[17] = 2.11;
		val2[18] = 2.10;
		val2[19] = 2.09;
		val2[20] = 2.09;
		val2[21] = 2.08;
		val2[22] = 2.07;
		val2[23] = 2.07;
		val2[24] = 2.06;
		val2[25] = 2.06;
		val2[26] = 2.06;
		val2[27] = 2.05;
		val2[28] = 2.05;
		val2[29] = 2.05;
		val2[30] = 2.04;
		val2[40] = 2.02;
		val2[60] = 2.00;
		val2[120] = 1.98;
		val2["infinity"] = 1.96; 

		var val3 = {};
		val3[1] = 63.66; 
		val3[2] = 9.93;
		val3[3] = 5.84;
		val3[4] = 4.60;
		val3[5] = 4.03;
		val3[6] = 3.71;
		val3[7] = 3.50;
		val3[8] = 3.36;
		val3[9] = 3.25;
		val3[10] = 3.17;
		val3[11] = 3.11;
		val3[12] = 3.06;
		val3[13] = 3.01;
		val3[14] = 2.98;
		val3[15] = 2.95;
		val3[16] = 2.92;
		val3[17] = 2.90;
		val3[18] = 2.88;
		val3[19] = 2.86;
		val3[20] = 2.85;
		val3[21] = 2.83;
		val3[22] = 2.82;
		val3[23] = 2.82;
		val3[24] = 2.80;
		val3[25] = 2.79;
		val3[26] = 2.78;
		val3[27] = 2.77;
		val3[28] = 2.76;
		val3[29] = 2.76;
		val3[30] = 2.75;
		val3[40] = 2.70;
		val3[60] = 2.66;
		val3[120] = 2.62;
		val3["infinity"] = 2.58;

		var val4 = {};
		val4[1] = 636.62;
		val4[2] = 31.60;
		val4[3] = 12.92;
		val4[4] = 8.61;
		val4[5] = 6.87;
		val4[6] = 5.96;
		val4[7] = 5.41;
		val4[8] = 5.04;
		val4[9] = 4.78;
		val4[10] = 4.59;
		val4[11] = 4.44;
		val4[12] = 4.32;
		val4[13] = 4.22;
		val4[14] = 4.14;
		val4[15] = 4.07;
		val4[16] = 4.02;
		val4[17] = 3.97;
		val4[18] = 3.92;
		val4[19] = 3.88;
		val4[20] = 3.85; 
		val4[21] = 3.83;
		val4[22] = 3.79;
		val4[23] = 3.77;
		val4[24] = 3.75;
		val4[25] = 3.73;
		val4[26] = 3.71;
		val4[27] = 3.69;
		val4[28] = 3.67;
		val4[29] = 3.66;
		val4[30] = 3.65;
		val4[40] = 3.55;
		val4[60] = 3.46;
		val4[120] = 3.37;
		val4["infinity"] = 3.29;
		if (p == .1) {
			if (addedNum <= 30) {
				var tComp = val1[addedNum];
			} else if (addedNum > 30 && addedNum <= 40) {
				var tComp = val1[40];
			} else if (addedNum > 40 && addedNum <= 60) {
				var tComp = val1[60];
			} else if (addedNum > 60 && addedNum <= 120) {
				var tComp = val1[120]; 
			} else if (addedNum > 120) {
				var tComp = val1["infinity"];
			} else {
				alert("That is not a number.");
			}
		} else if (p == .05) {
			if (addedNum <= 30) {
				var tComp = val2[addedNum];
			} else if (addedNum > 30 && addedNum <= 40) {
				var tComp = val2[40]; 
			} else if (addedNum > 40 && addedNum <= 60) {
				var tComp = val2[60];
			} else if (addedNum > 60 && addedNum <= 120) {
				var tComp = val2[120];
			} else if (addedNum > 120) {
				var tComp = val2["infinity"];
			} else {
				alert("That is not a number.");
			}
		} else if (p == .01) {
			if (addedNum <= 30) {
				var tComp = val3[addedNum];
			} else if (addedNum > 30 && addedNum <= 40) {
				var tComp = val3[40]; 
			} else if (addedNum > 40 && addedNum <= 60) {
				var tComp = val3[60];
			} else if (addedNum > 60 && addedNum <= 120) {
				var tComp = val3[120];
			} else if (addedNum > 120) {
				var tComp = val3["infinity"];
			} else {
				alert("That is not a number.");
			}
		} else if (p == .001) {
			if (addedNum <= 30) {
				var tComp = val4[addedNum];
			} else if (addedNum > 30 && addedNum <= 40) {
				var tComp = val4[40]; 
			} else if (addedNum > 40 && addedNum <= 60) {
				var tComp = val4[60];
			} else if (addedNum > 60 && addedNum <= 120) {
				var tComp = val4[120];
			} else if (addedNum > 120) {
				var tComp = val4["infinity"];
			} else {
				alert("That is not a number.");
			}
		} else {
			alert("Please input either .1, .05, .01, or .001.");
		}

		if (tValue > tComp) {
			alert("These samples are statistically different.");
			alert("Here's your work.");
			alert("Your data set is named " + dataName + ". Your control mean is " + cMean + ", and your test mean is " + tMean + ". \n Your control standard deviation is " + cSTD + ", and your test standard deviation is " + tSTD + ". \n Your control has " + cNum + " data points, and your test has " + tNum + " of data points.");
			if (cMean > tMean) {
				alert("Copy the below if you have to show your work: \n Subtracted Xs: " + cMean + "-" + tMean + "=" + eMean  + "\n Var(control): " + cSTD + "/" + cNum + "=" + dividedCSTD + "\n Var(test): " + tSTD + "/" + tNum + "=" + dividedTSTD + "\n " + dividedCSTD + "+" + dividedTSTD + "=" + addedSTD + "\n The square root of " + dividedTSTD + " is " + rootSTD + ". \n " + eMean + "/" + rootSTD + "=" + tValue + "\n The tValue is " + tValue + " . The t comparison value is " + tComp + ". These pairs are statistically different.");
			} else if (cMean < tMean) {
				alert("Copy the below if you have to show your work: \n Subtracted Xs: " + tMean + "-" + cMean + "=" + eMean  + "\n Var(control): " + cSTD + "/" + cNum + "=" + dividedCSTD + "\n Var(test): " + tSTD + "/" + tNum + "=" + dividedTSTD + "\n " + dividedCSTD + "+" + dividedTSTD + "=" + addedSTD + "\n The square root of " + dividedTSTD + " is " + rootSTD + ". \n " + eMean + "/" + rootSTD + "=" + tValue + "\n The tValue is " + tValue + " . The t comparison value is " + tComp + ". These pairs are statistically different.");
			}
		} else if (tValue < tComp) {
			alert("These samples are statistically the same.");
			alert("Here's your work.");
			alert("Your data set is named " + dataName + ". Your control mean is " + cMean + ", and your test mean is " + tMean + ". \n Your control standard deviation is " + cSTD + ", and your test standard deviation is " + tSTD + ". \n Your control has " + cNum + " data points, and your test has " + tNum + " of data points.");
			if (cMean > tMean) {
				alert("Copy the below if you have to show your work: \n Subtracted Xs: " + cMean + "-" + tMean + "=" + eMean  + "\n Var(control): " + cSTD + "/" + cNum + "=" + dividedCSTD + "\n Var(test): " + tSTD + "/" + tNum + "=" + dividedTSTD + "\n " + dividedCSTD + "+" + dividedTSTD + "=" + addedSTD + "\n The square root of " + dividedTSTD + " is " + rootSTD + ". \n " + eMean + "/" + rootSTD + "=" + tValue + "\n The tValue is " + tValue + " . The t comparison value is " + tComp + ". These pairs are statistically the same.");
			} else if (cMean < tMean) {
				alert("Copy the below if you have to show your work: \n Subtracted Xs: " + tMean + "-" + cMean + "=" + eMean  + "\n Var(control): " + cSTD + "/" + cNum + "=" + dividedCSTD + "\n Var(test): " + tSTD + "/" + tNum + "=" + dividedTSTD + "\n " + dividedCSTD + "+" + dividedTSTD + "=" + addedSTD + "\n The square root of " + dividedTSTD + " is " + rootSTD + ". \n " + eMean + "/" + rootSTD + "=" + tValue + "\n The tValue is " + tValue + " . The t comparison value is " + tComp + ". These pairs are statistically the same.");
			}
		} else if (tValue == tComp) {
			alert("Your tValue is equal to your tComp. I do not know what this means, sorry.");
			alert("Here's your work.");
			alert("Your data set is named " + dataName + ". Your control mean is " + cMean + ", and your test mean is " + tMean + ". \n Your control standard deviation is " + cSTD + ", and your test standard deviation is " + tSTD + ". \n Your control has " + cNum + " data points, and your test has " + tNum + " of data points.");
			if (cMean > tMean) {
				alert("Copy the below if you have to show your work: \n Subtracted Xs: " + cMean + "-" + tMean + "=" + eMean  + "\n Var(control): " + cSTD + "/" + cNum + "=" + dividedCSTD + "\n Var(test): " + tSTD + "/" + tNum + "=" + dividedTSTD + "\n " + dividedCSTD + "+" + dividedTSTD + "=" + addedSTD + "\n The square root of " + dividedTSTD + " is " + rootSTD + ". \n " + eMean + "/" + rootSTD + "=" + tValue + "\n The tValue is " + tValue + " . The t comparison value is " + tComp + ". I do not know.");
			} else if (cMean < tMean) {
				alert("Copy the below if you have to show your work: \n Subtracted Xs: " + tMean + "-" + cMean + "=" + eMean  + "\n Var(control): " + cSTD + "/" + cNum + "=" + dividedCSTD + "\n Var(test): " + tSTD + "/" + tNum + "=" + dividedTSTD + "\n " + dividedCSTD + "+" + dividedTSTD + "=" + addedSTD + "\n The square root of " + dividedTSTD + " is " + rootSTD + ". \n " + eMean + "/" + rootSTD + "=" + tValue + "\n The tValue is " + tValue + " . The t comparison value is " + tComp + ". I do not know.");
			}
		} else {
			alert("Your sample is not real.");
		}
	}