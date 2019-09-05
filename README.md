# cache-data
For Temp data storage use

##APIs:
#####Post to '/putData': 
With JSON data in body, server would response an ID. 

#####Post to '/putDataAPI': 
With JSON data in body: <br>
    { url": "YourURL","method":"GET"} <br>
Server Would response the ID

#####Get to '/getData': 
With url: "http://xxx.xx/getData?yourId"<br>
Server would response the data in JSON format