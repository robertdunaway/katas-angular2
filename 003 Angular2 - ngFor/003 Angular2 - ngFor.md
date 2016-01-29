---
title: 003 Angular2 - ngFor

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

# 003 Angular2 - ngFor

## Duration
5 minutes

## Brief
Use ngFor to iterate over an object.

### For more information 
BING/GOOGLE: “Angular2 ngFor”
<br>
Read eBook: https://www.ng-book.com/2/
<br>
https://angular.io/docs/ts/latest/api/common/NgFor-directive.html


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

Iterate over the `Person` property and display a list of users.
<br>
We already have a basic Angular2 application with a `Person` class.  The Person class constructor populates the `persons` object that you will iterate over.
<br>
Us a `ngFor` to display a list of persons.  This is similar to and the replacement for Angular1’s `ngRepeat`.
<br>
Your components template might end up looking something like this.
<br>
```typescript

@Component({
    selector: 'hello-world',
    template: `
    <div>
        <li *ngFor='#person of persons'>{{person.FirstName}} {{person.LastName}} {{person.Email}}</li>
    </div>
`
})


```
<br>
 <img src="https://raw.githubusercontent.com/robertdunaway/katas-angular2/master/003%20Angular2%20-%20ngFor/1.png"> 
<br>
You might want to experiment with ngFor.  Possibly create a dropdown control with the ngFor directive.


##Next
Take a few minutes and imagine more examples. 

<br>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-angular2/master/katas-Angular2-logo.png" alt="Smiley face" height="200" width="200"> 