export const data = {
    "data": [
      {
        "subcategory": "Bookcases",
        "d__2021sale": 26426.8805,
        "d__2022sale": 30354.0737
      },
      {
        "subcategory": "Phones",
        "d__2021sale": 79178.01,
        "d__2022sale": 105668.392
      },
      {
        "subcategory": "Tables",
        "d__2021sale": 60835.4105,
        "d__2022sale": 60999.2025
      },
      {
        "subcategory": "Binders",
        "d__2021sale": 51580.133,
        "d__2022sale": 73627.451
      },
      {
        "subcategory": "Storage",
        "d__2021sale": 58845.676,
        "d__2022sale": 69819.25
      },
      {
        "subcategory": "Accessories",
        "d__2021sale": 41895.854,
        "d__2022sale": 59946.232
      },
      {
        "subcategory": "Art",
        "d__2021sale": 6119.766,
        "d__2022sale": 9009.96
      },
      {
        "subcategory": "Copiers",
        "d__2021sale": 49599.41,
        "d__2022sale": 62916.668
      },
      {
        "subcategory": "Furnishings",
        "d__2021sale": 28638.004,
        "d__2022sale": 29262.53
      },
      {
        "subcategory": "Paper",
        "d__2021sale": 20728.804,
        "d__2022sale": 28173.53
      },
      {
        "subcategory": "Envelopes",
        "d__2021sale": 4745.41,
        "d__2022sale": 3378.574
      },
      {
        "subcategory": "Chairs",
        "d__2021sale": 85079.431,
        "d__2022sale": 97721.633
      },
      {
        "subcategory": "Appliances",
        "d__2021sale": 26164.235,
        "d__2022sale": 43095.932
      },
      {
        "subcategory": "Labels",
        "d__2021sale": 2910.16,
        "d__2022sale": 3987.026
      },
      {
        "subcategory": "Fasteners",
        "d__2021sale": 1001.934,
        "d__2022sale": 6161.714
      },
      {
        "subcategory": "Machines",
        "d__2021sale": 55906.886,
        "d__2022sale": 43887.875
      },
      {
        "subcategory": "Supplies",
        "d__2021sale": 14277.576,
        "d__2022sale": 16075.66
      }
    ],
    "rawParameters": [
      
    ],
    "includeExclude": [
      {
        "type": "includes",
        "appliedType": "date",
        "column": "ORDER_DATE",
        "table": "\"SUPERSTORE\".\"PUBLIC\".\"TRANSACTIONS_10K\"",
        "tableAlias": "",
        "value": [
          
        ],
        "meta": {
          "table": "\"SUPERSTORE\".\"PUBLIC\".\"TRANSACTIONS_10K\"",
          "colKey": "ORDER_DATE",
          "value": [
            {
              "startDate": "Fri Jan 01 2021 00:00:00 GMT+0000 (Coordinated Universal Time)",
              "endDate": "Fri Dec 31 2021 00:00:00 GMT+0000 (Coordinated Universal Time)",
              "text": "2021",
              "timex": "2021",
              "rawResult": {
                "start": 0,
                "end": 3,
                "resolution": {
                  "values": [
                    {
                      "timex": "2021",
                      "type": "daterange",
                      "start": "2021-01-01",
                      "end": "2022-01-01"
                    }
                  ]
                },
                "text": "2021",
                "typeName": "datetimeV2.daterange"
              }
            },
            {
              "startDate": "Sat Jan 01 2022 00:00:00 GMT+0000 (Coordinated Universal Time)",
              "endDate": "Sat Dec 31 2022 00:00:00 GMT+0000 (Coordinated Universal Time)",
              "text": "2022",
              "timex": "2022",
              "rawResult": {
                "start": 8,
                "end": 11,
                "resolution": {
                  "values": [
                    {
                      "timex": "2022",
                      "type": "daterange",
                      "start": "2022-01-01",
                      "end": "2023-01-01"
                    }
                  ]
                },
                "text": "2022",
                "typeName": "datetimeV2.daterange"
              }
            }
          ],
          "tableAlias": ""
        },
        "formattedValue": [
          {
            "startDate": "Fri Jan 01 2021 00:00:00 GMT+0000 (Coordinated Universal Time)",
            "endDate": "Fri Dec 31 2021 00:00:00 GMT+0000 (Coordinated Universal Time)",
            "text": "2021",
            "timex": "2021",
            "rawResult": {
              "start": 0,
              "end": 3,
              "resolution": {
                "values": [
                  {
                    "timex": "2021",
                    "type": "daterange",
                    "start": "2021-01-01",
                    "end": "2022-01-01"
                  }
                ]
              },
              "text": "2021",
              "typeName": "datetimeV2.daterange"
            }
          },
          {
            "startDate": "Sat Jan 01 2022 00:00:00 GMT+0000 (Coordinated Universal Time)",
            "endDate": "Sat Dec 31 2022 00:00:00 GMT+0000 (Coordinated Universal Time)",
            "text": "2022",
            "timex": "2022",
            "rawResult": {
              "start": 8,
              "end": 11,
              "resolution": {
                "values": [
                  {
                    "timex": "2022",
                    "type": "daterange",
                    "start": "2022-01-01",
                    "end": "2023-01-01"
                  }
                ]
              },
              "text": "2022",
              "typeName": "datetimeV2.daterange"
            }
          }
        ],
        "operator": "between"
      }
    ],
    "parameters": [
      {
        "start": 0,
        "end": 12,
        "key": "subcategory",
        "type": "columns",
        "oText": "sub category",
        "color": "",
        "meta": {
          "_colId": "\"SUPERSTORE\".\"PUBLIC\".\"TRANSACTIONS_10K\"_SUB_CATEGORY",
          "cid": "623572c3eda3ba2bee857750_default",
          "c": "",
          "c1": "",
          "synonym": "",
          "k1": [
            "sub category"
          ],
          "key": "SUB_CATEGORY",
          "type": "dimension",
          "isDefault": false,
          "defaultValue": "",
          "display": "SUB CATEGORY",
          "description": "",
          "isPrimary": false,
          "pi": false,
          "dataType": "string",
          "colType": "dimension",
          "isAdditive": true,
          "isHidden": false,
          "isNegative": false,
          "table": "\"SUPERSTORE\".\"PUBLIC\".\"TRANSACTIONS_10K\"",
          "format": "",
          "isCalculated": false,
          "isDeep": true,
          "isActive": true,
          "catalogDisplay": "default",
          "isFunction": false,
          "groups": [
            
          ],
          "plurals": [
            
          ],
          "singulars": [
            
          ],
          "tableAlias": ""
        },
        "display": "sub category",
        "appliedType": "",
        "columnType": "dimension"
      },
      {
        "type": "filters",
        "oText": "2021",
        "appliedType": "date",
        "meta": {
          "table": "\"SUPERSTORE\".\"PUBLIC\".\"TRANSACTIONS_10K\"",
          "colKey": "ORDER_DATE",
          "value": [
            {
              "startDate": "Fri Jan 01 2021 00:00:00 GMT+0000 (Coordinated Universal Time)",
              "endDate": "Fri Dec 31 2021 00:00:00 GMT+0000 (Coordinated Universal Time)",
              "text": "2021",
              "timex": "2021",
              "rawResult": {
                "start": 0,
                "end": 3,
                "resolution": {
                  "values": [
                    {
                      "timex": "2021",
                      "type": "daterange",
                      "start": "2021-01-01",
                      "end": "2022-01-01"
                    }
                  ]
                },
                "text": "2021",
                "typeName": "datetimeV2.daterange"
              }
            },
            {
              "startDate": "Sat Jan 01 2022 00:00:00 GMT+0000 (Coordinated Universal Time)",
              "endDate": "Sat Dec 31 2022 00:00:00 GMT+0000 (Coordinated Universal Time)",
              "text": "2022",
              "timex": "2022",
              "rawResult": {
                "start": 8,
                "end": 11,
                "resolution": {
                  "values": [
                    {
                      "timex": "2022",
                      "type": "daterange",
                      "start": "2022-01-01",
                      "end": "2023-01-01"
                    }
                  ]
                },
                "text": "2022",
                "typeName": "datetimeV2.daterange"
              }
            }
          ],
          "tableAlias": ""
        }
      },
      {
        "key": "d__2021sale",
        "meta": {
          "colType": "date",
          "table": "\"SUPERSTORE\".\"PUBLIC\".\"TRANSACTIONS_10K\"",
          "colKey": "ORDER_DATE",
          "format": "$0.0a",
          "tableAlias": ""
        },
        "operation": "BETWEEN",
        "value": [
          "Fri Jan 01 2021 00:00:00 GMT+0000 (Coordinated Universal Time)",
          "Fri Dec 31 2021 00:00:00 GMT+0000 (Coordinated Universal Time)"
        ],
        "timex": {
          "startDate": "Fri Jan 01 2021 00:00:00 GMT+0000 (Coordinated Universal Time)",
          "endDate": "Fri Dec 31 2021 00:00:00 GMT+0000 (Coordinated Universal Time)",
          "text": "2021",
          "timex": "2021",
          "rawResult": {
            "start": 20,
            "end": 23,
            "resolution": {
              "values": [
                {
                  "timex": "2021",
                  "type": "daterange",
                  "start": "2021-01-01",
                  "end": "2022-01-01"
                }
              ]
            },
            "text": "2021",
            "typeName": "datetimeV2.daterange"
          },
          "appliedType": "date"
        },
        "retainRelative": true,
        "appliedType": "date",
        "columnType": "measure",
        "type": "vs",
        "display": "2021 sale",
        "measure": {
          "start": 13,
          "end": 17,
          "key": "sale",
          "type": "columns",
          "oText": "sale",
          "color": "",
          "meta": {
            "_colId": "\"SUPERSTORE\".\"PUBLIC\".\"TRANSACTIONS_10K\"_SALES",
            "cid": "623572c3eda3ba2bee857750_default",
            "c": "",
            "c1": "",
            "synonym": "",
            "k1": [
              "sale"
            ],
            "key": "SALES",
            "type": "measure",
            "isDefault": true,
            "defaultValue": "",
            "display": "SALES",
            "description": "",
            "isPrimary": false,
            "pi": false,
            "dataType": "float",
            "colType": "measure",
            "isAdditive": true,
            "isHidden": false,
            "isNegative": false,
            "table": "\"SUPERSTORE\".\"PUBLIC\".\"TRANSACTIONS_10K\"",
            "format": "$0.0a",
            "isCalculated": false,
            "isDeep": false,
            "isActive": true,
            "catalogDisplay": "default",
            "isFunction": false,
            "groups": [
              
            ],
            "plurals": [
              
            ],
            "singulars": [
              
            ],
            "tableAlias": ""
          },
          "display": "sale",
          "appliedType": "",
          "columnType": "measure"
        }
      },
      {
        "key": "d__2022sale",
        "meta": {
          "colType": "date",
          "table": "\"SUPERSTORE\".\"PUBLIC\".\"TRANSACTIONS_10K\"",
          "colKey": "ORDER_DATE",
          "format": "$0.0a",
          "tableAlias": ""
        },
        "operation": "BETWEEN",
        "value": [
          "Sat Jan 01 2022 00:00:00 GMT+0000 (Coordinated Universal Time)",
          "Sat Dec 31 2022 00:00:00 GMT+0000 (Coordinated Universal Time)"
        ],
        "timex": {
          "startDate": "Sat Jan 01 2022 00:00:00 GMT+0000 (Coordinated Universal Time)",
          "endDate": "Sat Dec 31 2022 00:00:00 GMT+0000 (Coordinated Universal Time)",
          "text": "2022",
          "timex": "2022",
          "rawResult": {
            "start": 28,
            "end": 31,
            "resolution": {
              "values": [
                {
                  "timex": "2022",
                  "type": "daterange",
                  "start": "2022-01-01",
                  "end": "2023-01-01"
                }
              ]
            },
            "text": "2022",
            "typeName": "datetimeV2.daterange"
          },
          "appliedType": "date"
        },
        "retainRelative": true,
        "appliedType": "date",
        "columnType": "measure",
        "type": "vs",
        "display": "2022 sale",
        "measure": {
          "start": 13,
          "end": 17,
          "key": "sale",
          "type": "columns",
          "oText": "sale",
          "color": "",
          "meta": {
            "_colId": "\"SUPERSTORE\".\"PUBLIC\".\"TRANSACTIONS_10K\"_SALES",
            "cid": "623572c3eda3ba2bee857750_default",
            "c": "",
            "c1": "",
            "synonym": "",
            "k1": [
              "sale"
            ],
            "key": "SALES",
            "type": "measure",
            "isDefault": true,
            "defaultValue": "",
            "display": "SALES",
            "description": "",
            "isPrimary": false,
            "pi": false,
            "dataType": "float",
            "colType": "measure",
            "isAdditive": true,
            "isHidden": false,
            "isNegative": false,
            "table": "\"SUPERSTORE\".\"PUBLIC\".\"TRANSACTIONS_10K\"",
            "format": "$0.0a",
            "isCalculated": false,
            "isDeep": false,
            "isActive": true,
            "catalogDisplay": "default",
            "isFunction": false,
            "groups": [
              
            ],
            "plurals": [
              
            ],
            "singulars": [
              
            ],
            "tableAlias": ""
          },
          "display": "sale",
          "appliedType": "",
          "columnType": "measure"
        }
      },
      {
        "type": "pullFrom",
        "unmappedTable": [
          "\"SUPERSTORE\".\"PUBLIC\".\"TRANSACTIONS_10K\""
        ],
        "joinTables": [
          
        ],
        "value": [
          ""
        ]
      },
      {
        "type": "query",
        "value": "SELECT \"SUB_CATEGORY\" \"subcategory\", SUM (CASE WHEN  ORDER_DATE BETWEEN \n               '2021-01-01 12:00:00'  and '2021-12-31 12:00:00' THEN  SALES ELSE 0 END) d__2021sale ,SUM (CASE WHEN  ORDER_DATE BETWEEN \n               '2022-01-01 12:00:00'  and '2022-12-31 12:00:00' THEN  SALES ELSE 0 END) d__2022sale  from \"SUPERSTORE\".\"PUBLIC\".\"TRANSACTIONS_10K\"  WHERE 1=1 AND ( (ORDER_DATE BETWEEN '2021-01-01 00:00:00' AND '2021-12-31 23:59:59')  OR  (ORDER_DATE BETWEEN '2022-01-01 00:00:00' AND '2022-12-31 23:59:59') ) GROUP BY \"SUB_CATEGORY\" limit 2000 "
      }
    ],
    "hasError": false,
    "msg": null,
    "timings": [
      {
        "display": "NLP Processed",
        "header": "NLP",
        "measure": "sec",
        "delta1": "0.203",
        "delta": "0:203"
      },
      {
        "display": "Data Fetched",
        "header": "Fetched",
        "measure": "sec",
        "delta1": "0.0",
        "delta": "0:0"
      },
      {
        "display": "Data Processed",
        "header": "Processed",
        "measure": "sec",
        "delta1": "0.0",
        "delta": "0:0"
      },
      {
        "display": "total consumed",
        "header": "Total",
        "measure": "sec",
        "delta1": "1.156",
        "delta": "1:156"
      }
    ],
    "ignoredWords": [
      {
        "text": "vs",
        "tags": [
          "Noun",
          "Abbreviation",
          "Singular",
          "Value"
        ],
        "clean": "vs",
        "bestTag": "Abbreviation"
      }
    ]
  }