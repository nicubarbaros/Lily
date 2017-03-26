// IIFE to wrap code up
(function(){

  // Expose constructor
  this.Modal = function() {
    
    // Define global elements
    this.closeButton = null;
    this.modal = null;
    this.overlay = null;

    this.transitionEvent = transitionEvent();
    // Default options
    var defaults = {
      className: "scale",
      closeButton: true,
      content: " ",
      maxWidth: 800,
      minWidth: 320,
      overlay: true
    }

    // Create options by mapping defaults units with passed in arguments
    if(arguments[0] && typeof arguments[0] === "object") {
      this.options = mapDefaults(defaults, arguments[0]);
    }

    //Public Methods

    Modal.prototype.close = function() {
      var self = this
      this.modal.className = this.modal.className.replace("lily--open", "");
      this.overlay.className = this.overlay.className.replace("lily--open", "");

      this.modal.addEventListener(this.transitionEvent, function(){
        self.modal.parentNode.removeChild(self.modal);
      })

      this.overlay.addEventListener(this.transitionEvent, function(){
        self.overlay.parentNode.removeChild(self.overlay);
      })
    }
    Modal.prototype.open = function() {
      buildModal.call(this);
      eventsInitializer.call(this);

      this.modal.className = this.modal.className + " lily--open";
      this.overlay.className = this.overlay.className + " lily--open";
    }

    // Private methods
    // Map default with users options
    function mapDefaults(source, props) {
      var prop;

      for (prop in props) {
        if (props.hasOwnProperty(prop)) {
          source[prop] = props[prop];
        }
      }

      return source;
    }

    function buildModal() {
      var content, docFrag, contentHolder;

      if(typeof this.options.content ==="string"){
        content = this.options.content;
      }

      else {
        content = this.options.content.innerHTML;
      }

      // Create a DocumentFrag
      docFrag = document.createDocumentFragment();

      // Create Modal element
      this.modal = document.createElement("div");
      this.modal.className = "lily--modal " + this.options.className;
      this.modal.style.maxWidth = this.options.maxWidth + "px";
      this.modal.style.minWidth = this.options.minWidth + "px";

      // Add button if true
      if(this.options.closeButton == true) {
        this.closeButton = document.createElement("button");
        this.closeButton.className = "lily--close " + this.options.className;
        this.closeButton.innerHTML = "x";
        this.modal.appendChild(this.closeButton);
      }

      // Add overlay if true
      if(this.options.overlay == true) {
        this.overlay = document.createElement("div");
        this.overlay.className = "lily--overlay " + this.options.className;
        docFrag.appendChild(this.overlay);
      }

      //Create content and append to modal
      contentHolder = document.createElement("div");
      contentHolder.className = "lily-content";
      contentHolder.innerHTML = content;
      this.modal.appendChild(contentHolder);

      // Append modal to DocumentFragment
      docFrag.appendChild(this.modal);

      // Append DocumentFragment to body
      document.body.appendChild(docFrag);
    }

    function eventsInitializer() {
      if(this.closeButton) {
        this.closeButton.addEventListener("click", this.close.bind(this));
      }

      if(this.overlay) {
        this.overlay.addEventListener("click", this.close.bind(this));
      }
    }

    function transitionEvent() {
      // Create a fake element
      var el = document.createElement("div");

      if(el.style.OTransition) return "oTransitionEnd";
      if(el.style.WebkitTransition) return "webkitTransitionEnd";
      return "transitionend";
    }
  }

}());