/**
  `ImageState` is a Mixin to track image loading/error state
  and update css classes accordingly.

  @class ImageState
**/
var ImageState = Ember.Mixin.create({
  classNameBindings: ['_loadingClass', '_errorClass'],

  /**
    @property src
    @type String
    @default null
  */
  src: null,

  /**
    @property url
    @type String
    @default src
    The final src to load. Gives mixins a chance to modify src
  */
  url: reads('src'),

  /**
    @property isLoading
    @type Boolean
    @default if the src is initially set
  */
  isLoading: true,

  /**
    @property isError
    @type Boolean
    @default false
  */
  isError: false,
  
  /**
    @property loadingClass
    @type String
    @default 'loading'
  */
  loadingClass: 'loading',

  /**
    @property errorClass
    @type String
    @default 'error'
  */
  errorClass: 'error',

  /**
    @private
    
    Computed property proxies for state classes
    so they can be easily overridden.

    @property loadingClass
    @property errorClass
  */
  _loadingClass: Ember.computed('isLoading', function() {
    if(this.get('isLoading')) { return this.get('loadingClass'); }
  }),

  _errorClass: Ember.computed('isError', function() {
    if(this.get('isError')) { return this.get('errorClass'); }
  })
});
