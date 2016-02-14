/// <reference path="../typings/browser/definitions/moment/moment.d.ts" />

import { bootstrap } from 'angular2/platform/browser';
import {BUTTON_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import { Component } from 'angular2/core';
import { Person } from './person.class';


@Component({
    selector: 'hello-world',
    templateUrl: './app.html'
})

class HelloWorld {
    persons: Person[] = [];

    constructor() {

        this.persons.push({ FirstName: 'John', LastName: 'Doe', Email: 'john.doe@email.com' }
            , { FirstName: 'Jane', LastName: 'Doe', Email: 'jane.doe@email.com' }
            , { FirstName: 'Another', LastName: 'Doe', Email: 'another.doe@email.com' });
    }
}

bootstrap(HelloWorld);
