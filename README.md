# angular-datetime #

Angular directive to bind two input fields, one for date and one for time, to a single Date object.

Currently, we assume the HTML5 date and time input types are supported by the browser. We'll add polyfills in the near future.

## Usage ##

```Javascript
var myapp = angular.module('myapp', ['ngDateTime']);
```

```HTML
<!-- Include moment.js (required) -->
<script src="path/to/moment.js"></script>

...

<ng-date-time model="date"></ng-date-time>
```

## TODO ##

+ Add polyfills for date and time input types.
+ Add unit tests.