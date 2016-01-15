import { bootstrap } from 'angular2/platform/browser';
import { Component } from 'angular2/core';

@Component({
    selector: 'hello-world',
    template: `
    <div>
        Hello world 22222
    </div>
`
})

class HelloWorld { }

bootstrap(HelloWorld);

