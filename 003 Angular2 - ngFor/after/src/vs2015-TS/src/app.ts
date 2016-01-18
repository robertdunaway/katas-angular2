import { bootstrap } from 'angular2/platform/browser';
import { Component } from 'angular2/core';

@Component({
    selector: 'hello-world',
    template: `
    <div>
        <li *ngFor='#person of persons'>{{person.FirstName}} {{person.LastName}} {{person.Email}}</li>
    </div>
`
})

class HelloWorld {
    persons: Person[] = [];

    constructor() {
        
        this.persons.push({ FirstName: 'John', LastName: 'Doe', Email: 'john.doe@email.com'}
            , { FirstName: 'Jane', LastName: 'Doe', Email: 'jane.doe@email.com' }
            , { FirstName: 'Another', LastName: 'Doe', Email: 'another.doe@email.com' });
    }
}

class Person {
    FirstName: string;
    LastName: string;
    Email: string;
}

bootstrap(HelloWorld);


