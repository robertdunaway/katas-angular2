---
title: 004 Angular2 - export class

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

# 004 Angular2 - export class

## Duration
5 minutes

## Brief
In this kata we will export a class then consume it.

### For more information 
BING/GOOGLE: “Angular2 export class”

Read eBook: https://www.ng-book.com/2/


## Instructions
Get tutorial folder or the entire katas-angular2 repo.
Open the `[before/*.sln]` file and execute the kata.
Feel free to execute this kata multiple times because repetition creates motor memory.

## Github
 - Before (start kata with this)
  - https://github.com/robertdunaway/katas-angular2/tree/master/003%20Angular2%20-%20ngFor/before
 - After
  - https://github.com/robertdunaway/katas-angular2/tree/master/003%20Angular2%20-%20ngFor/after


# Kata

In a previous kata we iterated over a collection based on the Person class.  
<br>

For this kata, move the Person class into its own file, “`person.class.ts`”, export it, then import it back into the `app.ts` file.  The interface will be the same so you will not need to change the template.
<br>

Go ahead and give it a shot.  If you get stuck, just read on.
<br>

To export the class we supply the key word, “`export`”, in front of the class name.
<br>

```TypeScript

export class Person {


```
<br>

To import the file, add the following line at the top of the `app.ts` file.
<br>

```

import `{ Person }` from `'./person.class'`;


```
<br>

`Person` is the reference we have created and can use in the `HelloWorld` class.
<br>

`‘./person.class’` is a link to the javascript file the `Person` object is exported from.  We don’t reference the “`.js`” of the file.
<br>

You might also note that we did not have to create a `<script>` link to the file in order to load it.
<br>

<img src="https://raw.githubusercontent.com/robertdunaway/katas-angular2/master/004%20Angular2%20-%20export%20class/1.png">


##Next
Take a few minutes and imagine more examples. 

<br>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-angular2/master/katas-Angular2-logo.png" alt="Smiley face" height="200" width="200"> 