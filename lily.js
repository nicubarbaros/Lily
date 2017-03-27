"use strict";
// IIFE to wrap code up
(function(){

  // Expose constructor
  window.Modal = function() {
    
    // Define global elements
    this.closeButton = null;
    this.modal = null;
    this.overlay = null;

    // Determine transition type
    this.transitionEvent = transitionEvent();

    // Default options
    var options = {
      className: "fade",
      closeButton: true,
      content: " ",
      maxWidth: 800,
      minWidth: 320,
      overlay: true,
      fullWindow: false,
    }

    // Private params
    var lily = {
      lilyWrapper: null,
      viewPortWith: "100vw",
      viewPortHeight: "100vh"
    }

    // Create options by mapping defaults units with passed in arguments
    if(arguments[0] && typeof arguments[0] === "object") {
      this.options = mapOptions(options, arguments[0]);
    }

    //Public Methods

    Modal.prototype.close = function() {
      var self = this
      this.modal.className = this.modal.className.replace("lily-open", "");
      this.modal.addEventListener(this.transitionEvent, function(){
        self.modal.parentNode.removeChild(self.modal);

        // Remove lilyWrapper as well
        lily.lilyWrapper.parentNode.removeChild(lily.lilyWrapper);
      })
      
      
      if(this.options.overlay == true) {
        this.overlay.className = this.overlay.className.replace("lily-open", "");
        
        this.overlay.addEventListener(this.transitionEvent, function(){
          self.overlay.parentNode.removeChild(self.overlay);
        })
      }
    }

    Modal.prototype.open = function() {

      // We don't need an overlay if modal is fullWindow
      if(this.options.fullWindow == true) {
        this.options.overlay = false;
      }

      buildModal.call(this);
      eventsInitializer.call(this);

      // Forces the browser to recognize our initial state, and keeps our modal transition,
      // Otherwise transitions won't work, since we create elements and add class to them.
      window.getComputedStyle(this.modal).height;

      this.modal.className = this.modal.className + " lily-open";

      if(this.options.overlay == true)
        this.overlay.className = this.overlay.className + " lily-open";
    }

    // Private methods
    // Map default with users options
    function mapOptions(source, props) {
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

      // Create lily element
      lily.lilyWrapper = document.createElement("div");
      lily.lilyWrapper.className = "lily";

      // Create Modal element
      this.modal = document.createElement("div");
      this.modal.className = "lily-modal " + this.options.className;
      if(this.options.fullWindow == false) {
        this.modal.style.width = this.options.maxWidth + "px";
        this.modal.style.minWidth = this.options.minWidth + "px";
      }

      else {
        this.modal.style.width = lily.viewPortWith;
        this.modal.style.height = lily.viewPortHeight;
      }

      // Add button if true
      if(this.options.closeButton == true) {
        this.closeButton = document.createElement("button");
        this.closeButton.className = "lily-close " + this.options.className;
        this.closeButton.innerHTML = "x";
        this.modal.appendChild(this.closeButton);
      }

      // Add overlay if true
      if(this.options.overlay == true) {
        this.overlay = document.createElement("div");
        this.overlay.className = "lily-overlay " + this.options.className;

        // Append overlay to lily
        lily.lilyWrapper.appendChild(this.overlay);
      }

      //Create content and append to modal
      contentHolder = document.createElement("div");
      contentHolder.className = "lily-content";
      contentHolder.innerHTML = content;
      this.modal.appendChild(contentHolder);

      // Append modal to lily
      lily.lilyWrapper.appendChild(this.modal);

      // Append modal to DocumentFragment
      docFrag.appendChild(lily.lilyWrapper);

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