# Mongodb guide 

# Mongodb guide 
Once plugged the block on the base generated with:
```sh
	yo stack-lego:block mongodb
```
![alt mongodb block](../../images/mongodb-block.png)

First this know the [uri](http://mongoosejs.com/docs/connections.html) to connect with the next questions, mongodb provide drivers for different platform this block work with [mongoose](http://mongoosejs.com/) one of most popular 

![alt set uri](../../images/set-uri.png)
Then generate this file with the data provided 

![alt mongo connection](../../images/mongo-connect.png)

![alt mongo schema](../../images/mongodb-schemas.png)

### Warning 
 Please don't remove the comments, this block exits two streams for build one app

### 1- All on the main files 
 
Just when the generator asking for something like if you wanna create one folder for something answer no allway, this way mean everything will be generated on the app.js file, this is only recommended if you do not know the driver


### 2- Divide and conquer
Just when the generator asking for something like if you wanna create one folder for something answer yes allway , this way the generator got to split the app in separate folders while generate all.




 


 
















