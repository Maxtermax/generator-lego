# generator-lego
This is a concept to build web applications based on the idea that build applications should be like building Lego houses: putting blocks ending with a complete application.

### Advantage
  - Keep sort code
  - Build applications like a human not like machines we are not asyncronus  
  - Coding in ES6  
  - Magic

### Installation
```sh
$ npm install -g yeoman
$ npm install -g nodemon
$ npm install -g generator-lego
```
### Star project 

```sh
$ mkdir myProject && cd myProject && yo lego 
```

this will prepare the environment of development with this files:

![tree](./images/init.png "Logo Title Text 1")

### package.json
![tree](./images/init-package.json.png "Logo Title Text 1")


### Blocks 
this are pieces that fulfill a specific function eg in a web form system is required to handle routing, access token, cookies etc ...

in node js there are several modules to do that kind of thing the most popular is express js so the generator lego works split the each one of the functions of block that put one on other forming a stack.

In this version just are two block:
* express
* mongodb

### Express block
for start follow next command:
```sh
$ yo lego:block express 
```
then that was install all packages and 




License
----

MIT

