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

> List including all options available for you to use.

##### className
Type: `String`

Default: `fade`

The animation class you want to use

___

##### maxWidth
Type: `Number`

Default: `600`

Maximum width the modal can take.

___

##### minWidth
Type: `Number`

Default: `320`

Minimum width the modal can take.

___

##### fullWindow
Type: `Boolean`

Default: `false`

Set modal to full window (100vw, 100vh);

#### Classes
> This is an example of how html is rendered.

```html
<div class="lily">
  <div class="lily-overlay fade lily-open"></div>
  <div class="lily-modal fade lily-open">
    <div class="lily-close fade">x</div>
    <div id="lily-content">...</div>
  </div> 
</div>
```

## Contributing
_toDO

## License

The code and the documentation are released under the [MIT License](LICENSE).