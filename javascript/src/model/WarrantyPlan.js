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
    root.WarrantyLife.WarrantyPlan = factory(root.WarrantyLife.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The WarrantyPlan model module.
   * @module model/WarrantyPlan
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>WarrantyPlan</code>.
   * @alias module:model/WarrantyPlan
   * @class
   */
  var exports = function() {
    var _this = this;































  };

  /**
   * Constructs a <code>WarrantyPlan</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WarrantyPlan} obj Optional instance to populate.
   * @return {module:model/WarrantyPlan} The populated <code>WarrantyPlan</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('applicableCategoryIds')) {
        obj['applicableCategoryIds'] = ApiClient.convertToType(data['applicableCategoryIds'], ['String']);
      }
      if (data.hasOwnProperty('applicableProductFlags')) {
        obj['applicableProductFlags'] = ApiClient.convertToType(data['applicableProductFlags'], ['String']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('productMinPrice')) {
        obj['productMinPrice'] = ApiClient.convertToType(data['productMinPrice'], 'Number');
      }
      if (data.hasOwnProperty('duration')) {
        obj['duration'] = ApiClient.convertToType(data['duration'], 'Number');
      }
      if (data.hasOwnProperty('durationUnit')) {
        obj['durationUnit'] = ApiClient.convertToType(data['durationUnit'], 'String');
      }
      if (data.hasOwnProperty('isDurationFixed')) {
        obj['isDurationFixed'] = ApiClient.convertToType(data['isDurationFixed'], 'Boolean');
      }
      if (data.hasOwnProperty('partsDuration')) {
        obj['partsDuration'] = ApiClient.convertToType(data['partsDuration'], 'Number');
      }
      if (data.hasOwnProperty('partsDurationUnit')) {
        obj['partsDurationUnit'] = ApiClient.convertToType(data['partsDurationUnit'], 'String');
      }
      if (data.hasOwnProperty('labourDuration')) {
        obj['labourDuration'] = ApiClient.convertToType(data['labourDuration'], 'Number');
      }
      if (data.hasOwnProperty('labourDurationUnit')) {
        obj['labourDurationUnit'] = ApiClient.convertToType(data['labourDurationUnit'], 'String');
      }
      if (data.hasOwnProperty('rmaShippingCoverage')) {
        obj['rmaShippingCoverage'] = ApiClient.convertToType(data['rmaShippingCoverage'], 'Number');
      }
      if (data.hasOwnProperty('serviceLocation')) {
        obj['serviceLocation'] = ApiClient.convertToType(data['serviceLocation'], 'String');
      }
      if (data.hasOwnProperty('claimPhone')) {
        obj['claimPhone'] = ApiClient.convertToType(data['claimPhone'], 'String');
      }
      if (data.hasOwnProperty('planAvailableFrom')) {
        obj['planAvailableFrom'] = ApiClient.convertToType(data['planAvailableFrom'], 'Date');
      }
      if (data.hasOwnProperty('planAvailableTo')) {
        obj['planAvailableTo'] = ApiClient.convertToType(data['planAvailableTo'], 'Date');
      }
      if (data.hasOwnProperty('sellableDuration')) {
        obj['sellableDuration'] = ApiClient.convertToType(data['sellableDuration'], 'Number');
      }
      if (data.hasOwnProperty('sellableDurationUnit')) {
        obj['sellableDurationUnit'] = ApiClient.convertToType(data['sellableDurationUnit'], 'String');
      }
      if (data.hasOwnProperty('srp')) {
        obj['srp'] = ApiClient.convertToType(data['srp'], 'Number');
      }
      if (data.hasOwnProperty('wholesaleCost')) {
        obj['wholesaleCost'] = ApiClient.convertToType(data['wholesaleCost'], 'Number');
      }
      if (data.hasOwnProperty('retailerCost')) {
        obj['retailerCost'] = ApiClient.convertToType(data['retailerCost'], 'Number');
      }
      if (data.hasOwnProperty('retailPrice')) {
        obj['retailPrice'] = ApiClient.convertToType(data['retailPrice'], 'Number');
      }
      if (data.hasOwnProperty('currencyCode')) {
        obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
      }
      if (data.hasOwnProperty('billingPeriod')) {
        obj['billingPeriod'] = ApiClient.convertToType(data['billingPeriod'], 'Number');
      }
      if (data.hasOwnProperty('billingPeriodUnit')) {
        obj['billingPeriodUnit'] = ApiClient.convertToType(data['billingPeriodUnit'], 'String');
      }
      if (data.hasOwnProperty('countryCode')) {
        obj['countryCode'] = ApiClient.convertToType(data['countryCode'], 'String');
      }
      if (data.hasOwnProperty('termsUrl')) {
        obj['termsUrl'] = ApiClient.convertToType(data['termsUrl'], 'String');
      }
      if (data.hasOwnProperty('updatedAt')) {
        obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Array.<String>} applicableCategoryIds
   */
  exports.prototype['applicableCategoryIds'] = undefined;
  /**
   * @member {Array.<String>} applicableProductFlags
   */
  exports.prototype['applicableProductFlags'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {Number} productMinPrice
   */
  exports.prototype['productMinPrice'] = undefined;
  /**
   * @member {Number} duration
   */
  exports.prototype['duration'] = undefined;
  /**
   * @member {module:model/WarrantyPlan.DurationUnitEnum} durationUnit
   */
  exports.prototype['durationUnit'] = undefined;
  /**
   * @member {Boolean} isDurationFixed
   */
  exports.prototype['isDurationFixed'] = undefined;
  /**
   * @member {Number} partsDuration
   */
  exports.prototype['partsDuration'] = undefined;
  /**
   * @member {module:model/WarrantyPlan.PartsDurationUnitEnum} partsDurationUnit
   */
  exports.prototype['partsDurationUnit'] = undefined;
  /**
   * @member {Number} labourDuration
   */
  exports.prototype['labourDuration'] = undefined;
  /**
   * @member {module:model/WarrantyPlan.LabourDurationUnitEnum} labourDurationUnit
   */
  exports.prototype['labourDurationUnit'] = undefined;
  /**
   * @member {module:model/WarrantyPlan.RmaShippingCoverageEnum} rmaShippingCoverage
   */
  exports.prototype['rmaShippingCoverage'] = undefined;
  /**
   * @member {String} serviceLocation
   */
  exports.prototype['serviceLocation'] = undefined;
  /**
   * @member {String} claimPhone
   */
  exports.prototype['claimPhone'] = undefined;
  /**
   * @member {Date} planAvailableFrom
   */
  exports.prototype['planAvailableFrom'] = undefined;
  /**
   * @member {Date} planAvailableTo
   */
  exports.prototype['planAvailableTo'] = undefined;
  /**
   * @member {Number} sellableDuration
   */
  exports.prototype['sellableDuration'] = undefined;
  /**
   * @member {module:model/WarrantyPlan.SellableDurationUnitEnum} sellableDurationUnit
   */
  exports.prototype['sellableDurationUnit'] = undefined;
  /**
   * @member {Number} srp
   */
  exports.prototype['srp'] = undefined;
  /**
   * @member {Number} wholesaleCost
   */
  exports.prototype['wholesaleCost'] = undefined;
  /**
   * @member {Number} retailerCost
   */
  exports.prototype['retailerCost'] = undefined;
  /**
   * @member {Number} retailPrice
   */
  exports.prototype['retailPrice'] = undefined;
  /**
   * @member {module:model/WarrantyPlan.CurrencyCodeEnum} currencyCode
   */
  exports.prototype['currencyCode'] = undefined;
  /**
   * @member {Number} billingPeriod
   */
  exports.prototype['billingPeriod'] = undefined;
  /**
   * @member {module:model/WarrantyPlan.BillingPeriodUnitEnum} billingPeriodUnit
   */
  exports.prototype['billingPeriodUnit'] = undefined;
  /**
   * @member {module:model/WarrantyPlan.CountryCodeEnum} countryCode
   */
  exports.prototype['countryCode'] = undefined;
  /**
   * @member {String} termsUrl
   */
  exports.prototype['termsUrl'] = undefined;
  /**
   * @member {Date} updatedAt
   */
  exports.prototype['updatedAt'] = undefined;


  /**
   * Allowed values for the <code>durationUnit</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DurationUnitEnum = {
    /**
     * value: "days"
     * @const
     */
    "days": "days",
    /**
     * value: "months"
     * @const
     */
    "months": "months",
    /**
     * value: "years"
     * @const
     */
    "years": "years"  };

  /**
   * Allowed values for the <code>partsDurationUnit</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PartsDurationUnitEnum = {
    /**
     * value: "days"
     * @const
     */
    "days": "days",
    /**
     * value: "months"
     * @const
     */
    "months": "months",
    /**
     * value: "years"
     * @const
     */
    "years": "years"  };

  /**
   * Allowed values for the <code>labourDurationUnit</code> property.
   * @enum {String}
   * @readonly
   */
  exports.LabourDurationUnitEnum = {
    /**
     * value: "days"
     * @const
     */
    "days": "days",
    /**
     * value: "months"
     * @const
     */
    "months": "months",
    /**
     * value: "years"
     * @const
     */
    "years": "years"  };

  /**
   * Allowed values for the <code>rmaShippingCoverage</code> property.
   * @enum {Number}
   * @readonly
   */
  exports.RmaShippingCoverageEnum = {
    /**
     * value: 0
     * @const
     */
    "0": 0,
    /**
     * value: 1
     * @const
     */
    "1": 1,
    /**
     * value: 2
     * @const
     */
    "2": 2  };

  /**
   * Allowed values for the <code>sellableDurationUnit</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SellableDurationUnitEnum = {
    /**
     * value: "days"
     * @const
     */
    "days": "days",
    /**
     * value: "months"
     * @const
     */
    "months": "months",
    /**
     * value: "years"
     * @const
     */
    "years": "years"  };

  /**
   * Allowed values for the <code>currencyCode</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CurrencyCodeEnum = {
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

  /**
   * Allowed values for the <code>billingPeriodUnit</code> property.
   * @enum {String}
   * @readonly
   */
  exports.BillingPeriodUnitEnum = {
    /**
     * value: "days"
     * @const
     */
    "days": "days",
    /**
     * value: "months"
     * @const
     */
    "months": "months",
    /**
     * value: "years"
     * @const
     */
    "years": "years"  };

  /**
   * Allowed values for the <code>countryCode</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CountryCodeEnum = {
    /**
     * value: "US"
     * @const
     */
    "US": "US",
    /**
     * value: "CA"
     * @const
     */
    "CA": "CA",
    /**
     * value: "IN"
     * @const
     */
    "IN": "IN",
    /**
     * value: "BD"
     * @const
     */
    "BD": "BD",
    /**
     * value: "PH"
     * @const
     */
    "PH": "PH",
    /**
     * value: "AU"
     * @const
     */
    "AU": "AU"  };


  return exports;
}));

