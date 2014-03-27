/*
 * A layout window.
 */
var LayoutWindow = {
  /*
   * Dispatched after the active selection changes. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_SELECTION_CHANGED: undefined,
  
  /*
   * Dispatched after an attribute on the active selection changes. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_SELECTION_ATTRIBUTE_CHANGED: undefined,
  
  /*
   * Dispatched before the LayoutWindow becomes inactive. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  BEFORE_DEACTIVATE: undefined,
  
  /*
   * Dispatched after the LayoutWindow becomes active. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_ACTIVATE: undefined,
  
  /*
   * Dispatched when the value of a property changes on this LayoutWindow. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_ATTRIBUTE_CHANGED: undefined,
  
  /*
   * Dispatched after a LayoutWindow is opened. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_OPEN: undefined,
  
  /*
   * Dispatched before a LayoutWindow is closed. This event bubbles. This event is cancelable.
   * @type {String}
   */
  BEFORE_CLOSE: undefined,
  
  /*
   * Dispatched when a LayoutWindow is closing. Since the close has been committed, it can no longer be canceled. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_CLOSE: undefined,
  
  /*
   * The name of the LayoutWindow.
   * @type {String}
   */
  name: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the LayoutWindow (a Document).
   * @type {Document}
   */
  parent: undefined,
  
  /*
   * The index of the LayoutWindow within its containing object.
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
   * The display performance preferences override for the view.
   * @type {ViewDisplaySettings}
   */
  viewDisplaySetting: undefined,
  
  /*
   * The default anchor point around which to transform objects. Can return: AnchorPoint enumerator or Array of 2 Units.
   * @type {Mixed}
   */
  transformReferencePoint: undefined,
  
  /*
   * The active layer. Can also accept: String.
   * @type {Layer}
   */
  activeLayer: undefined,
  
  /*
   * The size (as a percentage) to which to enlarge or reduce the view of the document. (Range: 5 to 4000)
   * @type {Number}
   */
  zoomPercentage: undefined,
  
  /*
   * The front-most spread. Can return: Spread or MasterSpread.
   * @type {Mixed}
   */
  activeSpread: undefined,
  
  /*
   * The front-most page.
   * @type {Page}
   */
  activePage: undefined,
  
  /*
   * The screen mode for layout view.
   * @type {ScreenModeOptions}
   */
  screenMode: undefined,
  
  /*
   * If true, display a simulation of overprinting.
   * @type {Boolean}
   */
  overprintPreview: undefined,
  
  /*
   * The profile used for proofing colors.
   * @type {String}
   */
  proofingProfile: undefined,
  
  /*
   * The method of proofing colors.
   * @type {ProofingType}
   */
  proofingType: undefined,
  
  /*
   * If true, simulates the dark gray produced by many printers in place of solid black, according to the proofing profile. Note: Valid only when proofing type is custom.
   * @type {Boolean}
   */
  simulateInkBlack: undefined,
  
  /*
   * If true, simulates the dingy white of real paper, according to the proofing profile. Note: Valid only when proofing type is custom.
   * @type {Boolean}
   */
  simulatePaperWhite: undefined,
  
  /*
   * If true, leaves color values unchanged for CMYK objects without embedded profiles and native objects such as line art or type. Note: Converts images whose profiles differ from the profile of the simulated device. Valid only when proofing type is custom.
   * @type {Boolean}
   */
  preserveColorNumbers: undefined,
  
  /*
   * The selected object(s). Can also accept: Object or NothingEnum enumerator.
   * @type {Object}
   */
  selection: undefined,
  
  /*
   * The bounds of the window (specified in pixels) in the form [top, left, bottom, right].
   * @type {Number}
   */
  bounds: undefined,
  
  /*
   * The key object of the selection. Can also accept: NothingEnum enumerator.
   * @type {PageItem}
   */
  selectionKeyObject: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Magnifies or reduces the window to the specified display size.
 *
   * @param {ZoomOptions} given The display size.
   */
  zoom: function(given) {
  },
  
  /*
   * Selects the specified object(s).
 *
   * @param {Mixed} selectableItems The objects to select. Can accept: Object, Array of Objects, NothingEnum enumerator or SelectAll enumerator.
   * @param {SelectionOptions} [existingSelection] The selection status of the LayoutWindow in relation to previously selected objects. 
   */
  select: function(selectableItems, existingSelection) {
  },
  
  /*
   * Closes the LayoutWindow.
   */
  close: function() {
  },
  
  /*
   * Maximizes the window.
   */
  maximize: function() {
  },
  
  /*
   * Minimizes the window.
   */
  minimize: function() {
  },
  
  /*
   * Restores the window.
   */
  restore: function() {
  },
  
  /*
   * Brings the object to the front.
   */
  bringToFront: function() {
  },
  
  /*
   * Generates a string which, if executed, will return the LayoutWindow.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {LayoutWindow}
   */
  getElements: function() {
    return new LayoutWindow();
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
