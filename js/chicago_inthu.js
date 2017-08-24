
let convert;
let encoding = 'utf8';
convert = function(year1)
{
	if(isNaN(year1))
	{
		throw new Error('Not a number');
	}

// importing required values
const readline = require('readline');
const fs = require('fs');
// Declarations
let theftData = [];
let above = [];
let below = [];
let theft = {};
 let i = 0;

// Years
for (i = 2001; i <= 2016; i = i + 1)
 {
    above[i] = 0;
    below[i] = 0;
}
// Reading local CSV
const rl = readline.createInterface({
    input: fs.createReadStream('./../inputdata/chicago_inthu.csv')
});

// Applying Regex for unwanted values and conditional counting of scenarios for Theft and Assault
rl.on('line', function(line) {
    let result = line.trim().split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    if (result[5] === 'THEFT' && result[6] === 'OVER $500')
    {
        above[result[17]] = above[result[17]] + 1;
    }
     else if (result[5] === 'THEFT' && result[6] === '$500 AND UNDER')
      {
        below[result[17]] = below[result[17]] + 1;
    }
});
// Performing the functional operation on csv data to obtain the expected aggregated result
rl.on('close', function() {
    for (i = 2001; i <= 2016; i = i + 1)
    {
// Aggregating the data of "THEFT OVER $500" & "THEFT $500 AND UNDER"
        theft = {};
        theft.Year = i;
        theft['Theft Over $500'] = above[i];
        theft['Theft $500 And Under'] = below[i];
        theftData.push(theft);
    }
// Conversion of resultant csv data into JSON format
fs.writeFileSync('../outputdata/chicago_inthu.json', JSON.stringify(theftData), encoding);
});
return 'JSON written successfully';
};
module.exports = convert;
