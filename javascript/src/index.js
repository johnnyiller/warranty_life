/**
 * Warranty Life API
 * Warranty life Api
 *
 * OpenAPI spec version: 1.0.7
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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Body', 'model/Category', 'model/Customer', 'model/InlineResponse403', 'model/Item', 'model/Manufacturer', 'model/Product', 'model/VoucherBatch', 'model/Warranty', 'model/WarrantyPlan', 'api/CategoriesApi', 'api/CustomerApi', 'api/ItemsApi', 'api/ManufacturersApi', 'api/ProductsApi', 'api/VoucherBatchApi', 'api/WarrantiesApi', 'api/WarrantyPlansApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Body'), require('./model/Category'), require('./model/Customer'), require('./model/InlineResponse403'), require('./model/Item'), require('./model/Manufacturer'), require('./model/Product'), require('./model/VoucherBatch'), require('./model/Warranty'), require('./model/WarrantyPlan'), require('./api/CategoriesApi'), require('./api/CustomerApi'), require('./api/ItemsApi'), require('./api/ManufacturersApi'), require('./api/ProductsApi'), require('./api/VoucherBatchApi'), require('./api/WarrantiesApi'), require('./api/WarrantyPlansApi'));
  }
}(function(ApiClient, Body, Category, Customer, InlineResponse403, Item, Manufacturer, Product, VoucherBatch, Warranty, WarrantyPlan, CategoriesApi, CustomerApi, ItemsApi, ManufacturersApi, ProductsApi, VoucherBatchApi, WarrantiesApi, WarrantyPlansApi) {
  'use strict';

  /**
   * Warranty_life_Api.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var WarrantyLifeApi = require('index'); // See note below*.
   * var xxxSvc = new WarrantyLifeApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new WarrantyLifeApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new WarrantyLifeApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new WarrantyLifeApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.7
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Body model constructor.
     * @property {module:model/Body}
     */
    Body: Body,
    /**
     * The Category model constructor.
     * @property {module:model/Category}
     */
    Category: Category,
    /**
     * The Customer model constructor.
     * @property {module:model/Customer}
     */
    Customer: Customer,
    /**
     * The InlineResponse403 model constructor.
     * @property {module:model/InlineResponse403}
     */
    InlineResponse403: InlineResponse403,
    /**
     * The Item model constructor.
     * @property {module:model/Item}
     */
    Item: Item,
    /**
     * The Manufacturer model constructor.
     * @property {module:model/Manufacturer}
     */
    Manufacturer: Manufacturer,
    /**
     * The Product model constructor.
     * @property {module:model/Product}
     */
    Product: Product,
    /**
     * The VoucherBatch model constructor.
     * @property {module:model/VoucherBatch}
     */
    VoucherBatch: VoucherBatch,
    /**
     * The Warranty model constructor.
     * @property {module:model/Warranty}
     */
    Warranty: Warranty,
    /**
     * The WarrantyPlan model constructor.
     * @property {module:model/WarrantyPlan}
     */
    WarrantyPlan: WarrantyPlan,
    /**
     * The CategoriesApi service constructor.
     * @property {module:api/CategoriesApi}
     */
    CategoriesApi: CategoriesApi,
    /**
     * The CustomerApi service constructor.
     * @property {module:api/CustomerApi}
     */
    CustomerApi: CustomerApi,
    /**
     * The ItemsApi service constructor.
     * @property {module:api/ItemsApi}
     */
    ItemsApi: ItemsApi,
    /**
     * The ManufacturersApi service constructor.
     * @property {module:api/ManufacturersApi}
     */
    ManufacturersApi: ManufacturersApi,
    /**
     * The ProductsApi service constructor.
     * @property {module:api/ProductsApi}
     */
    ProductsApi: ProductsApi,
    /**
     * The VoucherBatchApi service constructor.
     * @property {module:api/VoucherBatchApi}
     */
    VoucherBatchApi: VoucherBatchApi,
    /**
     * The WarrantiesApi service constructor.
     * @property {module:api/WarrantiesApi}
     */
    WarrantiesApi: WarrantiesApi,
    /**
     * The WarrantyPlansApi service constructor.
     * @property {module:api/WarrantyPlansApi}
     */
    WarrantyPlansApi: WarrantyPlansApi
  };

  return exports;
}));
