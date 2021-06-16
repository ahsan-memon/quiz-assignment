Name: Muhammad Ahsan (10)
CMS ID: 023-16-0010

Github Link: https://github.com/ahsan-memon/quiz-assignment

The quiz-creator app is created by following a flow which is:
	1. Created React UI
	2. Created spring files
	3. Implemented Rest API in spring
	4. Implemented routing capability in react
	5. Getting data from text inputs, checkboxes and radio buttons in react
	6. Travelling the data across UI (such as, transferring a user's input choice from choices page to question page via useContext)
	7. Tested POST request in spring
	8. Updated React by implementing the axiosAPI and setting up the POST request. Now, the POST request from front-end (react) can be sent to back-end (spring)
	9. Created build folder in react, and moved it to static folder of spring. Now, when spring is run, we can access the react app by going to the following link:
		http://localhost:8080/
	
The database is created with the help of PostgreSQL. Three main tables are created: 
	Quiz
	Question
	Choice
	
Other tables are created for OneToMany mapping with the help of axiosAPI.

The data is being sent from front-end to back-end in json format. Here is a sample:
{
  "title": "This is Quiz 01",
  "marks":100,
  "time":60,
  "deadline": "30-05-2021",
  "questions": [
  {
    	"description": "Q1", 
    	"type":  "Single",
    	"marks": 65,
    	"choices": [
	{	"choice":  "C1", 
		"isCorrect": true
	}, 
	{
		"choice":  "C2",
		"isCorrect": false
	}
	]
  },
  {
    	"description": "Q2", 
    	"type":  "Multiple", 
    	"marks": 35, 
    	"choices": [
	{
		"choice":  "C3", 
		"isCorrect": true
	},
	{	
		"choice":  "C4", 
		"isCorrect": true
	},
	{
		"choice":  "C5", 
		"isCorrect": false
	}
	]
  }
  ]
}
	