#Names 

Chris Wittenberg		

#Part1

#Part 2

## 2a

 ```
 sourcetype="github_events" type="PullRequestEvent" | stats count by actor.login
 ```

![image](https://www.dropbox.com/s/fc9skwzrcg9lv9k/Screenshot%202014-09-15%2018.49.40.png?dl=1)

 
 ## 2b
 
 ```
 sourcetype=hackdata | timechart count by type
 ```
 ![image](2b.png?raw=true)


## 2d
 
 ```
sourcetype="hackdata" | stats count(eval(type="PullRequestEvent")) as Count by payload.action
 ```
 ![image](2d.png?raw=true)

 ## 2f
 
 ```
sourcetype="hackdata" "repo.name"="CSCI-4830-002-2014/challenge-week-2" type="PullRequestEvent" | timechart count
 ```
 ![image](2f.png?raw=true)
