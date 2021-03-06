/**
 * Warranty Life API
 * Warranty life Api
 *
 * OpenAPI spec version: 1.0.9
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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Manufacturer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Manufacturer'));
  } else {
    // Browser globals (root is window)
    if (!root.WarrantyLifeApi) {
      root.WarrantyLifeApi = {};
    }
    root.WarrantyLifeApi.Product = factory(root.WarrantyLifeApi.ApiClient, root.WarrantyLifeApi.Manufacturer);
  }
}(this, function(ApiClient, Manufacturer) {
  'use strict';




  /**
   * The Product model module.
   * @module model/Product
   * @version 1.0.9
   */

  /**
   * Constructs a new <code>Product</code>.
   * @alias module:model/Product
   * @class
   * @param categoryId {String} 
   * @param manufacturerId {String} 
   * @param model {String} 
   */
  var exports = function(categoryId, manufacturerId, model) {
    var _this = this;


    _this['categoryId'] = categoryId;


    _this['manufacturerId'] = manufacturerId;

    _this['model'] = model;








  };

  /**
   * Constructs a <code>Product</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Product} obj Optional instance to populate.
   * @return {module:model/Product} The populated <code>Product</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('categoryId')) {
        obj['categoryId'] = ApiClient.convertToType(data['categoryId'], 'String');
      }
      if (data.hasOwnProperty('isCategoryKnown')) {
        obj['isCategoryKnown'] = ApiClient.convertToType(data['isCategoryKnown'], 'Boolean');
      }
      if (data.hasOwnProperty('manufacturer')) {
        obj['manufacturer'] = Manufacturer.constructFromObject(data['manufacturer']);
      }
      if (data.hasOwnProperty('manufacturerId')) {
        obj['manufacturerId'] = ApiClient.convertToType(data['manufacturerId'], 'String');
      }
      if (data.hasOwnProperty('mpn')) {
        obj['mpn'] = ApiClient.convertToType(data['mpn'], 'String');
      }
      if (data.hasOwnProperty('model')) {
        obj['model'] = ApiClient.convertToType(data['model'], 'String');
      }
      if (data.hasOwnProperty('msrp')) {
        obj['msrp'] = ApiClient.convertToType(data['msrp'], 'Number');
      }
      if (data.hasOwnProperty('msrpCurrency')) {
        obj['msrpCurrency'] = ApiClient.convertToType(data['msrpCurrency'], 'String');
      }
      if (data.hasOwnProperty('upc')) {
        obj['upc'] = ApiClient.convertToType(data['upc'], 'String');
      }
      if (data.hasOwnProperty('ean')) {
        obj['ean'] = ApiClient.convertToType(data['ean'], 'String');
      }
      if (data.hasOwnProperty('estimatedValue')) {
        obj['estimatedValue'] = ApiClient.convertToType(data['estimatedValue'], 'String');
      }
      if (data.hasOwnProperty('buybackOffer')) {
        obj['buybackOffer'] = ApiClient.convertToType(data['buybackOffer'], 'String');
      }
      if (data.hasOwnProperty('sku')) {
        obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
      }
      if (data.hasOwnProperty('flags')) {
        obj['flags'] = ApiClient.convertToType(data['flags'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} categoryId
   */
  exports.prototype['categoryId'] = undefined;
  /**
   * @member {Boolean} isCategoryKnown
   */
  exports.prototype['isCategoryKnown'] = undefined;
  /**
   * @member {module:model/Manufacturer} manufacturer
   */
  exports.prototype['manufacturer'] = undefined;
  /**
   * @member {String} manufacturerId
   */
  exports.prototype['manufacturerId'] = undefined;
  /**
   * @member {String} mpn
   */
  exports.prototype['mpn'] = undefined;
  /**
   * @member {String} model
   */
  exports.prototype['model'] = undefined;
  /**
   * @member {Number} msrp
   */
  exports.prototype['msrp'] = undefined;
  /**
   * @member {module:model/Product.MsrpCurrencyEnum} msrpCurrency
   */
  exports.prototype['msrpCurrency'] = undefined;
  /**
   * @member {String} upc
   */
  exports.prototype['upc'] = undefined;
  /**
   * @member {String} ean
   */
  exports.prototype['ean'] = undefined;
  /**
   * @member {String} estimatedValue
   */
  exports.prototype['estimatedValue'] = undefined;
  /**
   * @member {String} buybackOffer
   */
  exports.prototype['buybackOffer'] = undefined;
  /**
   * @member {String} sku
   */
  exports.prototype['sku'] = undefined;
  /**
   * @member {Array.<String>} flags
   */
  exports.prototype['flags'] = undefined;


  /**
   * Allowed values for the <code>msrpCurrency</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MsrpCurrencyEnum = {
    /**
     * value: "USD"
     * @const
     */
    "USD": "USD",
    /**
     * value: "CAD"
     * @const
     */
    "CAD": "CAD"  };


  return exports;
}));


