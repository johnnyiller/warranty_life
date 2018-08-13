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
    instance = new WarrantyLife.Product();
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

  describe('Product', function() {
    it('should create an instance of Product', function() {
      // uncomment below and update the code to test Product
      //var instance = new WarrantyLife.Product();
      //expect(instance).to.be.a(WarrantyLife.Product);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new WarrantyLife.Product();
      //expect(instance).to.be();
    });

    it('should have the property categoryId (base name: "categoryId")', function() {
      // uncomment below and update the code to test the property categoryId
      //var instance = new WarrantyLife.Product();
      //expect(instance).to.be();
    });

    it('should have the property isCategoryKnown (base name: "isCategoryKnown")', function() {
      // uncomment below and update the code to test the property isCategoryKnown
      //var instance = new WarrantyLife.Product();
      //expect(instance).to.be();
    });

    it('should have the property manufacturer (base name: "manufacturer")', function() {
      // uncomment below and update the code to test the property manufacturer
      //var instance = new WarrantyLife.Product();
      //expect(instance).to.be();
    });

    it('should have the property manufacturerId (base name: "manufacturerId")', function() {
      // uncomment below and update the code to test the property manufacturerId
      //var instance = new WarrantyLife.Product();
      //expect(instance).to.be();
    });

    it('should have the property mpn (base name: "mpn")', function() {
      // uncomment below and update the code to test the property mpn
      //var instance = new WarrantyLife.Product();
      //expect(instance).to.be();
    });

    it('should have the property model (base name: "model")', function() {
      // uncomment below and update the code to test the property model
      //var instance = new WarrantyLife.Product();
      //expect(instance).to.be();
    });

    it('should have the property msrp (base name: "msrp")', function() {
      // uncomment below and update the code to test the property msrp
      //var instance = new WarrantyLife.Product();
      //expect(instance).to.be();
    });

    it('should have the property msrpCurrency (base name: "msrpCurrency")', function() {
      // uncomment below and update the code to test the property msrpCurrency
      //var instance = new WarrantyLife.Product();
      //expect(instance).to.be();
    });

    it('should have the property upc (base name: "upc")', function() {
      // uncomment below and update the code to test the property upc
      //var instance = new WarrantyLife.Product();
      //expect(instance).to.be();
    });

    it('should have the property ean (base name: "ean")', function() {
      // uncomment below and update the code to test the property ean
      //var instance = new WarrantyLife.Product();
      //expect(instance).to.be();
    });

    it('should have the property estimatedValue (base name: "estimatedValue")', function() {
      // uncomment below and update the code to test the property estimatedValue
      //var instance = new WarrantyLife.Product();
      //expect(instance).to.be();
    });

    it('should have the property buybackOffer (base name: "buybackOffer")', function() {
      // uncomment below and update the code to test the property buybackOffer
      //var instance = new WarrantyLife.Product();
      //expect(instance).to.be();
    });

    it('should have the property flags (base name: "flags")', function() {
      // uncomment below and update the code to test the property flags
      //var instance = new WarrantyLife.Product();
      //expect(instance).to.be();
    });

  });

}));