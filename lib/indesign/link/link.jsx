﻿/** * Module with indesign link functions * @namespace Link * @memberOf IN * @author Bastien Eichenberger */IN.Link = (function (my) {    /**     * Function to check if a link contains an bitmap image     * @function is_image_bitmap     * @memberOf IN.Link     * @param {Link} link, the indesign link object     * @return {Boolean} true if the link is a bitmap image     */    my.is_image_bitmap = function (link) {        var image = link.parent;        var black_and_white_key = app.translateKeyString("$ID/#Links_Black and White");        if (image.constructor.name === "Image") {            if (image.space == black_and_white_key) {                return true;            }        }        return false;    }    /**     * Function who check if a link is proportional or not     * @function is_proportional     * @memberOf IN.Link     * @param {Link} link, the indesign link object     * @return {Boolean} true if the link is proportional     */    my.is_proportional = function (link) {        var image = link.parent;        var horizontal_scale = Math.abs(image.absoluteHorizontalScale);        var vertical_scale = Math.abs(image.absoluteVerticalScale);        if (Math.round(horizontal_scale) === Math.round(vertical_scale)) {            return true;        }        return false;    }    /**     * Function to count the number of times that the same link is used     * @param link     * @param {Document} doc_to_check the indesign document     * @returns {number}     */    my.count = function (link, doc) {        var array_all_links = doc.links;        var counter = 0;        for(var i = 0; i<array_all_links.length; i++){            var current_link = array_all_links[i];            if(link.filePath === current_link.filePath){                counter++;            }        }        return counter;    }    return my;})(IN.Link || {});