# NodeJS Application

### Installation
Make sure you have the latest version of nodeJS installed. Then pull down the project with git. Change into the nodejs directory and type `npm install`. After that you should be able to start the development application by running `npm start`.

[You Don't Know JS](https://github.com/getify/You-Dont-Know-JS/blob/master/README.md#you-dont-know-js-book-series)

### Production/Global Dependencies
Production: `npm install --save --save-exact <package>`

Global: `npm install -g <package>`

NOTE: Best practice states to save all dependencies like '1.0.x' so npm will only update patches and not minor or major releases.

[Body-Parser](),
[Cookie-Parser](),
[Debug](),
[Express](https://www.npmjs.com/package/express),
[Morgan](),
[pm2](https://www.npmjs.com/package/pm2),
[Pug (Jade)](),
[Serve-favicon]()

### Developer Dependencies
`npm install --save --save-dev --save-exact <package>`

With '--production' flag or $NODE_ENV=production npm will not install these modules.

NOTE: Best practice states to save all dependencies like '1.0.x' so npm will only update patches and not minor or major releases.

[Autoprefixer](),
[Babel](),
[Browser-Sync](),
[Chai](),
[ESLint](),
[Mocha](https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha),
[Node-Sass](),
[Nodemon](),
[Onchange](),
[Parallelshell](),
[Postcss](),
[Sass](https://www.npmjs.com/package/node-sass),
[Uglify-js]()

### User Authentication with Mongoose
[Password Hashing](http://blog.mongodb.org/post/32866457221/password-authentication-with-mongoose-part-1),
[Account Locking](http://blog.mongodb.org/post/34225138670/password-authentication-with-mongoose-part-2),
[Token Based Sessions](https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens),
[JSON Tokens NodeJS](https://stormpath.com/blog/nodejs-jwt-create-verify)

### Docker Server Setup
###### Ubuntu 16.04
[Initial Setup](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-16-04),
[Node Setup](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04),
[Firewall Setup](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-with-ufw-on-ubuntu-14-04),
[Firewall Quick Refrence](https://www.digitalocean.com/community/tutorials/ufw-essentials-common-firewall-rules-and-commands),
[Docker Best Practices](https://docs.docker.com/engine/userguide/eng-image/dockerfile_best-practices/)

### AWS
[Demystifying s3 Browser Uploads](https://leonid.shevtsov.me/post/demystifying-s3-browser-upload/)
[Examples Using NodeJS AWS Module](http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-examples.html)
[Signed URLS](http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-signed-urls.html)
