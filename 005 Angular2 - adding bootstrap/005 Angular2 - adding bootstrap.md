---
title: 005 Angular2 - adding bootstrap

tags: 
- AngularJS
- Angular2
- Gulp
- Bower
- npm
- nodejs
- github
- Visual Studio Code
- JavaScript
- TypeScript

---

###http://robertdunaway.github.io

##[Angular2 code kata list](http://mycodekatas.github.io/angular2.html)
##[All code katas lists](http://mycodekatas.github.io/)

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-angular2/master/katas-Angular2-logo.png" alt="Smiley face" height="200" width="200"> 

# 005 Angular2 - adding bootstrap

## Duration
15 minutes

## Brief
Set up ng2-bootstrap and twitter bootstrap 4.

### For more information 
BING/GOOGLE: “Angular2 ng2-bootstrap”
Read eBook: https://www.ng-book.com/2/


## Instructions
Get tutorial folder or the entire katas-angular2 repo.
Open the `[before/*.sln]` file and execute the kata.
Feel free to execute this kata multiple times because repetition creates motor memory.

## Github
 - Before (start kata with this)
  - https://github.com/robertdunaway/katas-angular2/tree/master/005%20Angular2%20-%20adding%20bootstrap/before
 - After
  - https://github.com/robertdunaway/katas-angular2/tree/master/005%20Angular2%20-%20adding%20bootstrap/after


# Kata

In this kata we will add twitter-bootstrap 4 to our Angular 2 application.  At the time of this kata twitter-bootstrap 4 is in alpha.  
<br>
Also, no blessed version of Angular 2 bootstrap integration has surfaced.  
<br>
Try to implement bootstrap in the Angular 2 application.
<br>

## Review
Here is where you get bootstrap 4.

#### Web link for Bootstrap 4 alpha
http://v4-alpha.getbootstrap.com/

> The css is required but not the JavaScript because we’ll be using
> ng2-bootstrap.


#### ng2-bootstrap
For the JavaScript portion of bootstrap we are using the valor-software.com implementation of bootstrap for Angular 2.  There are other implementations and in fact you can use bootstraps JavaScript implementation of bootstrap.  
<br>
The reason some will prefer an Angular 2 implementation is because they might prefer declarative programming with Angular directives as opposed to imperative programming in the jQuery style.  As far as I know this is personal preference but the “right” way to do it is the Angular way… So I’m told.
<br>
http://valor-software.com/ng2-bootstrap/index-bs4.html
<br>

Install NPM packages
<br>
```

npm install ng2-bootstap --save-dev
npm install bootstrap@4.0.0-alpha.2 --save-dev


```
<br>
Add the required files to out gulp task, libs, to copy to wwwroot.
<br>
```

, 'node_modules/**//bootstrap/dist/css/bootstrap.min.css'
, 'node_modules/**//ng2-bootstrap/bundles/ng2-bootstrap.min.js'


```
<br>
Add references to the index.html file.
<br>
```

<link href="../lib/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" />
<script src="../lib/ng2-bootstrap/bundles/ng2-bootstrap.min.js"></script>


```
<br>
Running the application, we can already see some changes.  You’ll notice the font is different and some spacing has changed.
<br>

The top is before and the bottom is after.

<br>
 <img src="https://raw.githubusercontent.com/robertdunaway/katas-angular2/master/005%20Angular2%20-%20adding%20bootstrap/1.png"> 
<br>

Let’s go ahead and add a couple controls to make sure things work.
<br>

Add a calendar control
<br>

This requires moment.js so we’ll need to add this npm package.
<br>
```

npm install moment --save-dev


```
<br>
Update the `lib` task to copy `moment.js` to `wwwroot`.
<br>
```

, 'node_modules/**//moment/min/moment.min.js'


```
<br>
Add moment.js to type definition.
<br>
```

tsd query moment


```
<br>

> NOTE: If the typings command doesn’t work you might not have it
> installed.  If this is the case then execute the following command and
> try again.

<br>
```

npm install tsd -g


```
<br>
To make the TypeScript transpiler happy add this reference to the top of your ts page.
<br>
```

/// <reference path="../typings/browser/definitions/moment/moment.d.ts" />


```
<br>

> NOTE: ng1-bootstrap depends on moment.js but because moment.js object
> lives window in the browser there is no need to import it.
<br>

Update the system.js config in index.html.
<br>
```

        System.config({
            packages: {
                app: {
                    format: 'register',
                    defaultExtension: 'js'
                }
            },
            map: {
                moment: '../lib/moment/min/moment.min.js'
            }
        });
        System.import('app.js')
              .then(null, console.error.bind(console));


```
<br>
We’ve seen the font change.  Let’s add a couple buttons to the screen.
<br>
```

<button type="button" class="btn btn-primary" >
    Primary button
</button>

<button type="button" class="btn btn-warning">
    Warning button
</button>


```
 <img src="https://raw.githubusercontent.com/robertdunaway/katas-angular2/master/005%20Angular2%20-%20adding%20bootstrap/2.png"> 




##Next
Take a few minutes and imagine more examples. 

<br>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-angular2/master/katas-Angular2-logo.png" alt="Smiley face" height="200" width="200"> 