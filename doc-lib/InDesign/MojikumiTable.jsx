/*
 * The mojikumi table.
 */
var MojikumiTable = {
  /*
   * The unique ID of the MojikumiTable.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the MojikumiTable (a Document or Application).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the MojikumiTable within its containing object.
   * @type {Number}
   */
  index: undefined,
  
  /*
   * A collection of events.
   * @type {Events}
   */
  events: undefined,
  
  /*
   * A collection of event listeners.
   * @type {EventListeners}
   */
  eventListeners: undefined,
  
  /*
   * The name of the MojikumiTable.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The existing mojikumi set on which to base the new mojikumi set.
   * @type {MojikumiTableDefaults}
   */
  basedOnMojikumiSet: undefined,
  
  /*
   * The mojikumi overrides for aki. Can return: Ordered array containing targetMojikumiClass:Short Integer, sideMojikumiClass:Short Integer, sideIsAfterTarget:Boolean, minimum:Real, desired:Real, maximum:Real, compressionPriority:Short Integer, akiDoesNotFloat:Boolean.
   * @type {Mixed}
   */
  overrideMojikumiAkiList: undefined,
  
  /*
   * A property that can be set to any string.
   * @type {String}
   */
  label: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Deletes the MojikumiTable.
   */
  remove: function() {
  },
  
  /*
   * Sets the label to the value associated with the specified key.
 *
   * @param {String} key The key.
   * @param {String} value The value.
   */
  insertLabel: function(key, value) {
  },
  
  /*
   * Gets the label value associated with the specified key.
 *
   * @param {String} key The key.
   * @returns {String}
   */
  extractLabel: function(key) {
    return new String();
  },
  
  /*
   * Generates a string which, if executed, will return the MojikumiTable.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {MojikumiTable}
   */
  getElements: function() {
    return new MojikumiTable();
  },
  
  /*
   * Retrieves the object specifier.
   * @returns {String}
   */
  toSpecifier: function() {
    return new String();
  },
  
  /*
   * Adds an event listener.
 *
   * @param {String} eventType The event type.
   * @param {Mixed} handler The event handler. Can accept: File or JavaScript Function.
   * @param {Boolean} [captures] This parameter is obsolete. 
   * @returns {EventListener}
   */
  addEventListener: function(eventType, handler, captures) {
    return new EventListener();
  },
  
  /*
   * Removes the event listener.
 *
   * @param {String} eventType The registered event type.
   * @param {Mixed} handler The registered event handler. Can accept: File or JavaScript Function.
   * @param {Boolean} [captures] This parameter is obsolete. 
   * @returns {Boolean}
   */
  removeEventListener: function(eventType, handler, captures) {
    return new Boolean();
  },
  
};
