# Lily is currently under development

_toDo

## Lily

Plugin that lets you create modals, fast and easy.

## Quick start

### Install

This package can be installed with:

_toDo

Bower, npm


### Load

#### Webpack

_toDo

#### Static HTML

_toDo

### Usage

Wrap your modal content into a div with the id `lily-content` and let the plugin do the rest.
```html
<div id="lily-content">
  <h1>My First Heading</h1>
  <p>My first paragraph.</p>
</div>
```

Create a new object and call the plugin function and your modal is ready.

```javascript
var modal = new Modal({
  //options
});

```

Have access to 2 simple public function

```javascript
modal.open(); //open modal

modal.close(); //close modal

```
## Documentation

#### Options

> List including all options 

##### className
Type: `String`

Default: `fade`

The animation class you want to use

##### maxWidth
Type: `Number`

Default: `600`

Maximum width that the modal can take.

##### minWidth
Type: `Number`

Default: `320`

Minimum width that the modal can take.

##### fullWindow
Type: `Boolean`

Default: `false`

Set modal to full window (100vw, 100vh);
## Contributing
_toDO

## License

The code and the documentation are released under the [MIT License](LICENSE).