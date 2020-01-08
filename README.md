# CommonUI
A fully configurable UI having most commonly used features.

Built using Angular and has features like PWA and state management inbuilt.
We have plans to provide tree shaking feature similar to the one given by webpack (https://webpack.js.org/guides/tree-shaking/). Elements not defined in your configuration JSON's will be removed from the final build.

Points to consider while coding:
Ref:- https://medium.com/dev-jam/5-tips-best-practices-to-organize-your-angular-project-e900db08702e
Renderer module is the core module here. It is the only module that will be imported in AppModule.
Other modules are elements module, section module. 
Stylers and validators components / directives to be included in section module.
All services and state managers to be included in renderer module as it is the core module and everything 
will be handled from there.
Logger / Error handler service.
Required fields checker.

To do Vinay - Seperate field.json from section.json
Add default css to remove all margins and paddings.

bootstrap:
bootstrap for css.
ngx-bootstrap supports Bootstrap 3 and 4.
ng-bootstrap supports Bootstrap 4 and requires Angular 5+.

That's why we have include ng-bootstrap in our project.
