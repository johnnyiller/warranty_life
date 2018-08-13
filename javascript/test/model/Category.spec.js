/**
 * Warranty Life
 * Warranty life api definition for openapi 3.0.0 from here we generate api's
 *
 * OpenAPI spec version: 1.0.1
 * Contact: jeff.durand@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: unset
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.WarrantyLife);
  }
}(this, function(expect, WarrantyLife) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new WarrantyLife.Category();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Category', function() {
    it('should create an instance of Category', function() {
      // uncomment below and update the code to test Category
      //var instance = new WarrantyLife.Category();
      //expect(instance).to.be.a(WarrantyLife.Category);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new WarrantyLife.Category();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new WarrantyLife.Category();
      //expect(instance).to.be();
    });

    it('should have the property subCategoryIds (base name: "subCategoryIds")', function() {
      // uncomment below and update the code to test the property subCategoryIds
      //var instance = new WarrantyLife.Category();
      //expect(instance).to.be();
    });

    it('should have the property parentCategoryId (base name: "parentCategoryId")', function() {
      // uncomment below and update the code to test the property parentCategoryId
      //var instance = new WarrantyLife.Category();
      //expect(instance).to.be();
    });

  });

}));