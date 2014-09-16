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

## 2c
```
sourcetype=hack_events type=PullRequestEvent | stats count as Count by actor.login
```
![image](2c.png?raw=true)
