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
    instance = new WarrantyLife.ItemsApi();
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

  describe('ItemsApi', function() {
    describe('itemsGet', function() {
      it('should call itemsGet successfully', function(done) {
        //uncomment below and update the code to test itemsGet
        //instance.itemsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('itemsItemIdGet', function() {
      it('should call itemsItemIdGet successfully', function(done) {
        //uncomment below and update the code to test itemsItemIdGet
        //instance.itemsItemIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('itemsItemIdWarrantiesPost', function() {
      it('should call itemsItemIdWarrantiesPost successfully', function(done) {
        //uncomment below and update the code to test itemsItemIdWarrantiesPost
        //instance.itemsItemIdWarrantiesPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('itemsPost', function() {
      it('should call itemsPost successfully', function(done) {
        //uncomment below and update the code to test itemsPost
        //instance.itemsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
