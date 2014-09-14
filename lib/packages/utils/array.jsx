﻿/** * Function to check if a string is in array * @name Array.is_in_array * @function * @param {String} the string to find * @return {Boolean} is_in_array true if the string is in array */Array.prototype.is_in_array = function (my_string) {    for (x in this) {        if (my_string === this[x]) {            return true;        }    }    return false;}/** * Function to return the lower number in an array * @name Array.get_lower_element * @function * @param {Array of Number} array the array of element to parse * @return {Double} lower_element the lower element */Array.prototype.get_lower_element = function(){    var lower_element = this[0];    for(var i = 0; i<this.length; i++){        if(lower_element > this[i]){            lower_element = this[i]        }    }    return lower_element;}