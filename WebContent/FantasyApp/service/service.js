app.factory('dataService', function(){
	return {
		teams :  [
			{'name':'MI', 'location':'Mumbai', 'owner':'Bambani','captain':'Rohit','players':{
				'batsman':['Rohit', 'Kiron','Dumini','Surya','Lewis'],
				'bowler':['Jaspreet', 'Hardik','Mitchel','Krunal'],
				'wc':'Ishan'
			}},
			{'name':'CSK', 'location':'Chennai', 'owner':'India Cement','captain':'Dhoni','players':{
				'batsman':['Vijay', 'Raina','Rayudu','Watto','Sam'],
				'bowler':['Bhajji', 'Bravo','Jadeja','Lungi','Chahar'],
				'wc':'Dhoni'
			}},
			{'name':'RCB', 'location':'Bangalore', 'owner':'Daruwala','captain':'Kohli','players':{
				'batsman':['Kohli', 'ABD','Sarfaraz','McCullam','De Kock'],
				'bowler':['Chahal', 'Umesh','Sothee','Sundar','Mandeep'],
				'wc':'Parthiv'
			}},
			{'name':'SRH', 'location':'Hyderabad', 'owner':'Nijam','captain':'Kane','players':{
				'batsman':['Kane', 'Dhawan','Manish','Deepak','Yusuf'],
				'bowler':['Shakib', 'Bhuvaneshwar','Rashid','Kaul','Brathwaite'],
				'wc':'Goswami'
			}},
			{'name':'KKR', 'location':'Kolkata', 'owner':'Kiran','captain':'Karthik','players':{
				'batsman':['Shubhman', 'Robin','Rana','Lynn','Russell'],
				'bowler':['Sunil', 'Kuldip','Vinay','Chawla','Curran'],
				'wc':'Karthik'
			}}
		]
	}
});