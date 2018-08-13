# WarrantyLife.WarrantyPlansApi

All URIs are relative to *https://sandbox.warrantylife.com/api/201308*

Method | HTTP request | Description
------------- | ------------- | -------------
[**warrantyPlansGet**](WarrantyPlansApi.md#warrantyPlansGet) | **GET** /warranty-plans | 
[**warrantyPlansWarrantyPlanIdGet**](WarrantyPlansApi.md#warrantyPlansWarrantyPlanIdGet) | **GET** /warranty-plans/{warrantyPlanId} | 


<a name="warrantyPlansGet"></a>
# **warrantyPlansGet**
> [WarrantyPlan] warrantyPlansGet(opts)



### Example
```javascript
var WarrantyLife = require('warranty_life');
var defaultClient = WarrantyLife.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new WarrantyLife.WarrantyPlansApi();
var opts = {
  'categoryId': "categoryId_example" // String | Id for the category you would like to retrieve
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.warrantyPlansGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **String**| Id for the category you would like to retrieve | [optional] 

### Return type

[**[WarrantyPlan]**](WarrantyPlan.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="warrantyPlansWarrantyPlanIdGet"></a>
# **warrantyPlansWarrantyPlanIdGet**
> [WarrantyPlan] warrantyPlansWarrantyPlanIdGet(warrantyPlanId)



### Example
```javascript
var WarrantyLife = require('warranty_life');
var defaultClient = WarrantyLife.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new WarrantyLife.WarrantyPlansApi();
var warrantyPlanId = "warrantyPlanId_example"; // String | Id for the warranty-plan you want to retrieve
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.warrantyPlansWarrantyPlanIdGet(warrantyPlanId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warrantyPlanId** | **String**| Id for the warranty-plan you want to retrieve | 

### Return type

[**[WarrantyPlan]**](WarrantyPlan.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

