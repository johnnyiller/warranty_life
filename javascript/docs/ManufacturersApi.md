# WarrantyLife.ManufacturersApi

All URIs are relative to *https://sandbox.warrantylife.com/api/201308*

Method | HTTP request | Description
------------- | ------------- | -------------
[**manufacturersGet**](ManufacturersApi.md#manufacturersGet) | **GET** /manufacturers | get list of manufacturers
[**manufacturersManufacturerIdGet**](ManufacturersApi.md#manufacturersManufacturerIdGet) | **GET** /manufacturers/{manufacturerId} | specific manufacturer from warranty life id
[**manufacturersPost**](ManufacturersApi.md#manufacturersPost) | **POST** /manufacturers | create new manufacturer


<a name="manufacturersGet"></a>
# **manufacturersGet**
> [Manufacturer] manufacturersGet(opts)

get list of manufacturers

### Example
```javascript
var WarrantyLife = require('warranty_life');
var defaultClient = WarrantyLife.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new WarrantyLife.ManufacturersApi();
var opts = {
  'name': "name_example", // String | 
  'startAt': "startAt_example", // String | 
  'limit': 56 // Number | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.manufacturersGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**|  | [optional] 
 **startAt** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**[Manufacturer]**](Manufacturer.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="manufacturersManufacturerIdGet"></a>
# **manufacturersManufacturerIdGet**
> Manufacturer manufacturersManufacturerIdGet(manufacturerId)

specific manufacturer from warranty life id

### Example
```javascript
var WarrantyLife = require('warranty_life');
var defaultClient = WarrantyLife.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new WarrantyLife.ManufacturersApi();
var manufacturerId = "manufacturerId_example"; // String | Id for the manufacterer
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.manufacturersManufacturerIdGet(manufacturerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **manufacturerId** | **String**| Id for the manufacterer | 

### Return type

[**Manufacturer**](Manufacturer.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="manufacturersPost"></a>
# **manufacturersPost**
> Manufacturer manufacturersPost(manufacturer)

create new manufacturer

### Example
```javascript
var WarrantyLife = require('warranty_life');
var defaultClient = WarrantyLife.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new WarrantyLife.ManufacturersApi();
var manufacturer = new WarrantyLife.Manufacturer(); // Manufacturer | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.manufacturersPost(manufacturer, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **manufacturer** | [**Manufacturer**](Manufacturer.md)|  | 

### Return type

[**Manufacturer**](Manufacturer.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

