# JS Boilerplate Code

## Supports
- eslint
- Mocha
- Chai
- Recommended folder structure for a JS project

### How to start running
Run these commands:		

Install the required dependencies		

	$ npm install

Install mocha globally for TDD/BDD		

	$ sudo npm install mocha -g 		

Install gulp globally		 	

	$ sudo npm install gulp -g 		

To test the app 		

	$ npm test 		



### Package structure

js_dev_boilerplate		

	/css		

	/html_docs		

	/inputdata --Input CSV files are 	

	/js --Cadet puts their data munging assignments here with  their name appended to file 		

	/outputdata --Students add the generated JSON here with  their name appended to file name 		

	/test --I added few tests here and students added their own 	

		/dataMungingSpec.js  --Tests to check proper Node.js API use 		

		/testJsonStructureSpec.js (Uses totalObjectKeys.js and jsondiff.js of Hobbes) Test to check total objects and key structures against expected JSON 		
		/*.js Added by student 		
		
		/ExpectedJSON -- JSON files expected to be generated