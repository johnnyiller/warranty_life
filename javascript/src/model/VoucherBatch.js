/**
 * Warranty Life
 * Warranty life api definition for openapi 3.0.0 from here we generate api's
 *
 * OpenAPI spec version: 1.0.2
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WarrantyLife) {
      root.WarrantyLife = {};
    }
    root.WarrantyLife.VoucherBatch = factory(root.WarrantyLife.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The VoucherBatch model module.
   * @module model/VoucherBatch
   * @version 1.0.2
   */

  /**
   * Constructs a new <code>VoucherBatch</code>.
   * @alias module:model/VoucherBatch
   * @class
   * @param qty {Number} 
   * @param warrantyPlanId {String} 
   */
  var exports = function(qty, warrantyPlanId) {
    var _this = this;


    _this['qty'] = qty;
    _this['warrantyPlanId'] = warrantyPlanId;


  };

  /**
   * Constructs a <code>VoucherBatch</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VoucherBatch} obj Optional instance to populate.
   * @return {module:model/VoucherBatch} The populated <code>VoucherBatch</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('qty')) {
        obj['qty'] = ApiClient.convertToType(data['qty'], 'Number');
      }
      if (data.hasOwnProperty('warrantyPlanId')) {
        obj['warrantyPlanId'] = ApiClient.convertToType(data['warrantyPlanId'], 'String');
      }
      if (data.hasOwnProperty('note')) {
        obj['note'] = ApiClient.convertToType(data['note'], 'String');
      }
      if (data.hasOwnProperty('voucherCodes')) {
        obj['voucherCodes'] = ApiClient.convertToType(data['voucherCodes'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Number} qty
   */
  exports.prototype['qty'] = undefined;
  /**
   * @member {String} warrantyPlanId
   */
  exports.prototype['warrantyPlanId'] = undefined;
  /**
   * @member {String} note
   */
  exports.prototype['note'] = undefined;
  /**
   * @member {Array.<String>} voucherCodes
   */
  exports.prototype['voucherCodes'] = undefined;



  return exports;
}));


