export default {
    "name": "Medlife",
    "favicon": "https://www.commoninja.com/public/favicon.ico",
    "baseUrl": "",
    "unauthorizedRedirectUrl": '/#/login',
    "auth":{
        "type":"token",
        "method":{
            "login":{
                "url": "https://preprod-mlsso.medlife.com/sso/v1/login",
                "actualMethod": "post",
                "fields": [{
                  "name": "username",
                  "type": "text",
                  "value": "",
                  "placeholder": "Enter username",
                  "label": "username"
                },
                {
                  "name": "password",
                  "type": "password",
                  "value": "",
                  "placeholder": "Enter password",
                  "label": "password"
                },
                {
                  "name": "clientSecret",
                  "type": "hidden",
                  "value": "440c9e7d37745cbad530df01ae06f26a0743dff151b909fe",
                  "placeholder": "Enter password",
                  "label": "clientSecret"
                },
                {
                  "name": "clientId",
                  "type": "hidden",
                  "value": "1794776995607240",
                  "placeholder": "Enter password",
                  "label": "clientId"
                },
                {
                  "name": "grant_type",
                  "type": "hidden",
                  "value": "password",
                  "placeholder": "Enter password",
                  "label": "grant_type"
                }
              ]
            },
            "logout":{
                "url": "https://tesseract.medlife.com/oauth/v2/oauth/logout",
            }
      },
    },
    "pages": [
      {
        "name": "Clients",
        "id": "clients",
        "group": "SSO",
        "description": "Manage clients.",
        "methods": {
          "getAll": {
            "label": "Get All",
            "dataPath": "data",
            "url": "https://preprod-mlsso.medlife.com/sso/v1/client",
            "pagination":{
              "type":"buttons",
              "source": "query",
              "params":{
                "limit": {
                  "name": "limit"
                },
                "page":{
                  "name": "offset"
                }
              }
            },
            "queryParams": [
              {
                "name": "name",
                "value": "",
                "label": "Search",
                "type": "text",
              }
            ],
            "display": {
              "type": "table"
            },
            "fields": [
              {
                "name": "id",
                "type": "text",
                "label": "client Id"
              },
              {
                "name": "clientSecret",
                "type": "text",
                "label": "client Secret"
              },
              {
                "name": "name",
                "type": "text",
                "label": "Name"
              },
              {
                "name": "userType",
                "type": "text",
                "label": "userType"
              },
              {
                "name": "accessTokenLife",
                "type": "text",
                "label": "accessTokenLife"
              },
              {
                "name": "refreshTokenLife",
                "type": "text",
                "label": "refreshTokenLife"
              },
           {
                "name": "active",
                "type": "boolean",
                "label": "active"
              },
              {
                "name": "multipleTokenAllowed",
                "type": "boolean",
                "label": "multipleTokenAllowed?"
              },
              {
                "name": "createdAt",
                "type": "text",
                "label": "createdTime"
              }
            ]
          },
          "post": {
            "url": "/client",
            "fields": [
              {
                "name": "name",
                "type": "text",
                "label": "Name"
              },
              {
                "name": "userType",
                "label": "userType",
                "type": "select",
                "options": ["customer", "admin","doctor","doctorassistant","partner","campaign-users","qc-users","user"]
              },
              {
                "name": "accessTokenLife",
                "type": "integer",
                "label": "accessTokenLife"
              },
              {
                "name": "refreshTokenLife",
                "type": "integer",
                "label": "refreshTokenLife"
              },
              {
                "name": "multipleTokenAllowed",
                "type": "boolean",
                "label": "multipleTokenAllowed?"
              }
            ]
          },
          "delete": {
            "url": "/client/:id"
          },
          "getSingle": {
            "url": "/client/:clientId",
            "dataPath": "result.data[0]",
            "queryParams": [],
            "requestHeaders": {}
          },
          "put": {
            "url": "/client/:clientId",
            "fields": [
              {
                "name": "name",
                "type": "text",
                "label": "Name"
              },
              {
                "name": "userType",
                "label": "userType",
                "type": "select",
                "options": ["customer", "admin","doctor","doctorassistant","partner","campaign-users","qc-users","user"]
              },
              {
                "name": "accessTokenLife",
                "type": "integer",
                "label": "accessTokenLife"
              },
              {
                "name": "refreshTokenLife",
                "type": "integer",
                "label": "refreshTokenLife"
              },
            ]
          }
        }
      },
      {
        "name": "Roles",
        "id": "roles",
        "group": "SSO",
        "description": "Manage Roles.",
        "methods": {
          "getAll": {
            "label": "Get All",
            "dataPath": "data",
            "url": "https://preprod-mlsso.medlife.com/sso/v1/roles",
            "pagination":{
              "type":"buttons",
              "source": "query",
              "params":{
                "limit": {
                  "name": "limit"
                },
                "page":{
                  "name": "offset"
                }
              }
            },
            "queryParams": [
              {
                "name": "name",
                "value": "",
                "label": "Search",
                "type": "text",
              }
            ],
            "display": {
              "type": "table"
            },
            "fields": [
              {
                "name": "id",
                "type": "text",
                "label": "Id"
              },
              {
                "name": "name",
                "type": "text",
                "label": "Name"
              },
              {
                "name": "clientId",
                "type": "text",
                "label": "clientId"
              },
              // {
              //   "name": "clientName",
              //   "type": "text",
              //   "label": "clientName"
              // },
              {
                "name": "active",
                "type": "boolean",
                "label": "active"
              },
              {
                "name": "createdAt",
                "type": "text",
                "label": "created At"
              },
              {
                "name": "updatedAt",
                "type": "text",
                "label": "updated At"
              }
            ]
          },
          "post": {
            "url": "/roles",
            "fields": [
              {
                "name": "name",
                "type": "text",
                "label": "Name"
              },
              {
                "name": "clientId",
                "type": "text",
                "label": "clientId"
              },
              {
                "name": "active",
                "type": "boolean",
                "label": "active"
              }
            ]
          },
          // "delete": {
          //   "url": "/client/:clientId"
          // },
          "getSingle": {
            "url": "/roles/:_id",
            "dataPath": "data[0]",
            "queryParams": [],
            "requestHeaders": {}
          },
          "put": {
            "url": "/roles/:_id",
            "fields": [
              {
                "name": "name",
                "type": "text",
                "label": "Name"
              },
              {
                "name": "clientId",
                "type": "text",
                "label": "clientId"
              },
              {
                "name": "active",
                "type": "boolean",
                "label": "active"
              }
            ]
          }
        }
      },

      {
        "name": "Admins",
        "id": "admins",
        "group": "SSO",
        "description": "Manage Roles.",
        "methods": {
          "getAll": {
            "label": "Get All",
            "dataPath": "data",
            "url": "https://preprod-mlsso.medlife.com/sso/v1/profile/admins",
            "pagination":{
              "type":"buttons",
              "source": "query",
              "params":{
                "limit": {
                  "name": "limit"
                },
                "page":{
                  "name": "offset"
                }
              }
            },
            "queryParams": [
              {
                "name": "email",
                "value": "",
                "label": "email",
                "type": "text",
              },
              {
                "name": "mobile",
                "value": "",
                "label": "mobile",
                "type": "integer",
              }
            ],
            "display": {
              "type": "table"
            },
            "fields": [
              {
                "name": "id",
                "type": "text",
                "label": "Id"
              },
              {
                "name": "userId",
                "type": "text",
                "label": "userId"
              },
              {
                "name": "firstName",
                "type": "text",
                "label": "firstName"
              },
              {
                "name": "lastName",
                "type": "text",
                "label": "lastName"
              },
              {
                "name": "mobile",
                "type": "text",
                "label": "mobile"
              },
              {
                "name": "email",
                "type": "text",
                "label": "email"
              },
              {
                "name": "active",
                "type": "boolean",
                "label": "active"
              },
              {
                "name": "createdAt",
                "type": "text",
                "label": "created At"
              },
              {
                "name": "updatedAt",
                "type": "text",
                "label": "updated At"
              }
            ]
          },
          "post": {
            "url": "/roles",
            "fields": [
              {
                "name": "name",
                "type": "text",
                "label": "Name"
              },
              {
                "name": "clientId",
                "type": "text",
                "label": "clientId"
              },
              {
                "name": "active",
                "type": "boolean",
                "label": "active"
              }
            ]
          },
          // "delete": {
          //   "url": "/client/:clientId"
          // },
          "getSingle": {
            "url": "/roles/:_id",
            "dataPath": "data[0]",
            "queryParams": [],
            "requestHeaders": {}
          },
          "put": {
            "url": "/roles/:_id",
            "fields": [
              {
                "name": "name",
                "type": "text",
                "label": "Name"
              },
              {
                "name": "clientId",
                "type": "text",
                "label": "clientId"
              },
              {
                "name": "active",
                "type": "boolean",
                "label": "active"
              }
            ]
          }
        }
      },
{
        "name": "SMS Templates",
        "id": "notifications_sms_templates",
        "group": "Notifications",
        "description": "Manage SMS Templates",
        "methods": {
          "getAll": {
            "label": "Get All",
            "url": "https://preprod-rest.medlife.com/v2/notifications/v2/templates/sms",
            "pagination":{
              "type":"infinite-scroll",
              "source": "query",
              "params":{
                "limit": {
                  "name": "limit"
                },
                "page":{
                  "name": "offset"
                }
              }
            },
            "queryParams": [
              {
                "name": "name",
                "value": "",
                "label": "Search",
                "type": "text",
              }
            ],
            "display": {
              "type": "table"
            },
            "fields": [
              {
                "name": "id",
                "type": "text",
                "label": "id"
              },
              {
                "name": "name",
                "type": "text",
                "label": "name"
              },
              {
                "name": "body",
                "label": "body",
                "type": "text"
              },
             {
                "name": "createdBy",
                "type": "text",
                "label": "createdBy"
              },
              {
                "name": "lastModifiedBy",
                "type": "text",
                "label": "lastModifiedBy"
              }
            ]
          }

        }
      }
    ]
  }
  
