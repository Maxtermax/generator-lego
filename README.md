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

* app.js



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

the idea is you can do you own block and share in this project for expanding the generator so is you wanna contribute feel free to make a pull request :

* [AngularJS] - HTML enhanced for web apps!
* [Ace Editor] - awesome web-based text editor
* [Marked] - a super fast port of Markdown to JavaScript
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]
* [Gulp] - the streaming build system
* [keymaster.js] - awesome keyboard handler lib by [@thomasfuchs]
* [jQuery] - duh


### Development


### Todo's

Write Tests
Github saving overhaul
Code Commenting
Night Mode

License
----

MIT


**Free Software, Hell Yeah!**

[john gruber]:http://daringfireball.net/
[@thomasfuchs]:http://twitter.com/thomasfuchs
[1]:http://daringfireball.net/projects/markdown/
[marked]:https://github.com/chjj/marked
[Ace Editor]:http://ace.ajax.org
[node.js]:http://nodejs.org
[Twitter Bootstrap]:http://twitter.github.com/bootstrap/
[keymaster.js]:https://github.com/madrobby/keymaster
[jQuery]:http://jquery.com
[@tjholowaychuk]:http://twitter.com/tjholowaychuk
[express]:http://expressjs.com
[AngularJS]:http://angularjs.org
[Gulp]:http://gulpjs.com
