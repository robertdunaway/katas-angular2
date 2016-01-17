import { bootstrap } from 'angular2/platform/browser';
import { Component } from 'angular2/core';

@Component({
    selector: 'hello-world',
    template: `
    <div>
        Hello {{FName}} {{LName}} age {{Age}}
    </div>
`
})

class HelloWorld {
    FName: string = 'John';
    LName: string = 'Doe';
    Age: number = 25;
}

bootstrap(HelloWorld);

