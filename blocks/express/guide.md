# Guide express block
Once plugged the block on the base generated with:
```sh
	yo stack-lego:block express
```
![alt express block](../../images/express-block-split.png)

Then start, express have much functions to do routing, authorization, statics files etc.. this block split all this functions with a command for each one:
### Warning 
with this blocks exits two streams for build one app 
### 1- All on the main files 
 
Just when the generator asking for something like if you wanna create one folder for something answer no allway, this way mean everything will be generated on the app.js file, this is only recommended if you do not know the modules used in this block, then a list of the modules: 
 
 * [express jwt](https://github.com/auth0/node-jsonwebtoken)	
 * [node jwt](https://www.npmjs.com/package/jsonwebtoken)	
 * [cors](https://www.npmjs.com/package/cors)
 * [morgan](https://www.npmjs.com/package/morgan)
 * [multer](https://www.npmjs.com/package/multer)
 * [method override](https://www.npmjs.com/package/method-override)

### 2- Divide and conquer
Just when the generator asking for something like if you wanna create one folder for something answer yes allway , this way the generator got to split the app in separate folders while generate all.

### Setting
This way display all set command that this block have 

```sh
	yo stack-lego:express set
```
![alt set options](../../images/set-options.png)


### Setting url param
Add param method with the name provide for the user in setting folder or the file app.js .

```sh
	yo stack-lego:express set param
```
![alt param set](../../images/param-set.png)


### Setting views
Set one attribute called views in the app object to be used after.

```sh
	yo stack-lego:express set view
```
![alt param set](../../images/view-set.png)


### Setting engine
Set one attribute called engine render in the app object to be used after.

```sh
	yo stack-lego:express set engine
```
![alt write engine](../../images/write-engine.png)
![alt set engine](../../images/set-engine.png)


### Setting statics files
Set the folder where is you statics file according the path provider for the user relative to the setting folder or the main file app.js

```sh
	yo stack-lego:express set static
```
![alt write path](../../images/write-path.png)

![alt statics files ](../../images/statics-files.png)

### Routes 
Generate one route with the method and path providers for the user and one file with the name of the path that contain the class to handler all this thing that route need,in case of user choice not get the setting > route then this will generate in the main file app.js   

```sh
	yo stack-lego:express route <method in uppercase> <path>
```
![alt write route](../../images/write-route.png)
![alt gen route](../../images/gen-route.png)

Too can be used on existing routes, with diferent method
![alt new method](../../images/new-method.png)
 
![alt new route](../../images/new-route.png)

### Routes with authentication

```sh
	yo stack-lego:express route <method in uppercase> <path> Auth
```
Add the `Auth` attribute in the and of command and will generate one route with authenticacion 

![alt auth ](../../images/auth.png)

![alt set auth](../../images/set-jwt.png)

![alt auth index](../../images/auth-index.png)

### Test

![alt post auth](../../images/post-auth.png)

### ¿ How to run this ? 
So easy 

```sh
	gulp
```





