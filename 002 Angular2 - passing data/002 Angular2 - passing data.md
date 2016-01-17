---
title: 002 Angular2 - passing data

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

# 002 Angular2 - passing data

## Duration
5 minutes

## Brief
We have a bootstrapped Angular application.  Now we want to pass values into the HelloWorld constructor and display it instead of “Hello World”.

### For more information 
BING/GOOGLE: “Angular2 ”

Read eBook: https://www.ng-book.com/2/

## Instructions
Get tutorial folder or the entire katas-angular2 repo.
Open the `[before/*.sln]` file and execute the kata.
Feel free to execute this kata multiple times because repetition creates motor memory.

## Github
 - Before (start kata with this)
  - https://github.com/robertdunaway/katas-angular2/tree/master/002%20Angular2%20-%20passing%20data/before
 - After
  - https://github.com/robertdunaway/katas-angular2/tree/master/002%20Angular2%20-%20passing%20data/after


# Kata

Add multiple properties (FName, LName, Age) to the HelloWorld class and set their values.  Output these values through the template of our app component.
<br>
Your class might look something like this.
<br>
```TypeScript
class HelloWorld {
    FName: string = 'John';
    LName: string = 'Doe';
    Age: number = 25;
}

```
<br>
Your template might look something like this.
<br>
```TypeScript
@Component({
    selector: 'hello-world',
    template: `
    <div>
        Hello {{FName}} {{LName}} age {{Age}}
    </div>
`
})

```
<br>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-angular2/master/002%20Angular2%20-%20passing%20data/1.png"> 



##Next
Take a few minutes and imagine more examples. 

<br>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-angular2/master/katas-Angular2-logo.png" alt="Smiley face" height="200" width="200"> 