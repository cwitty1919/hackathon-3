Hackathon Week 3
================

#Names

Chris Wittenberg

#Part1


## 2a

```
sourcetype="github_events" type="PushEvent" | stats count by actor.login
```

![image](https://www.dropbox.com/s/pkg1m4e5x0djhes/Screenshot%202014-09-15%2019.09.32.png?dl=1)


## 2b

```
sourcetype=hackdata | timechart count by type
```


## 2c

```
sourcetype=hack_events type=PullRequestEvent | stats count as Count by actor.login
```

## 2e

```
sourcetype="github_events" type="PullRequestEvent" | stats count by actor.login
```

![image](https://www.dropbox.com/s/fc9skwzrcg9lv9k/Screenshot%202014-09-15%2018.49.40.png?dl=1)


```
sourcetype=hackdata | timechart count by type
```
