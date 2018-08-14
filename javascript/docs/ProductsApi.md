# WarrantyLifeApi.ProductsApi

All URIs are relative to *https://sandbox.warrantylife.com/api/201308*

Method | HTTP request | Description
------------- | ------------- | -------------
[**productsGet**](ProductsApi.md#productsGet) | **GET** /products | get a list of products
[**productsPost**](ProductsApi.md#productsPost) | **POST** /products | create new product
[**productsProductIdGet**](ProductsApi.md#productsProductIdGet) | **GET** /products/{productId} | get a single product by id


<a name="productsGet"></a>
# **productsGet**
> [Product] productsGet(opts)

get a list of products

### Example
```javascript
var WarrantyLifeApi = require('warranty_life_api');
var defaultClient = WarrantyLifeApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new WarrantyLifeApi.ProductsApi();
var opts = {
  'sku': "sku_example", // String | previously specified sku for product
  'q': "q_example" // String | full text search style query
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sku** | **String**| previously specified sku for product | [optional] 
 **q** | **String**| full text search style query | [optional] 

### Return type

[**[Product]**](Product.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="productsPost"></a>
# **productsPost**
> Product productsPost(product)

create new product

### Example
```javascript
var WarrantyLifeApi = require('warranty_life_api');
var defaultClient = WarrantyLifeApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new WarrantyLifeApi.ProductsApi();
var product = new WarrantyLifeApi.Product(); // Product | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productsPost(product, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product** | [**Product**](Product.md)|  | 

### Return type

[**Product**](Product.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="productsProductIdGet"></a>
# **productsProductIdGet**
> Product productsProductIdGet(productId)

get a single product by id

### Example
```javascript
var WarrantyLifeApi = require('warranty_life_api');
var defaultClient = WarrantyLifeApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new WarrantyLifeApi.ProductsApi();
var productId = "productId_example"; // String | Id for the product
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productsProductIdGet(productId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| Id for the product | 

### Return type

[**Product**](Product.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

