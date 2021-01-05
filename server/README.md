
- npm init
- yes or answer the questions

**Server packages we need to install:**

- npm install express body-parser mysql
- npm install nodemon // - it reruns the server every time we make some chages.
- npm install cors

Add in package.json file:    
"start": "node index.js",  
"devStart": "nodemon inde.js".  

Final: 
  "scripts": {  
    "start": "node index.js",  
    "devStart": "nodemon inde.js",  
    "test": "echo \"Error: no test specified\" && exit 1"  
  },  

**SQL**

1. Install SQL on your computer
2. Install program called "MySQL Workbrench"

**Problem with auth in mySQL**  
Connecting ot mySQL we got a problem with password and auth  
The solution is  
Execute the following query in MYSQL Workbench  

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'

Where root as your user localhost as your URL and password as your password

Then run this query to refresh privileges:

flush privileges;

Try connecting using node after you do so.

If that doesn't work, try it without @'localhost' part.
 https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server 