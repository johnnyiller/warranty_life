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
    instance = new WarrantyLife.Warranty();
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

  describe('Warranty', function() {
    it('should create an instance of Warranty', function() {
      // uncomment below and update the code to test Warranty
      //var instance = new WarrantyLife.Warranty();
      //expect(instance).to.be.a(WarrantyLife.Warranty);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new WarrantyLife.Warranty();
      //expect(instance).to.be();
    });

    it('should have the property refId (base name: "refId")', function() {
      // uncomment below and update the code to test the property refId
      //var instance = new WarrantyLife.Warranty();
      //expect(instance).to.be();
    });

    it('should have the property registrationCode (base name: "registrationCode")', function() {
      // uncomment below and update the code to test the property registrationCode
      //var instance = new WarrantyLife.Warranty();
      //expect(instance).to.be();
    });

    it('should have the property warrantyUrl (base name: "warrantyUrl")', function() {
      // uncomment below and update the code to test the property warrantyUrl
      //var instance = new WarrantyLife.Warranty();
      //expect(instance).to.be();
    });

    it('should have the property orderRefId (base name: "orderRefId")', function() {
      // uncomment below and update the code to test the property orderRefId
      //var instance = new WarrantyLife.Warranty();
      //expect(instance).to.be();
    });

    it('should have the property warrantyPlanId (base name: "warrantyPlanId")', function() {
      // uncomment below and update the code to test the property warrantyPlanId
      //var instance = new WarrantyLife.Warranty();
      //expect(instance).to.be();
    });

    it('should have the property itemId (base name: "itemId")', function() {
      // uncomment below and update the code to test the property itemId
      //var instance = new WarrantyLife.Warranty();
      //expect(instance).to.be();
    });

    it('should have the property customerId (base name: "customerId")', function() {
      // uncomment below and update the code to test the property customerId
      //var instance = new WarrantyLife.Warranty();
      //expect(instance).to.be();
    });

    it('should have the property dateOfPurchase (base name: "dateOfPurchase")', function() {
      // uncomment below and update the code to test the property dateOfPurchase
      //var instance = new WarrantyLife.Warranty();
      //expect(instance).to.be();
    });

    it('should have the property pricePaid (base name: "pricePaid")', function() {
      // uncomment below and update the code to test the property pricePaid
      //var instance = new WarrantyLife.Warranty();
      //expect(instance).to.be();
    });

    it('should have the property pricePaidCurrencyCode (base name: "pricePaidCurrencyCode")', function() {
      // uncomment below and update the code to test the property pricePaidCurrencyCode
      //var instance = new WarrantyLife.Warranty();
      //expect(instance).to.be();
    });

    it('should have the property taxPaid (base name: "taxPaid")', function() {
      // uncomment below and update the code to test the property taxPaid
      //var instance = new WarrantyLife.Warranty();
      //expect(instance).to.be();
    });

  });

}));
