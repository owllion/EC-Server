export default{
  "$ref": "#/definitions/babel.types.InterfaceExtends",
  "definitions": {
    "babel.types.Identifier": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "Identifier"
          ]
        },
        "name": {
          "type": "string"
        },
        "decorators": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/babel.types.Decorator"
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "optional": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "typeAnnotation": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Noop"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.TypeAnnotation"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "name",
        "type"
      ]
    },
    "babel.types.Decorator": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "Decorator"
          ]
        },
        "expression": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "expression",
        "type"
      ]
    },
    "babel.types.ArrayExpression": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ArrayExpression"
          ]
        },
        "elements": {
          "type": "array",
          "items": {
            "anyOf": [
              {
                "$ref": "#/definitions/babel.types.ArrayExpression"
              },
              {
                "$ref": "#/definitions/babel.types.ArrowFunctionExpression"
              },
              {
                "$ref": "#/definitions/babel.types.AssignmentExpression"
              },
              {
                "$ref": "#/definitions/babel.types.AwaitExpression"
              },
              {
                "$ref": "#/definitions/babel.types.BigIntLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.BinaryExpression"
              },
              {
                "$ref": "#/definitions/babel.types.BindExpression"
              },
              {
                "$ref": "#/definitions/babel.types.BooleanLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.CallExpression"
              },
              {
                "$ref": "#/definitions/babel.types.ClassExpression"
              },
              {
                "$ref": "#/definitions/babel.types.ConditionalExpression"
              },
              {
                "$ref": "#/definitions/babel.types.DecimalLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.DoExpression"
              },
              {
                "$ref": "#/definitions/babel.types.FunctionExpression"
              },
              {
                "$ref": "#/definitions/babel.types.Identifier"
              },
              {
                "$ref": "#/definitions/babel.types.Import"
              },
              {
                "$ref": "#/definitions/babel.types.JSXElement"
              },
              {
                "$ref": "#/definitions/babel.types.JSXFragment"
              },
              {
                "$ref": "#/definitions/babel.types.LogicalExpression"
              },
              {
                "$ref": "#/definitions/babel.types.MemberExpression"
              },
              {
                "$ref": "#/definitions/babel.types.MetaProperty"
              },
              {
                "$ref": "#/definitions/babel.types.ModuleExpression"
              },
              {
                "$ref": "#/definitions/babel.types.NewExpression"
              },
              {
                "$ref": "#/definitions/babel.types.NullLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.NumericLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.ObjectExpression"
              },
              {
                "$ref": "#/definitions/babel.types.OptionalCallExpression"
              },
              {
                "$ref": "#/definitions/babel.types.OptionalMemberExpression"
              },
              {
                "$ref": "#/definitions/babel.types.ParenthesizedExpression"
              },
              {
                "$ref": "#/definitions/babel.types.PipelineBareFunction"
              },
              {
                "$ref": "#/definitions/babel.types.PipelinePrimaryTopicReference"
              },
              {
                "$ref": "#/definitions/babel.types.PipelineTopicExpression"
              },
              {
                "$ref": "#/definitions/babel.types.RecordExpression"
              },
              {
                "$ref": "#/definitions/babel.types.RegExpLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.SequenceExpression"
              },
              {
                "$ref": "#/definitions/babel.types.SpreadElement"
              },
              {
                "$ref": "#/definitions/babel.types.StringLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.Super"
              },
              {
                "$ref": "#/definitions/babel.types.TSAsExpression"
              },
              {
                "$ref": "#/definitions/babel.types.TSInstantiationExpression"
              },
              {
                "$ref": "#/definitions/babel.types.TSNonNullExpression"
              },
              {
                "$ref": "#/definitions/babel.types.TSTypeAssertion"
              },
              {
                "$ref": "#/definitions/babel.types.TaggedTemplateExpression"
              },
              {
                "$ref": "#/definitions/babel.types.TemplateLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.ThisExpression"
              },
              {
                "$ref": "#/definitions/babel.types.TopicReference"
              },
              {
                "$ref": "#/definitions/babel.types.TupleExpression"
              },
              {
                "$ref": "#/definitions/babel.types.TypeCastExpression"
              },
              {
                "$ref": "#/definitions/babel.types.UnaryExpression"
              },
              {
                "$ref": "#/definitions/babel.types.UpdateExpression"
              },
              {
                "$ref": "#/definitions/babel.types.YieldExpression"
              },
              {
                "type": "null"
              }
            ]
          }
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "elements",
        "type"
      ]
    },
    "babel.types.ArrowFunctionExpression": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ArrowFunctionExpression"
          ]
        },
        "params": {
          "type": "array",
          "items": {
            "anyOf": [
              {
                "$ref": "#/definitions/babel.types.ArrayPattern"
              },
              {
                "$ref": "#/definitions/babel.types.AssignmentPattern"
              },
              {
                "$ref": "#/definitions/babel.types.Identifier"
              },
              {
                "$ref": "#/definitions/babel.types.ObjectPattern"
              },
              {
                "$ref": "#/definitions/babel.types.RestElement"
              }
            ]
          }
        },
        "body": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.ArrayExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ArrowFunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AssignmentExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AwaitExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BigIntLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.BinaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BindExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BlockStatement"
            },
            {
              "$ref": "#/definitions/babel.types.BooleanLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.CallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ClassExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ConditionalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.DecimalLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.DoExpression"
            },
            {
              "$ref": "#/definitions/babel.types.FunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "$ref": "#/definitions/babel.types.Import"
            },
            {
              "$ref": "#/definitions/babel.types.JSXElement"
            },
            {
              "$ref": "#/definitions/babel.types.JSXFragment"
            },
            {
              "$ref": "#/definitions/babel.types.LogicalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MetaProperty"
            },
            {
              "$ref": "#/definitions/babel.types.ModuleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NewExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NullLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.NumericLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalCallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalMemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ParenthesizedExpression"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineBareFunction"
            },
            {
              "$ref": "#/definitions/babel.types.PipelinePrimaryTopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineTopicExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RecordExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RegExpLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.SequenceExpression"
            },
            {
              "$ref": "#/definitions/babel.types.StringLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.Super"
            },
            {
              "$ref": "#/definitions/babel.types.TSAsExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSInstantiationExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSNonNullExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAssertion"
            },
            {
              "$ref": "#/definitions/babel.types.TaggedTemplateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TemplateLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ThisExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.TupleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TypeCastExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UnaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UpdateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.YieldExpression"
            }
          ]
        },
        "async": {
          "type": "boolean"
        },
        "expression": {
          "type": "boolean"
        },
        "generator": {
          "type": "boolean"
        },
        "predicate": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.DeclaredPredicate"
            },
            {
              "$ref": "#/definitions/babel.types.InferredPredicate"
            },
            {
              "type": "null"
            }
          ]
        },
        "returnType": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Noop"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.TypeAnnotation"
            },
            {
              "type": "null"
            }
          ]
        },
        "typeParameters": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Noop"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeParameterDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.TypeParameterDeclaration"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "body",
        "expression",
        "params",
        "type"
      ]
    },
    "babel.types.ArrayPattern": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ArrayPattern"
          ]
        },
        "elements": {
          "type": "array",
          "items": {
            "anyOf": [
              {
                "$ref": "#/definitions/babel.types.ArrayPattern"
              },
              {
                "$ref": "#/definitions/babel.types.AssignmentPattern"
              },
              {
                "$ref": "#/definitions/babel.types.Identifier"
              },
              {
                "$ref": "#/definitions/babel.types.ObjectPattern"
              },
              {
                "$ref": "#/definitions/babel.types.RestElement"
              },
              {
                "$ref": "#/definitions/babel.types.TSAsExpression"
              },
              {
                "$ref": "#/definitions/babel.types.TSNonNullExpression"
              },
              {
                "$ref": "#/definitions/babel.types.TSTypeAssertion"
              },
              {
                "type": "null"
              }
            ]
          }
        },
        "decorators": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/babel.types.Decorator"
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "optional": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "typeAnnotation": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Noop"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.TypeAnnotation"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "elements",
        "type"
      ]
    },
    "babel.types.AssignmentPattern": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "AssignmentPattern"
          ]
        },
        "left": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.ArrayPattern"
            },
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "$ref": "#/definitions/babel.types.MemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectPattern"
            },
            {
              "$ref": "#/definitions/babel.types.TSAsExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSNonNullExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAssertion"
            }
          ]
        },
        "right": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "decorators": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/babel.types.Decorator"
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "typeAnnotation": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Noop"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.TypeAnnotation"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "left",
        "right",
        "type"
      ]
    },
    "babel.types.MemberExpression": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "MemberExpression"
          ]
        },
        "object": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "property": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.ArrayExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ArrowFunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AssignmentExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AwaitExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BigIntLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.BinaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BindExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BooleanLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.CallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ClassExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ConditionalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.DecimalLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.DoExpression"
            },
            {
              "$ref": "#/definitions/babel.types.FunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "$ref": "#/definitions/babel.types.Import"
            },
            {
              "$ref": "#/definitions/babel.types.JSXElement"
            },
            {
              "$ref": "#/definitions/babel.types.JSXFragment"
            },
            {
              "$ref": "#/definitions/babel.types.LogicalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MetaProperty"
            },
            {
              "$ref": "#/definitions/babel.types.ModuleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NewExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NullLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.NumericLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalCallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalMemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ParenthesizedExpression"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineBareFunction"
            },
            {
              "$ref": "#/definitions/babel.types.PipelinePrimaryTopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineTopicExpression"
            },
            {
              "$ref": "#/definitions/babel.types.PrivateName"
            },
            {
              "$ref": "#/definitions/babel.types.RecordExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RegExpLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.SequenceExpression"
            },
            {
              "$ref": "#/definitions/babel.types.StringLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.Super"
            },
            {
              "$ref": "#/definitions/babel.types.TSAsExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSInstantiationExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSNonNullExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAssertion"
            },
            {
              "$ref": "#/definitions/babel.types.TaggedTemplateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TemplateLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ThisExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.TupleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TypeCastExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UnaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UpdateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.YieldExpression"
            }
          ]
        },
        "computed": {
          "type": "boolean"
        },
        "optional": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "computed",
        "object",
        "property",
        "type"
      ]
    },
    "babel.types.Expression": {
      "anyOf": [
        {
          "$ref": "#/definitions/babel.types.ArrayExpression"
        },
        {
          "$ref": "#/definitions/babel.types.ArrowFunctionExpression"
        },
        {
          "$ref": "#/definitions/babel.types.AssignmentExpression"
        },
        {
          "$ref": "#/definitions/babel.types.AwaitExpression"
        },
        {
          "$ref": "#/definitions/babel.types.BigIntLiteral"
        },
        {
          "$ref": "#/definitions/babel.types.BinaryExpression"
        },
        {
          "$ref": "#/definitions/babel.types.BindExpression"
        },
        {
          "$ref": "#/definitions/babel.types.BooleanLiteral"
        },
        {
          "$ref": "#/definitions/babel.types.CallExpression"
        },
        {
          "$ref": "#/definitions/babel.types.ClassExpression"
        },
        {
          "$ref": "#/definitions/babel.types.ConditionalExpression"
        },
        {
          "$ref": "#/definitions/babel.types.DecimalLiteral"
        },
        {
          "$ref": "#/definitions/babel.types.DoExpression"
        },
        {
          "$ref": "#/definitions/babel.types.FunctionExpression"
        },
        {
          "$ref": "#/definitions/babel.types.Identifier"
        },
        {
          "$ref": "#/definitions/babel.types.Import"
        },
        {
          "$ref": "#/definitions/babel.types.JSXElement"
        },
        {
          "$ref": "#/definitions/babel.types.JSXFragment"
        },
        {
          "$ref": "#/definitions/babel.types.LogicalExpression"
        },
        {
          "$ref": "#/definitions/babel.types.MemberExpression"
        },
        {
          "$ref": "#/definitions/babel.types.MetaProperty"
        },
        {
          "$ref": "#/definitions/babel.types.ModuleExpression"
        },
        {
          "$ref": "#/definitions/babel.types.NewExpression"
        },
        {
          "$ref": "#/definitions/babel.types.NullLiteral"
        },
        {
          "$ref": "#/definitions/babel.types.NumericLiteral"
        },
        {
          "$ref": "#/definitions/babel.types.ObjectExpression"
        },
        {
          "$ref": "#/definitions/babel.types.OptionalCallExpression"
        },
        {
          "$ref": "#/definitions/babel.types.OptionalMemberExpression"
        },
        {
          "$ref": "#/definitions/babel.types.ParenthesizedExpression"
        },
        {
          "$ref": "#/definitions/babel.types.PipelineBareFunction"
        },
        {
          "$ref": "#/definitions/babel.types.PipelinePrimaryTopicReference"
        },
        {
          "$ref": "#/definitions/babel.types.PipelineTopicExpression"
        },
        {
          "$ref": "#/definitions/babel.types.RecordExpression"
        },
        {
          "$ref": "#/definitions/babel.types.RegExpLiteral"
        },
        {
          "$ref": "#/definitions/babel.types.SequenceExpression"
        },
        {
          "$ref": "#/definitions/babel.types.StringLiteral"
        },
        {
          "$ref": "#/definitions/babel.types.Super"
        },
        {
          "$ref": "#/definitions/babel.types.TSAsExpression"
        },
        {
          "$ref": "#/definitions/babel.types.TSInstantiationExpression"
        },
        {
          "$ref": "#/definitions/babel.types.TSNonNullExpression"
        },
        {
          "$ref": "#/definitions/babel.types.TSTypeAssertion"
        },
        {
          "$ref": "#/definitions/babel.types.TaggedTemplateExpression"
        },
        {
          "$ref": "#/definitions/babel.types.TemplateLiteral"
        },
        {
          "$ref": "#/definitions/babel.types.ThisExpression"
        },
        {
          "$ref": "#/definitions/babel.types.TopicReference"
        },
        {
          "$ref": "#/definitions/babel.types.TupleExpression"
        },
        {
          "$ref": "#/definitions/babel.types.TypeCastExpression"
        },
        {
          "$ref": "#/definitions/babel.types.UnaryExpression"
        },
        {
          "$ref": "#/definitions/babel.types.UpdateExpression"
        },
        {
          "$ref": "#/definitions/babel.types.YieldExpression"
        }
      ]
    },
    "babel.types.AssignmentExpression": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "AssignmentExpression"
          ]
        },
        "operator": {
          "type": "string"
        },
        "left": {
          "$ref": "#/definitions/babel.types.LVal"
        },
        "right": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "left",
        "operator",
        "right",
        "type"
      ]
    },
    "babel.types.ObjectPattern": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ObjectPattern"
          ]
        },
        "properties": {
          "type": "array",
          "items": {
            "anyOf": [
              {
                "$ref": "#/definitions/babel.types.ObjectProperty"
              },
              {
                "$ref": "#/definitions/babel.types.RestElement"
              }
            ]
          }
        },
        "decorators": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/babel.types.Decorator"
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "typeAnnotation": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Noop"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.TypeAnnotation"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "properties",
        "type"
      ]
    },
    "babel.types.ObjectProperty": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ObjectProperty"
          ]
        },
        "key": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.ArrayExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ArrowFunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AssignmentExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AwaitExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BigIntLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.BinaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BindExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BooleanLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.CallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ClassExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ConditionalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.DecimalLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.DoExpression"
            },
            {
              "$ref": "#/definitions/babel.types.FunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "$ref": "#/definitions/babel.types.Import"
            },
            {
              "$ref": "#/definitions/babel.types.JSXElement"
            },
            {
              "$ref": "#/definitions/babel.types.JSXFragment"
            },
            {
              "$ref": "#/definitions/babel.types.LogicalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MetaProperty"
            },
            {
              "$ref": "#/definitions/babel.types.ModuleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NewExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NullLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.NumericLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalCallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalMemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ParenthesizedExpression"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineBareFunction"
            },
            {
              "$ref": "#/definitions/babel.types.PipelinePrimaryTopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineTopicExpression"
            },
            {
              "$ref": "#/definitions/babel.types.PrivateName"
            },
            {
              "$ref": "#/definitions/babel.types.RecordExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RegExpLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.SequenceExpression"
            },
            {
              "$ref": "#/definitions/babel.types.StringLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.Super"
            },
            {
              "$ref": "#/definitions/babel.types.TSAsExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSInstantiationExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSNonNullExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAssertion"
            },
            {
              "$ref": "#/definitions/babel.types.TaggedTemplateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TemplateLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ThisExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.TupleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TypeCastExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UnaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UpdateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.YieldExpression"
            }
          ]
        },
        "value": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.ArrayExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ArrayPattern"
            },
            {
              "$ref": "#/definitions/babel.types.ArrowFunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AssignmentExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AssignmentPattern"
            },
            {
              "$ref": "#/definitions/babel.types.AwaitExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BigIntLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.BinaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BindExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BooleanLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.CallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ClassExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ConditionalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.DecimalLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.DoExpression"
            },
            {
              "$ref": "#/definitions/babel.types.FunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "$ref": "#/definitions/babel.types.Import"
            },
            {
              "$ref": "#/definitions/babel.types.JSXElement"
            },
            {
              "$ref": "#/definitions/babel.types.JSXFragment"
            },
            {
              "$ref": "#/definitions/babel.types.LogicalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MetaProperty"
            },
            {
              "$ref": "#/definitions/babel.types.ModuleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NewExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NullLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.NumericLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectPattern"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalCallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalMemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ParenthesizedExpression"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineBareFunction"
            },
            {
              "$ref": "#/definitions/babel.types.PipelinePrimaryTopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineTopicExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RecordExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RegExpLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.RestElement"
            },
            {
              "$ref": "#/definitions/babel.types.SequenceExpression"
            },
            {
              "$ref": "#/definitions/babel.types.StringLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.Super"
            },
            {
              "$ref": "#/definitions/babel.types.TSAsExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSInstantiationExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSNonNullExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAssertion"
            },
            {
              "$ref": "#/definitions/babel.types.TaggedTemplateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TemplateLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ThisExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.TupleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TypeCastExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UnaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UpdateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.YieldExpression"
            }
          ]
        },
        "computed": {
          "type": "boolean"
        },
        "shorthand": {
          "type": "boolean"
        },
        "decorators": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/babel.types.Decorator"
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "computed",
        "key",
        "shorthand",
        "type",
        "value"
      ]
    },
    "babel.types.AwaitExpression": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "AwaitExpression"
          ]
        },
        "argument": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "argument",
        "type"
      ]
    },
    "babel.types.CommentBlock": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "CommentBlock"
          ]
        },
        "value": {
          "type": "string"
        },
        "start": {
          "type": "number"
        },
        "end": {
          "type": "number"
        },
        "loc": {
          "$ref": "#/definitions/babel.types.SourceLocation"
        },
        "ignore": {
          "type": "boolean"
        }
      },
      "required": [
        "type",
        "value"
      ]
    },
    "babel.types.SourceLocation": {
      "type": "object",
      "properties": {
        "start": {
          "type": "object",
          "properties": {
            "line": {
              "type": "number"
            },
            "column": {
              "type": "number"
            }
          },
          "required": [
            "column",
            "line"
          ]
        },
        "end": {
          "type": "object",
          "properties": {
            "line": {
              "type": "number"
            },
            "column": {
              "type": "number"
            }
          },
          "required": [
            "column",
            "line"
          ]
        }
      },
      "required": [
        "end",
        "start"
      ]
    },
    "babel.types.CommentLine": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "CommentLine"
          ]
        },
        "value": {
          "type": "string"
        },
        "start": {
          "type": "number"
        },
        "end": {
          "type": "number"
        },
        "loc": {
          "$ref": "#/definitions/babel.types.SourceLocation"
        },
        "ignore": {
          "type": "boolean"
        }
      },
      "required": [
        "type",
        "value"
      ]
    },
    "Record<string,unknown>": {
      "type": "object"
    },
    "babel.types.BigIntLiteral": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "BigIntLiteral"
          ]
        },
        "value": {
          "type": "string"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type",
        "value"
      ]
    },
    "babel.types.BinaryExpression": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "BinaryExpression"
          ]
        },
        "operator": {
          "enum": [
            "!=",
            "!==",
            "%",
            "&",
            "*",
            "**",
            "+",
            "-",
            "/",
            "<",
            "<<",
            "<=",
            "==",
            "===",
            ">",
            ">=",
            ">>",
            ">>>",
            "^",
            "in",
            "instanceof",
            "|",
            "|>"
          ],
          "type": "string"
        },
        "left": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.ArrayExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ArrowFunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AssignmentExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AwaitExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BigIntLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.BinaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BindExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BooleanLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.CallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ClassExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ConditionalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.DecimalLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.DoExpression"
            },
            {
              "$ref": "#/definitions/babel.types.FunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "$ref": "#/definitions/babel.types.Import"
            },
            {
              "$ref": "#/definitions/babel.types.JSXElement"
            },
            {
              "$ref": "#/definitions/babel.types.JSXFragment"
            },
            {
              "$ref": "#/definitions/babel.types.LogicalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MetaProperty"
            },
            {
              "$ref": "#/definitions/babel.types.ModuleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NewExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NullLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.NumericLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalCallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalMemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ParenthesizedExpression"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineBareFunction"
            },
            {
              "$ref": "#/definitions/babel.types.PipelinePrimaryTopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineTopicExpression"
            },
            {
              "$ref": "#/definitions/babel.types.PrivateName"
            },
            {
              "$ref": "#/definitions/babel.types.RecordExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RegExpLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.SequenceExpression"
            },
            {
              "$ref": "#/definitions/babel.types.StringLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.Super"
            },
            {
              "$ref": "#/definitions/babel.types.TSAsExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSInstantiationExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSNonNullExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAssertion"
            },
            {
              "$ref": "#/definitions/babel.types.TaggedTemplateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TemplateLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ThisExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.TupleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TypeCastExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UnaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UpdateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.YieldExpression"
            }
          ]
        },
        "right": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "left",
        "operator",
        "right",
        "type"
      ]
    },
    "babel.types.BindExpression": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "BindExpression"
          ]
        },
        "object": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "callee": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "callee",
        "object",
        "type"
      ]
    },
    "babel.types.BooleanLiteral": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "BooleanLiteral"
          ]
        },
        "value": {
          "type": "boolean"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type",
        "value"
      ]
    },
    "babel.types.CallExpression": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "CallExpression"
          ]
        },
        "callee": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.ArrayExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ArrowFunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AssignmentExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AwaitExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BigIntLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.BinaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BindExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BooleanLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.CallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ClassExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ConditionalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.DecimalLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.DoExpression"
            },
            {
              "$ref": "#/definitions/babel.types.FunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "$ref": "#/definitions/babel.types.Import"
            },
            {
              "$ref": "#/definitions/babel.types.JSXElement"
            },
            {
              "$ref": "#/definitions/babel.types.JSXFragment"
            },
            {
              "$ref": "#/definitions/babel.types.LogicalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MetaProperty"
            },
            {
              "$ref": "#/definitions/babel.types.ModuleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NewExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NullLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.NumericLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalCallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalMemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ParenthesizedExpression"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineBareFunction"
            },
            {
              "$ref": "#/definitions/babel.types.PipelinePrimaryTopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineTopicExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RecordExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RegExpLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.SequenceExpression"
            },
            {
              "$ref": "#/definitions/babel.types.StringLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.Super"
            },
            {
              "$ref": "#/definitions/babel.types.TSAsExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSInstantiationExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSNonNullExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAssertion"
            },
            {
              "$ref": "#/definitions/babel.types.TaggedTemplateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TemplateLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ThisExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.TupleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TypeCastExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UnaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UpdateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.V8IntrinsicIdentifier"
            },
            {
              "$ref": "#/definitions/babel.types.YieldExpression"
            }
          ]
        },
        "arguments": {
          "type": "array",
          "items": {
            "anyOf": [
              {
                "$ref": "#/definitions/babel.types.ArgumentPlaceholder"
              },
              {
                "$ref": "#/definitions/babel.types.ArrayExpression"
              },
              {
                "$ref": "#/definitions/babel.types.ArrowFunctionExpression"
              },
              {
                "$ref": "#/definitions/babel.types.AssignmentExpression"
              },
              {
                "$ref": "#/definitions/babel.types.AwaitExpression"
              },
              {
                "$ref": "#/definitions/babel.types.BigIntLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.BinaryExpression"
              },
              {
                "$ref": "#/definitions/babel.types.BindExpression"
              },
              {
                "$ref": "#/definitions/babel.types.BooleanLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.CallExpression"
              },
              {
                "$ref": "#/definitions/babel.types.ClassExpression"
              },
              {
                "$ref": "#/definitions/babel.types.ConditionalExpression"
              },
              {
                "$ref": "#/definitions/babel.types.DecimalLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.DoExpression"
              },
              {
                "$ref": "#/definitions/babel.types.FunctionExpression"
              },
              {
                "$ref": "#/definitions/babel.types.Identifier"
              },
              {
                "$ref": "#/definitions/babel.types.Import"
              },
              {
                "$ref": "#/definitions/babel.types.JSXElement"
              },
              {
                "$ref": "#/definitions/babel.types.JSXFragment"
              },
              {
                "$ref": "#/definitions/babel.types.JSXNamespacedName"
              },
              {
                "$ref": "#/definitions/babel.types.LogicalExpression"
              },
              {
                "$ref": "#/definitions/babel.types.MemberExpression"
              },
              {
                "$ref": "#/definitions/babel.types.MetaProperty"
              },
              {
                "$ref": "#/definitions/babel.types.ModuleExpression"
              },
              {
                "$ref": "#/definitions/babel.types.NewExpression"
              },
              {
                "$ref": "#/definitions/babel.types.NullLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.NumericLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.ObjectExpression"
              },
              {
                "$ref": "#/definitions/babel.types.OptionalCallExpression"
              },
              {
                "$ref": "#/definitions/babel.types.OptionalMemberExpression"
              },
              {
                "$ref": "#/definitions/babel.types.ParenthesizedExpression"
              },
              {
                "$ref": "#/definitions/babel.types.PipelineBareFunction"
              },
              {
                "$ref": "#/definitions/babel.types.PipelinePrimaryTopicReference"
              },
              {
                "$ref": "#/definitions/babel.types.PipelineTopicExpression"
              },
              {
                "$ref": "#/definitions/babel.types.RecordExpression"
              },
              {
                "$ref": "#/definitions/babel.types.RegExpLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.SequenceExpression"
              },
              {
                "$ref": "#/definitions/babel.types.SpreadElement"
              },
              {
                "$ref": "#/definitions/babel.types.StringLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.Super"
              },
              {
                "$ref": "#/definitions/babel.types.TSAsExpression"
              },
              {
                "$ref": "#/definitions/babel.types.TSInstantiationExpression"
              },
              {
                "$ref": "#/definitions/babel.types.TSNonNullExpression"
              },
              {
                "$ref": "#/definitions/babel.types.TSTypeAssertion"
              },
              {
                "$ref": "#/definitions/babel.types.TaggedTemplateExpression"
              },
              {
                "$ref": "#/definitions/babel.types.TemplateLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.ThisExpression"
              },
              {
                "$ref": "#/definitions/babel.types.TopicReference"
              },
              {
                "$ref": "#/definitions/babel.types.TupleExpression"
              },
              {
                "$ref": "#/definitions/babel.types.TypeCastExpression"
              },
              {
                "$ref": "#/definitions/babel.types.UnaryExpression"
              },
              {
                "$ref": "#/definitions/babel.types.UpdateExpression"
              },
              {
                "$ref": "#/definitions/babel.types.YieldExpression"
              }
            ]
          }
        },
        "optional": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "typeArguments": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TypeParameterInstantiation"
            },
            {
              "type": "null"
            }
          ]
        },
        "typeParameters": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TSTypeParameterInstantiation"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "arguments",
        "callee",
        "type"
      ]
    },
    "babel.types.ClassExpression": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ClassExpression"
          ]
        },
        "id": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "type": "null"
            }
          ]
        },
        "superClass": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.ArrayExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ArrowFunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AssignmentExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AwaitExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BigIntLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.BinaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BindExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BooleanLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.CallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ClassExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ConditionalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.DecimalLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.DoExpression"
            },
            {
              "$ref": "#/definitions/babel.types.FunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "$ref": "#/definitions/babel.types.Import"
            },
            {
              "$ref": "#/definitions/babel.types.JSXElement"
            },
            {
              "$ref": "#/definitions/babel.types.JSXFragment"
            },
            {
              "$ref": "#/definitions/babel.types.LogicalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MetaProperty"
            },
            {
              "$ref": "#/definitions/babel.types.ModuleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NewExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NullLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.NumericLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalCallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalMemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ParenthesizedExpression"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineBareFunction"
            },
            {
              "$ref": "#/definitions/babel.types.PipelinePrimaryTopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineTopicExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RecordExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RegExpLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.SequenceExpression"
            },
            {
              "$ref": "#/definitions/babel.types.StringLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.Super"
            },
            {
              "$ref": "#/definitions/babel.types.TSAsExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSInstantiationExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSNonNullExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAssertion"
            },
            {
              "$ref": "#/definitions/babel.types.TaggedTemplateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TemplateLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ThisExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.TupleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TypeCastExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UnaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UpdateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.YieldExpression"
            },
            {
              "type": "null"
            }
          ]
        },
        "body": {
          "$ref": "#/definitions/babel.types.ClassBody"
        },
        "decorators": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/babel.types.Decorator"
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "implements": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.ClassImplements"
                  },
                  {
                    "$ref": "#/definitions/babel.types.TSExpressionWithTypeArguments"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "mixins": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.InterfaceExtends"
            },
            {
              "type": "null"
            }
          ]
        },
        "superTypeParameters": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TSTypeParameterInstantiation"
            },
            {
              "$ref": "#/definitions/babel.types.TypeParameterInstantiation"
            },
            {
              "type": "null"
            }
          ]
        },
        "typeParameters": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Noop"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeParameterDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.TypeParameterDeclaration"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "body",
        "type"
      ]
    },
    "babel.types.ConditionalExpression": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ConditionalExpression"
          ]
        },
        "test": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "consequent": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "alternate": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "alternate",
        "consequent",
        "test",
        "type"
      ]
    },
    "babel.types.DecimalLiteral": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "DecimalLiteral"
          ]
        },
        "value": {
          "type": "string"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type",
        "value"
      ]
    },
    "babel.types.DoExpression": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "DoExpression"
          ]
        },
        "body": {
          "$ref": "#/definitions/babel.types.BlockStatement"
        },
        "async": {
          "type": "boolean"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "async",
        "body",
        "type"
      ]
    },
    "babel.types.BlockStatement": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "BlockStatement"
          ]
        },
        "body": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/babel.types.Statement"
          }
        },
        "directives": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/babel.types.Directive"
          }
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "body",
        "directives",
        "type"
      ]
    },
    "babel.types.BreakStatement": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "BreakStatement"
          ]
        },
        "label": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type"
      ]
    },
    "babel.types.ClassDeclaration": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ClassDeclaration"
          ]
        },
        "id": {
          "$ref": "#/definitions/babel.types.Identifier"
        },
        "superClass": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.ArrayExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ArrowFunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AssignmentExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AwaitExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BigIntLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.BinaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BindExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BooleanLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.CallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ClassExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ConditionalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.DecimalLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.DoExpression"
            },
            {
              "$ref": "#/definitions/babel.types.FunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "$ref": "#/definitions/babel.types.Import"
            },
            {
              "$ref": "#/definitions/babel.types.JSXElement"
            },
            {
              "$ref": "#/definitions/babel.types.JSXFragment"
            },
            {
              "$ref": "#/definitions/babel.types.LogicalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MetaProperty"
            },
            {
              "$ref": "#/definitions/babel.types.ModuleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NewExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NullLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.NumericLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalCallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalMemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ParenthesizedExpression"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineBareFunction"
            },
            {
              "$ref": "#/definitions/babel.types.PipelinePrimaryTopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineTopicExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RecordExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RegExpLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.SequenceExpression"
            },
            {
              "$ref": "#/definitions/babel.types.StringLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.Super"
            },
            {
              "$ref": "#/definitions/babel.types.TSAsExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSInstantiationExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSNonNullExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAssertion"
            },
            {
              "$ref": "#/definitions/babel.types.TaggedTemplateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TemplateLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ThisExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.TupleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TypeCastExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UnaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UpdateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.YieldExpression"
            },
            {
              "type": "null"
            }
          ]
        },
        "body": {
          "$ref": "#/definitions/babel.types.ClassBody"
        },
        "decorators": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/babel.types.Decorator"
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "abstract": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "declare": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "implements": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.ClassImplements"
                  },
                  {
                    "$ref": "#/definitions/babel.types.TSExpressionWithTypeArguments"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "mixins": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.InterfaceExtends"
            },
            {
              "type": "null"
            }
          ]
        },
        "superTypeParameters": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TSTypeParameterInstantiation"
            },
            {
              "$ref": "#/definitions/babel.types.TypeParameterInstantiation"
            },
            {
              "type": "null"
            }
          ]
        },
        "typeParameters": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Noop"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeParameterDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.TypeParameterDeclaration"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "body",
        "id",
        "type"
      ]
    },
    "babel.types.FunctionExpression": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "FunctionExpression"
          ]
        },
        "id": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "type": "null"
            }
          ]
        },
        "params": {
          "type": "array",
          "items": {
            "anyOf": [
              {
                "$ref": "#/definitions/babel.types.ArrayPattern"
              },
              {
                "$ref": "#/definitions/babel.types.AssignmentPattern"
              },
              {
                "$ref": "#/definitions/babel.types.Identifier"
              },
              {
                "$ref": "#/definitions/babel.types.ObjectPattern"
              },
              {
                "$ref": "#/definitions/babel.types.RestElement"
              }
            ]
          }
        },
        "body": {
          "$ref": "#/definitions/babel.types.BlockStatement"
        },
        "generator": {
          "type": "boolean"
        },
        "async": {
          "type": "boolean"
        },
        "predicate": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.DeclaredPredicate"
            },
            {
              "$ref": "#/definitions/babel.types.InferredPredicate"
            },
            {
              "type": "null"
            }
          ]
        },
        "returnType": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Noop"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.TypeAnnotation"
            },
            {
              "type": "null"
            }
          ]
        },
        "typeParameters": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Noop"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeParameterDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.TypeParameterDeclaration"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "body",
        "params",
        "type"
      ]
    },
    "babel.types.RestElement": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "RestElement"
          ]
        },
        "argument": {
          "$ref": "#/definitions/babel.types.LVal"
        },
        "decorators": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/babel.types.Decorator"
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "optional": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "typeAnnotation": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Noop"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.TypeAnnotation"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "argument",
        "type"
      ]
    },
    "babel.types.LVal": {
      "anyOf": [
        {
          "$ref": "#/definitions/babel.types.ArrayPattern"
        },
        {
          "$ref": "#/definitions/babel.types.AssignmentPattern"
        },
        {
          "$ref": "#/definitions/babel.types.Identifier"
        },
        {
          "$ref": "#/definitions/babel.types.MemberExpression"
        },
        {
          "$ref": "#/definitions/babel.types.ObjectPattern"
        },
        {
          "$ref": "#/definitions/babel.types.RestElement"
        },
        {
          "$ref": "#/definitions/babel.types.TSAsExpression"
        },
        {
          "$ref": "#/definitions/babel.types.TSNonNullExpression"
        },
        {
          "$ref": "#/definitions/babel.types.TSParameterProperty"
        },
        {
          "$ref": "#/definitions/babel.types.TSTypeAssertion"
        }
      ]
    },
    "babel.types.TSAsExpression": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSAsExpression"
          ]
        },
        "expression": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "typeAnnotation": {
          "$ref": "#/definitions/babel.types.TSType"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "expression",
        "type",
        "typeAnnotation"
      ]
    },
    "babel.types.TSAnyKeyword": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSAnyKeyword"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type"
      ]
    },
    "babel.types.TSArrayType": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSArrayType"
          ]
        },
        "elementType": {
          "$ref": "#/definitions/babel.types.TSType"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "elementType",
        "type"
      ]
    },
    "babel.types.TSType": {
      "anyOf": [
        {
          "$ref": "#/definitions/babel.types.TSAnyKeyword"
        },
        {
          "$ref": "#/definitions/babel.types.TSArrayType"
        },
        {
          "$ref": "#/definitions/babel.types.TSBigIntKeyword"
        },
        {
          "$ref": "#/definitions/babel.types.TSBooleanKeyword"
        },
        {
          "$ref": "#/definitions/babel.types.TSConditionalType"
        },
        {
          "$ref": "#/definitions/babel.types.TSConstructorType"
        },
        {
          "$ref": "#/definitions/babel.types.TSExpressionWithTypeArguments"
        },
        {
          "$ref": "#/definitions/babel.types.TSFunctionType"
        },
        {
          "$ref": "#/definitions/babel.types.TSImportType"
        },
        {
          "$ref": "#/definitions/babel.types.TSIndexedAccessType"
        },
        {
          "$ref": "#/definitions/babel.types.TSInferType"
        },
        {
          "$ref": "#/definitions/babel.types.TSIntersectionType"
        },
        {
          "$ref": "#/definitions/babel.types.TSIntrinsicKeyword"
        },
        {
          "$ref": "#/definitions/babel.types.TSLiteralType"
        },
        {
          "$ref": "#/definitions/babel.types.TSMappedType"
        },
        {
          "$ref": "#/definitions/babel.types.TSNeverKeyword"
        },
        {
          "$ref": "#/definitions/babel.types.TSNullKeyword"
        },
        {
          "$ref": "#/definitions/babel.types.TSNumberKeyword"
        },
        {
          "$ref": "#/definitions/babel.types.TSObjectKeyword"
        },
        {
          "$ref": "#/definitions/babel.types.TSOptionalType"
        },
        {
          "$ref": "#/definitions/babel.types.TSParenthesizedType"
        },
        {
          "$ref": "#/definitions/babel.types.TSRestType"
        },
        {
          "$ref": "#/definitions/babel.types.TSStringKeyword"
        },
        {
          "$ref": "#/definitions/babel.types.TSSymbolKeyword"
        },
        {
          "$ref": "#/definitions/babel.types.TSThisType"
        },
        {
          "$ref": "#/definitions/babel.types.TSTupleType"
        },
        {
          "$ref": "#/definitions/babel.types.TSTypeLiteral"
        },
        {
          "$ref": "#/definitions/babel.types.TSTypeOperator"
        },
        {
          "$ref": "#/definitions/babel.types.TSTypePredicate"
        },
        {
          "$ref": "#/definitions/babel.types.TSTypeQuery"
        },
        {
          "$ref": "#/definitions/babel.types.TSTypeReference"
        },
        {
          "$ref": "#/definitions/babel.types.TSUndefinedKeyword"
        },
        {
          "$ref": "#/definitions/babel.types.TSUnionType"
        },
        {
          "$ref": "#/definitions/babel.types.TSUnknownKeyword"
        },
        {
          "$ref": "#/definitions/babel.types.TSVoidKeyword"
        }
      ]
    },
    "babel.types.TSBigIntKeyword": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSBigIntKeyword"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type"
      ]
    },
    "babel.types.TSBooleanKeyword": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSBooleanKeyword"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type"
      ]
    },
    "babel.types.TSConditionalType": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSConditionalType"
          ]
        },
        "checkType": {
          "$ref": "#/definitions/babel.types.TSType"
        },
        "extendsType": {
          "$ref": "#/definitions/babel.types.TSType"
        },
        "trueType": {
          "$ref": "#/definitions/babel.types.TSType"
        },
        "falseType": {
          "$ref": "#/definitions/babel.types.TSType"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "checkType",
        "extendsType",
        "falseType",
        "trueType",
        "type"
      ]
    },
    "babel.types.TSConstructorType": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSConstructorType"
          ]
        },
        "typeParameters": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TSTypeParameterDeclaration"
            },
            {
              "type": "null"
            }
          ]
        },
        "parameters": {
          "type": "array",
          "items": {
            "anyOf": [
              {
                "$ref": "#/definitions/babel.types.Identifier"
              },
              {
                "$ref": "#/definitions/babel.types.RestElement"
              }
            ]
          }
        },
        "typeAnnotation": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TSTypeAnnotation"
            },
            {
              "type": "null"
            }
          ]
        },
        "abstract": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "parameters",
        "type"
      ]
    },
    "babel.types.TSTypeParameterDeclaration": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSTypeParameterDeclaration"
          ]
        },
        "params": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/babel.types.TSTypeParameter"
          }
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "params",
        "type"
      ]
    },
    "babel.types.TSTypeParameter": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSTypeParameter"
          ]
        },
        "constraint": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TSAnyKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSArrayType"
            },
            {
              "$ref": "#/definitions/babel.types.TSBigIntKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSBooleanKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSConditionalType"
            },
            {
              "$ref": "#/definitions/babel.types.TSConstructorType"
            },
            {
              "$ref": "#/definitions/babel.types.TSExpressionWithTypeArguments"
            },
            {
              "$ref": "#/definitions/babel.types.TSFunctionType"
            },
            {
              "$ref": "#/definitions/babel.types.TSImportType"
            },
            {
              "$ref": "#/definitions/babel.types.TSIndexedAccessType"
            },
            {
              "$ref": "#/definitions/babel.types.TSInferType"
            },
            {
              "$ref": "#/definitions/babel.types.TSIntersectionType"
            },
            {
              "$ref": "#/definitions/babel.types.TSIntrinsicKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSLiteralType"
            },
            {
              "$ref": "#/definitions/babel.types.TSMappedType"
            },
            {
              "$ref": "#/definitions/babel.types.TSNeverKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSNullKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSNumberKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSObjectKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSOptionalType"
            },
            {
              "$ref": "#/definitions/babel.types.TSParenthesizedType"
            },
            {
              "$ref": "#/definitions/babel.types.TSRestType"
            },
            {
              "$ref": "#/definitions/babel.types.TSStringKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSSymbolKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSThisType"
            },
            {
              "$ref": "#/definitions/babel.types.TSTupleType"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeOperator"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypePredicate"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeQuery"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeReference"
            },
            {
              "$ref": "#/definitions/babel.types.TSUndefinedKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSUnionType"
            },
            {
              "$ref": "#/definitions/babel.types.TSUnknownKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSVoidKeyword"
            },
            {
              "type": "null"
            }
          ]
        },
        "default": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TSAnyKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSArrayType"
            },
            {
              "$ref": "#/definitions/babel.types.TSBigIntKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSBooleanKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSConditionalType"
            },
            {
              "$ref": "#/definitions/babel.types.TSConstructorType"
            },
            {
              "$ref": "#/definitions/babel.types.TSExpressionWithTypeArguments"
            },
            {
              "$ref": "#/definitions/babel.types.TSFunctionType"
            },
            {
              "$ref": "#/definitions/babel.types.TSImportType"
            },
            {
              "$ref": "#/definitions/babel.types.TSIndexedAccessType"
            },
            {
              "$ref": "#/definitions/babel.types.TSInferType"
            },
            {
              "$ref": "#/definitions/babel.types.TSIntersectionType"
            },
            {
              "$ref": "#/definitions/babel.types.TSIntrinsicKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSLiteralType"
            },
            {
              "$ref": "#/definitions/babel.types.TSMappedType"
            },
            {
              "$ref": "#/definitions/babel.types.TSNeverKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSNullKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSNumberKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSObjectKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSOptionalType"
            },
            {
              "$ref": "#/definitions/babel.types.TSParenthesizedType"
            },
            {
              "$ref": "#/definitions/babel.types.TSRestType"
            },
            {
              "$ref": "#/definitions/babel.types.TSStringKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSSymbolKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSThisType"
            },
            {
              "$ref": "#/definitions/babel.types.TSTupleType"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeOperator"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypePredicate"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeQuery"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeReference"
            },
            {
              "$ref": "#/definitions/babel.types.TSUndefinedKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSUnionType"
            },
            {
              "$ref": "#/definitions/babel.types.TSUnknownKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSVoidKeyword"
            },
            {
              "type": "null"
            }
          ]
        },
        "name": {
          "type": "string"
        },
        "in": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "out": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "name",
        "type"
      ]
    },
    "babel.types.TSExpressionWithTypeArguments": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSExpressionWithTypeArguments"
          ]
        },
        "expression": {
          "$ref": "#/definitions/babel.types.TSEntityName"
        },
        "typeParameters": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TSTypeParameterInstantiation"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "expression",
        "type"
      ]
    },
    "babel.types.TSQualifiedName": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSQualifiedName"
          ]
        },
        "left": {
          "$ref": "#/definitions/babel.types.TSEntityName"
        },
        "right": {
          "$ref": "#/definitions/babel.types.Identifier"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "left",
        "right",
        "type"
      ]
    },
    "babel.types.TSEntityName": {
      "anyOf": [
        {
          "$ref": "#/definitions/babel.types.Identifier"
        },
        {
          "$ref": "#/definitions/babel.types.TSQualifiedName"
        }
      ]
    },
    "babel.types.TSTypeParameterInstantiation": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSTypeParameterInstantiation"
          ]
        },
        "params": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/babel.types.TSType"
          }
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "params",
        "type"
      ]
    },
    "babel.types.TSFunctionType": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSFunctionType"
          ]
        },
        "typeParameters": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TSTypeParameterDeclaration"
            },
            {
              "type": "null"
            }
          ]
        },
        "parameters": {
          "type": "array",
          "items": {
            "anyOf": [
              {
                "$ref": "#/definitions/babel.types.Identifier"
              },
              {
                "$ref": "#/definitions/babel.types.RestElement"
              }
            ]
          }
        },
        "typeAnnotation": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TSTypeAnnotation"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "parameters",
        "type"
      ]
    },
    "babel.types.TSTypeAnnotation": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSTypeAnnotation"
          ]
        },
        "typeAnnotation": {
          "$ref": "#/definitions/babel.types.TSType"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type",
        "typeAnnotation"
      ]
    },
    "babel.types.TSImportType": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSImportType"
          ]
        },
        "argument": {
          "$ref": "#/definitions/babel.types.StringLiteral"
        },
        "qualifier": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "$ref": "#/definitions/babel.types.TSQualifiedName"
            },
            {
              "type": "null"
            }
          ]
        },
        "typeParameters": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TSTypeParameterInstantiation"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "argument",
        "type"
      ]
    },
    "babel.types.StringLiteral": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "StringLiteral"
          ]
        },
        "value": {
          "type": "string"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type",
        "value"
      ]
    },
    "babel.types.TSIndexedAccessType": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSIndexedAccessType"
          ]
        },
        "objectType": {
          "$ref": "#/definitions/babel.types.TSType"
        },
        "indexType": {
          "$ref": "#/definitions/babel.types.TSType"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "indexType",
        "objectType",
        "type"
      ]
    },
    "babel.types.TSInferType": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSInferType"
          ]
        },
        "typeParameter": {
          "$ref": "#/definitions/babel.types.TSTypeParameter"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type",
        "typeParameter"
      ]
    },
    "babel.types.TSIntersectionType": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSIntersectionType"
          ]
        },
        "types": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/babel.types.TSType"
          }
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type",
        "types"
      ]
    },
    "babel.types.TSIntrinsicKeyword": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSIntrinsicKeyword"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type"
      ]
    },
    "babel.types.TSLiteralType": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSLiteralType"
          ]
        },
        "literal": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.BigIntLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.BooleanLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.NumericLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.StringLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.UnaryExpression"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "literal",
        "type"
      ]
    },
    "babel.types.NumericLiteral": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "NumericLiteral"
          ]
        },
        "value": {
          "type": "number"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type",
        "value"
      ]
    },
    "babel.types.UnaryExpression": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "UnaryExpression"
          ]
        },
        "operator": {
          "enum": [
            "!",
            "+",
            "-",
            "delete",
            "throw",
            "typeof",
            "void",
            "~"
          ],
          "type": "string"
        },
        "argument": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "prefix": {
          "type": "boolean"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "argument",
        "operator",
        "prefix",
        "type"
      ]
    },
    "babel.types.TSMappedType": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSMappedType"
          ]
        },
        "typeParameter": {
          "$ref": "#/definitions/babel.types.TSTypeParameter"
        },
        "typeAnnotation": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TSAnyKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSArrayType"
            },
            {
              "$ref": "#/definitions/babel.types.TSBigIntKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSBooleanKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSConditionalType"
            },
            {
              "$ref": "#/definitions/babel.types.TSConstructorType"
            },
            {
              "$ref": "#/definitions/babel.types.TSExpressionWithTypeArguments"
            },
            {
              "$ref": "#/definitions/babel.types.TSFunctionType"
            },
            {
              "$ref": "#/definitions/babel.types.TSImportType"
            },
            {
              "$ref": "#/definitions/babel.types.TSIndexedAccessType"
            },
            {
              "$ref": "#/definitions/babel.types.TSInferType"
            },
            {
              "$ref": "#/definitions/babel.types.TSIntersectionType"
            },
            {
              "$ref": "#/definitions/babel.types.TSIntrinsicKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSLiteralType"
            },
            {
              "$ref": "#/definitions/babel.types.TSMappedType"
            },
            {
              "$ref": "#/definitions/babel.types.TSNeverKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSNullKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSNumberKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSObjectKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSOptionalType"
            },
            {
              "$ref": "#/definitions/babel.types.TSParenthesizedType"
            },
            {
              "$ref": "#/definitions/babel.types.TSRestType"
            },
            {
              "$ref": "#/definitions/babel.types.TSStringKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSSymbolKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSThisType"
            },
            {
              "$ref": "#/definitions/babel.types.TSTupleType"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeOperator"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypePredicate"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeQuery"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeReference"
            },
            {
              "$ref": "#/definitions/babel.types.TSUndefinedKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSUnionType"
            },
            {
              "$ref": "#/definitions/babel.types.TSUnknownKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSVoidKeyword"
            },
            {
              "type": "null"
            }
          ]
        },
        "nameType": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TSAnyKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSArrayType"
            },
            {
              "$ref": "#/definitions/babel.types.TSBigIntKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSBooleanKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSConditionalType"
            },
            {
              "$ref": "#/definitions/babel.types.TSConstructorType"
            },
            {
              "$ref": "#/definitions/babel.types.TSExpressionWithTypeArguments"
            },
            {
              "$ref": "#/definitions/babel.types.TSFunctionType"
            },
            {
              "$ref": "#/definitions/babel.types.TSImportType"
            },
            {
              "$ref": "#/definitions/babel.types.TSIndexedAccessType"
            },
            {
              "$ref": "#/definitions/babel.types.TSInferType"
            },
            {
              "$ref": "#/definitions/babel.types.TSIntersectionType"
            },
            {
              "$ref": "#/definitions/babel.types.TSIntrinsicKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSLiteralType"
            },
            {
              "$ref": "#/definitions/babel.types.TSMappedType"
            },
            {
              "$ref": "#/definitions/babel.types.TSNeverKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSNullKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSNumberKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSObjectKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSOptionalType"
            },
            {
              "$ref": "#/definitions/babel.types.TSParenthesizedType"
            },
            {
              "$ref": "#/definitions/babel.types.TSRestType"
            },
            {
              "$ref": "#/definitions/babel.types.TSStringKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSSymbolKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSThisType"
            },
            {
              "$ref": "#/definitions/babel.types.TSTupleType"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeOperator"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypePredicate"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeQuery"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeReference"
            },
            {
              "$ref": "#/definitions/babel.types.TSUndefinedKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSUnionType"
            },
            {
              "$ref": "#/definitions/babel.types.TSUnknownKeyword"
            },
            {
              "$ref": "#/definitions/babel.types.TSVoidKeyword"
            },
            {
              "type": "null"
            }
          ]
        },
        "optional": {
          "anyOf": [
            {
              "enum": [
                "+",
                "-",
                false,
                true
              ]
            },
            {
              "type": "null"
            }
          ]
        },
        "readonly": {
          "anyOf": [
            {
              "enum": [
                "+",
                "-",
                false,
                true
              ]
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type",
        "typeParameter"
      ]
    },
    "babel.types.TSNeverKeyword": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSNeverKeyword"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type"
      ]
    },
    "babel.types.TSNullKeyword": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSNullKeyword"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type"
      ]
    },
    "babel.types.TSNumberKeyword": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSNumberKeyword"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type"
      ]
    },
    "babel.types.TSObjectKeyword": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSObjectKeyword"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type"
      ]
    },
    "babel.types.TSOptionalType": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSOptionalType"
          ]
        },
        "typeAnnotation": {
          "$ref": "#/definitions/babel.types.TSType"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type",
        "typeAnnotation"
      ]
    },
    "babel.types.TSParenthesizedType": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSParenthesizedType"
          ]
        },
        "typeAnnotation": {
          "$ref": "#/definitions/babel.types.TSType"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type",
        "typeAnnotation"
      ]
    },
    "babel.types.TSRestType": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSRestType"
          ]
        },
        "typeAnnotation": {
          "$ref": "#/definitions/babel.types.TSType"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type",
        "typeAnnotation"
      ]
    },
    "babel.types.TSStringKeyword": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSStringKeyword"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type"
      ]
    },
    "babel.types.TSSymbolKeyword": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSSymbolKeyword"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type"
      ]
    },
    "babel.types.TSThisType": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSThisType"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type"
      ]
    },
    "babel.types.TSTupleType": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSTupleType"
          ]
        },
        "elementTypes": {
          "type": "array",
          "items": {
            "anyOf": [
              {
                "$ref": "#/definitions/babel.types.TSAnyKeyword"
              },
              {
                "$ref": "#/definitions/babel.types.TSArrayType"
              },
              {
                "$ref": "#/definitions/babel.types.TSBigIntKeyword"
              },
              {
                "$ref": "#/definitions/babel.types.TSBooleanKeyword"
              },
              {
                "$ref": "#/definitions/babel.types.TSConditionalType"
              },
              {
                "$ref": "#/definitions/babel.types.TSConstructorType"
              },
              {
                "$ref": "#/definitions/babel.types.TSExpressionWithTypeArguments"
              },
              {
                "$ref": "#/definitions/babel.types.TSFunctionType"
              },
              {
                "$ref": "#/definitions/babel.types.TSImportType"
              },
              {
                "$ref": "#/definitions/babel.types.TSIndexedAccessType"
              },
              {
                "$ref": "#/definitions/babel.types.TSInferType"
              },
              {
                "$ref": "#/definitions/babel.types.TSIntersectionType"
              },
              {
                "$ref": "#/definitions/babel.types.TSIntrinsicKeyword"
              },
              {
                "$ref": "#/definitions/babel.types.TSLiteralType"
              },
              {
                "$ref": "#/definitions/babel.types.TSMappedType"
              },
              {
                "$ref": "#/definitions/babel.types.TSNamedTupleMember"
              },
              {
                "$ref": "#/definitions/babel.types.TSNeverKeyword"
              },
              {
                "$ref": "#/definitions/babel.types.TSNullKeyword"
              },
              {
                "$ref": "#/definitions/babel.types.TSNumberKeyword"
              },
              {
                "$ref": "#/definitions/babel.types.TSObjectKeyword"
              },
              {
                "$ref": "#/definitions/babel.types.TSOptionalType"
              },
              {
                "$ref": "#/definitions/babel.types.TSParenthesizedType"
              },
              {
                "$ref": "#/definitions/babel.types.TSRestType"
              },
              {
                "$ref": "#/definitions/babel.types.TSStringKeyword"
              },
              {
                "$ref": "#/definitions/babel.types.TSSymbolKeyword"
              },
              {
                "$ref": "#/definitions/babel.types.TSThisType"
              },
              {
                "$ref": "#/definitions/babel.types.TSTupleType"
              },
              {
                "$ref": "#/definitions/babel.types.TSTypeLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.TSTypeOperator"
              },
              {
                "$ref": "#/definitions/babel.types.TSTypePredicate"
              },
              {
                "$ref": "#/definitions/babel.types.TSTypeQuery"
              },
              {
                "$ref": "#/definitions/babel.types.TSTypeReference"
              },
              {
                "$ref": "#/definitions/babel.types.TSUndefinedKeyword"
              },
              {
                "$ref": "#/definitions/babel.types.TSUnionType"
              },
              {
                "$ref": "#/definitions/babel.types.TSUnknownKeyword"
              },
              {
                "$ref": "#/definitions/babel.types.TSVoidKeyword"
              }
            ]
          }
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "elementTypes",
        "type"
      ]
    },
    "babel.types.TSNamedTupleMember": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSNamedTupleMember"
          ]
        },
        "label": {
          "$ref": "#/definitions/babel.types.Identifier"
        },
        "elementType": {
          "$ref": "#/definitions/babel.types.TSType"
        },
        "optional": {
          "type": "boolean"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "elementType",
        "label",
        "optional",
        "type"
      ]
    },
    "babel.types.TSTypeLiteral": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSTypeLiteral"
          ]
        },
        "members": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/babel.types.TSTypeElement"
          }
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "members",
        "type"
      ]
    },
    "babel.types.TSCallSignatureDeclaration": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSCallSignatureDeclaration"
          ]
        },
        "typeParameters": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TSTypeParameterDeclaration"
            },
            {
              "type": "null"
            }
          ]
        },
        "parameters": {
          "type": "array",
          "items": {
            "anyOf": [
              {
                "$ref": "#/definitions/babel.types.Identifier"
              },
              {
                "$ref": "#/definitions/babel.types.RestElement"
              }
            ]
          }
        },
        "typeAnnotation": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TSTypeAnnotation"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "parameters",
        "type"
      ]
    },
    "babel.types.TSConstructSignatureDeclaration": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSConstructSignatureDeclaration"
          ]
        },
        "typeParameters": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TSTypeParameterDeclaration"
            },
            {
              "type": "null"
            }
          ]
        },
        "parameters": {
          "type": "array",
          "items": {
            "anyOf": [
              {
                "$ref": "#/definitions/babel.types.Identifier"
              },
              {
                "$ref": "#/definitions/babel.types.RestElement"
              }
            ]
          }
        },
        "typeAnnotation": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TSTypeAnnotation"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "parameters",
        "type"
      ]
    },
    "babel.types.TSIndexSignature": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSIndexSignature"
          ]
        },
        "parameters": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/babel.types.Identifier"
          }
        },
        "typeAnnotation": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TSTypeAnnotation"
            },
            {
              "type": "null"
            }
          ]
        },
        "readonly": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "static": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "parameters",
        "type"
      ]
    },
    "babel.types.TSMethodSignature": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSMethodSignature"
          ]
        },
        "key": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "typeParameters": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TSTypeParameterDeclaration"
            },
            {
              "type": "null"
            }
          ]
        },
        "parameters": {
          "type": "array",
          "items": {
            "anyOf": [
              {
                "$ref": "#/definitions/babel.types.Identifier"
              },
              {
                "$ref": "#/definitions/babel.types.RestElement"
              }
            ]
          }
        },
        "typeAnnotation": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TSTypeAnnotation"
            },
            {
              "type": "null"
            }
          ]
        },
        "computed": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "kind": {
          "enum": [
            "get",
            "method",
            "set"
          ],
          "type": "string"
        },
        "optional": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "key",
        "kind",
        "parameters",
        "type"
      ]
    },
    "babel.types.TSPropertySignature": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSPropertySignature"
          ]
        },
        "key": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "typeAnnotation": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TSTypeAnnotation"
            },
            {
              "type": "null"
            }
          ]
        },
        "initializer": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.ArrayExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ArrowFunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AssignmentExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AwaitExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BigIntLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.BinaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BindExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BooleanLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.CallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ClassExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ConditionalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.DecimalLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.DoExpression"
            },
            {
              "$ref": "#/definitions/babel.types.FunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "$ref": "#/definitions/babel.types.Import"
            },
            {
              "$ref": "#/definitions/babel.types.JSXElement"
            },
            {
              "$ref": "#/definitions/babel.types.JSXFragment"
            },
            {
              "$ref": "#/definitions/babel.types.LogicalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MetaProperty"
            },
            {
              "$ref": "#/definitions/babel.types.ModuleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NewExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NullLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.NumericLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalCallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalMemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ParenthesizedExpression"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineBareFunction"
            },
            {
              "$ref": "#/definitions/babel.types.PipelinePrimaryTopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineTopicExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RecordExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RegExpLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.SequenceExpression"
            },
            {
              "$ref": "#/definitions/babel.types.StringLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.Super"
            },
            {
              "$ref": "#/definitions/babel.types.TSAsExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSInstantiationExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSNonNullExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAssertion"
            },
            {
              "$ref": "#/definitions/babel.types.TaggedTemplateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TemplateLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ThisExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.TupleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TypeCastExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UnaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UpdateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.YieldExpression"
            },
            {
              "type": "null"
            }
          ]
        },
        "computed": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "kind": {
          "enum": [
            "get",
            "set"
          ],
          "type": "string"
        },
        "optional": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "readonly": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "key",
        "kind",
        "type"
      ]
    },
    "babel.types.Import": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "Import"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type"
      ]
    },
    "babel.types.JSXElement": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "JSXElement"
          ]
        },
        "openingElement": {
          "$ref": "#/definitions/babel.types.JSXOpeningElement"
        },
        "closingElement": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.JSXClosingElement"
            },
            {
              "type": "null"
            }
          ]
        },
        "children": {
          "type": "array",
          "items": {
            "anyOf": [
              {
                "$ref": "#/definitions/babel.types.JSXElement"
              },
              {
                "$ref": "#/definitions/babel.types.JSXExpressionContainer"
              },
              {
                "$ref": "#/definitions/babel.types.JSXFragment"
              },
              {
                "$ref": "#/definitions/babel.types.JSXSpreadChild"
              },
              {
                "$ref": "#/definitions/babel.types.JSXText"
              }
            ]
          }
        },
        "selfClosing": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "children",
        "openingElement",
        "type"
      ]
    },
    "babel.types.JSXOpeningElement": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "JSXOpeningElement"
          ]
        },
        "name": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.JSXIdentifier"
            },
            {
              "$ref": "#/definitions/babel.types.JSXMemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.JSXNamespacedName"
            }
          ]
        },
        "attributes": {
          "type": "array",
          "items": {
            "anyOf": [
              {
                "$ref": "#/definitions/babel.types.JSXAttribute"
              },
              {
                "$ref": "#/definitions/babel.types.JSXSpreadAttribute"
              }
            ]
          }
        },
        "selfClosing": {
          "type": "boolean"
        },
        "typeParameters": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TSTypeParameterInstantiation"
            },
            {
              "$ref": "#/definitions/babel.types.TypeParameterInstantiation"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "attributes",
        "name",
        "selfClosing",
        "type"
      ]
    },
    "babel.types.JSXIdentifier": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "JSXIdentifier"
          ]
        },
        "name": {
          "type": "string"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "name",
        "type"
      ]
    },
    "babel.types.JSXMemberExpression": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "JSXMemberExpression"
          ]
        },
        "object": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.JSXIdentifier"
            },
            {
              "$ref": "#/definitions/babel.types.JSXMemberExpression"
            }
          ]
        },
        "property": {
          "$ref": "#/definitions/babel.types.JSXIdentifier"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "object",
        "property",
        "type"
      ]
    },
    "babel.types.JSXNamespacedName": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "JSXNamespacedName"
          ]
        },
        "namespace": {
          "$ref": "#/definitions/babel.types.JSXIdentifier"
        },
        "name": {
          "$ref": "#/definitions/babel.types.JSXIdentifier"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "name",
        "namespace",
        "type"
      ]
    },
    "babel.types.JSXAttribute": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "JSXAttribute"
          ]
        },
        "name": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.JSXIdentifier"
            },
            {
              "$ref": "#/definitions/babel.types.JSXNamespacedName"
            }
          ]
        },
        "value": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.JSXElement"
            },
            {
              "$ref": "#/definitions/babel.types.JSXExpressionContainer"
            },
            {
              "$ref": "#/definitions/babel.types.JSXFragment"
            },
            {
              "$ref": "#/definitions/babel.types.StringLiteral"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "name",
        "type"
      ]
    },
    "babel.types.JSXExpressionContainer": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "JSXExpressionContainer"
          ]
        },
        "expression": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.ArrayExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ArrowFunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AssignmentExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AwaitExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BigIntLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.BinaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BindExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BooleanLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.CallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ClassExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ConditionalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.DecimalLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.DoExpression"
            },
            {
              "$ref": "#/definitions/babel.types.FunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "$ref": "#/definitions/babel.types.Import"
            },
            {
              "$ref": "#/definitions/babel.types.JSXElement"
            },
            {
              "$ref": "#/definitions/babel.types.JSXEmptyExpression"
            },
            {
              "$ref": "#/definitions/babel.types.JSXFragment"
            },
            {
              "$ref": "#/definitions/babel.types.LogicalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MetaProperty"
            },
            {
              "$ref": "#/definitions/babel.types.ModuleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NewExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NullLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.NumericLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalCallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalMemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ParenthesizedExpression"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineBareFunction"
            },
            {
              "$ref": "#/definitions/babel.types.PipelinePrimaryTopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineTopicExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RecordExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RegExpLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.SequenceExpression"
            },
            {
              "$ref": "#/definitions/babel.types.StringLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.Super"
            },
            {
              "$ref": "#/definitions/babel.types.TSAsExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSInstantiationExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSNonNullExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAssertion"
            },
            {
              "$ref": "#/definitions/babel.types.TaggedTemplateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TemplateLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ThisExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.TupleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TypeCastExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UnaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UpdateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.YieldExpression"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "expression",
        "type"
      ]
    },
    "babel.types.JSXEmptyExpression": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "JSXEmptyExpression"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type"
      ]
    },
    "babel.types.JSXFragment": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "JSXFragment"
          ]
        },
        "openingFragment": {
          "$ref": "#/definitions/babel.types.JSXOpeningFragment"
        },
        "closingFragment": {
          "$ref": "#/definitions/babel.types.JSXClosingFragment"
        },
        "children": {
          "type": "array",
          "items": {
            "anyOf": [
              {
                "$ref": "#/definitions/babel.types.JSXElement"
              },
              {
                "$ref": "#/definitions/babel.types.JSXExpressionContainer"
              },
              {
                "$ref": "#/definitions/babel.types.JSXFragment"
              },
              {
                "$ref": "#/definitions/babel.types.JSXSpreadChild"
              },
              {
                "$ref": "#/definitions/babel.types.JSXText"
              }
            ]
          }
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "children",
        "closingFragment",
        "openingFragment",
        "type"
      ]
    },
    "babel.types.JSXOpeningFragment": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "JSXOpeningFragment"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type"
      ]
    },
    "babel.types.JSXClosingFragment": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "JSXClosingFragment"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type"
      ]
    },
    "babel.types.JSXSpreadChild": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "JSXSpreadChild"
          ]
        },
        "expression": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "expression",
        "type"
      ]
    },
    "babel.types.JSXText": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "JSXText"
          ]
        },
        "value": {
          "type": "string"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type",
        "value"
      ]
    },
    "babel.types.LogicalExpression": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "LogicalExpression"
          ]
        },
        "operator": {
          "enum": [
            "&&",
            "??",
            "||"
          ],
          "type": "string"
        },
        "left": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "right": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "left",
        "operator",
        "right",
        "type"
      ]
    },
    "babel.types.MetaProperty": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "MetaProperty"
          ]
        },
        "meta": {
          "$ref": "#/definitions/babel.types.Identifier"
        },
        "property": {
          "$ref": "#/definitions/babel.types.Identifier"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "meta",
        "property",
        "type"
      ]
    },
    "babel.types.ModuleExpression": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ModuleExpression"
          ]
        },
        "body": {
          "$ref": "#/definitions/babel.types.Program"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "body",
        "type"
      ]
    },
    "babel.types.Program": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "Program"
          ]
        },
        "body": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/babel.types.Statement"
          }
        },
        "directives": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/babel.types.Directive"
          }
        },
        "sourceType": {
          "enum": [
            "module",
            "script"
          ],
          "type": "string"
        },
        "interpreter": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.InterpreterDirective"
            },
            {
              "type": "null"
            }
          ]
        },
        "sourceFile": {
          "type": "string"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "body",
        "directives",
        "sourceFile",
        "sourceType",
        "type"
      ]
    },
    "babel.types.Statement": {
      "anyOf": [
        {
          "$ref": "#/definitions/babel.types.BlockStatement"
        },
        {
          "$ref": "#/definitions/babel.types.BreakStatement"
        },
        {
          "$ref": "#/definitions/babel.types.ClassDeclaration"
        },
        {
          "$ref": "#/definitions/babel.types.ContinueStatement"
        },
        {
          "$ref": "#/definitions/babel.types.DebuggerStatement"
        },
        {
          "$ref": "#/definitions/babel.types.DeclareClass"
        },
        {
          "$ref": "#/definitions/babel.types.DeclareExportAllDeclaration"
        },
        {
          "$ref": "#/definitions/babel.types.DeclareExportDeclaration"
        },
        {
          "$ref": "#/definitions/babel.types.DeclareFunction"
        },
        {
          "$ref": "#/definitions/babel.types.DeclareInterface"
        },
        {
          "$ref": "#/definitions/babel.types.DeclareModule"
        },
        {
          "$ref": "#/definitions/babel.types.DeclareModuleExports"
        },
        {
          "$ref": "#/definitions/babel.types.DeclareOpaqueType"
        },
        {
          "$ref": "#/definitions/babel.types.DeclareTypeAlias"
        },
        {
          "$ref": "#/definitions/babel.types.DeclareVariable"
        },
        {
          "$ref": "#/definitions/babel.types.DoWhileStatement"
        },
        {
          "$ref": "#/definitions/babel.types.EmptyStatement"
        },
        {
          "$ref": "#/definitions/babel.types.EnumDeclaration"
        },
        {
          "$ref": "#/definitions/babel.types.ExportAllDeclaration"
        },
        {
          "$ref": "#/definitions/babel.types.ExportDefaultDeclaration"
        },
        {
          "$ref": "#/definitions/babel.types.ExportNamedDeclaration"
        },
        {
          "$ref": "#/definitions/babel.types.ExpressionStatement"
        },
        {
          "$ref": "#/definitions/babel.types.ForInStatement"
        },
        {
          "$ref": "#/definitions/babel.types.ForOfStatement"
        },
        {
          "$ref": "#/definitions/babel.types.ForStatement"
        },
        {
          "$ref": "#/definitions/babel.types.FunctionDeclaration"
        },
        {
          "$ref": "#/definitions/babel.types.IfStatement"
        },
        {
          "$ref": "#/definitions/babel.types.ImportDeclaration"
        },
        {
          "$ref": "#/definitions/babel.types.InterfaceDeclaration"
        },
        {
          "$ref": "#/definitions/babel.types.LabeledStatement"
        },
        {
          "$ref": "#/definitions/babel.types.OpaqueType"
        },
        {
          "$ref": "#/definitions/babel.types.ReturnStatement"
        },
        {
          "$ref": "#/definitions/babel.types.SwitchStatement"
        },
        {
          "$ref": "#/definitions/babel.types.TSDeclareFunction"
        },
        {
          "$ref": "#/definitions/babel.types.TSEnumDeclaration"
        },
        {
          "$ref": "#/definitions/babel.types.TSExportAssignment"
        },
        {
          "$ref": "#/definitions/babel.types.TSImportEqualsDeclaration"
        },
        {
          "$ref": "#/definitions/babel.types.TSInterfaceDeclaration"
        },
        {
          "$ref": "#/definitions/babel.types.TSModuleDeclaration"
        },
        {
          "$ref": "#/definitions/babel.types.TSNamespaceExportDeclaration"
        },
        {
          "$ref": "#/definitions/babel.types.TSTypeAliasDeclaration"
        },
        {
          "$ref": "#/definitions/babel.types.ThrowStatement"
        },
        {
          "$ref": "#/definitions/babel.types.TryStatement"
        },
        {
          "$ref": "#/definitions/babel.types.TypeAlias"
        },
        {
          "$ref": "#/definitions/babel.types.VariableDeclaration"
        },
        {
          "$ref": "#/definitions/babel.types.WhileStatement"
        },
        {
          "$ref": "#/definitions/babel.types.WithStatement"
        }
      ]
    },
    "babel.types.ContinueStatement": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ContinueStatement"
          ]
        },
        "label": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type"
      ]
    },
    "babel.types.DebuggerStatement": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "DebuggerStatement"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type"
      ]
    },
    "babel.types.DeclareClass": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "DeclareClass"
          ]
        },
        "id": {
          "$ref": "#/definitions/babel.types.Identifier"
        },
        "typeParameters": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TypeParameterDeclaration"
            },
            {
              "type": "null"
            }
          ]
        },
        "extends": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/babel.types.InterfaceExtends"
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "body": {
          "$ref": "#/definitions/babel.types.ObjectTypeAnnotation"
        },
        "implements": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/babel.types.ClassImplements"
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "mixins": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/babel.types.InterfaceExtends"
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "body",
        "id",
        "type"
      ]
    },
    "babel.types.TypeParameterDeclaration": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TypeParameterDeclaration"
          ]
        },
        "params": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/babel.types.TypeParameter"
          }
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "params",
        "type"
      ]
    },
    "babel.types.TypeParameter": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TypeParameter"
          ]
        },
        "bound": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TypeAnnotation"
            },
            {
              "type": "null"
            }
          ]
        },
        "default": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.AnyTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.ArrayTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.BooleanLiteralTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.BooleanTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.EmptyTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.ExistsTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.FunctionTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.GenericTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.IndexedAccessType"
            },
            {
              "$ref": "#/definitions/babel.types.InterfaceTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.IntersectionTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.MixedTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.NullLiteralTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.NullableTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.NumberLiteralTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.NumberTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalIndexedAccessType"
            },
            {
              "$ref": "#/definitions/babel.types.StringLiteralTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.StringTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.SymbolTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.ThisTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.TupleTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.TypeofTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.UnionTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.VoidTypeAnnotation"
            },
            {
              "type": "null"
            }
          ]
        },
        "variance": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Variance"
            },
            {
              "type": "null"
            }
          ]
        },
        "name": {
          "type": "string"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "name",
        "type"
      ]
    },
    "babel.types.TypeAnnotation": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TypeAnnotation"
          ]
        },
        "typeAnnotation": {
          "$ref": "#/definitions/babel.types.FlowType"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type",
        "typeAnnotation"
      ]
    },
    "babel.types.AnyTypeAnnotation": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "AnyTypeAnnotation"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type"
      ]
    },
    "babel.types.ArrayTypeAnnotation": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ArrayTypeAnnotation"
          ]
        },
        "elementType": {
          "$ref": "#/definitions/babel.types.FlowType"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "elementType",
        "type"
      ]
    },
    "babel.types.FlowType": {
      "anyOf": [
        {
          "$ref": "#/definitions/babel.types.AnyTypeAnnotation"
        },
        {
          "$ref": "#/definitions/babel.types.ArrayTypeAnnotation"
        },
        {
          "$ref": "#/definitions/babel.types.BooleanLiteralTypeAnnotation"
        },
        {
          "$ref": "#/definitions/babel.types.BooleanTypeAnnotation"
        },
        {
          "$ref": "#/definitions/babel.types.EmptyTypeAnnotation"
        },
        {
          "$ref": "#/definitions/babel.types.ExistsTypeAnnotation"
        },
        {
          "$ref": "#/definitions/babel.types.FunctionTypeAnnotation"
        },
        {
          "$ref": "#/definitions/babel.types.GenericTypeAnnotation"
        },
        {
          "$ref": "#/definitions/babel.types.IndexedAccessType"
        },
        {
          "$ref": "#/definitions/babel.types.InterfaceTypeAnnotation"
        },
        {
          "$ref": "#/definitions/babel.types.IntersectionTypeAnnotation"
        },
        {
          "$ref": "#/definitions/babel.types.MixedTypeAnnotation"
        },
        {
          "$ref": "#/definitions/babel.types.NullLiteralTypeAnnotation"
        },
        {
          "$ref": "#/definitions/babel.types.NullableTypeAnnotation"
        },
        {
          "$ref": "#/definitions/babel.types.NumberLiteralTypeAnnotation"
        },
        {
          "$ref": "#/definitions/babel.types.NumberTypeAnnotation"
        },
        {
          "$ref": "#/definitions/babel.types.ObjectTypeAnnotation"
        },
        {
          "$ref": "#/definitions/babel.types.OptionalIndexedAccessType"
        },
        {
          "$ref": "#/definitions/babel.types.StringLiteralTypeAnnotation"
        },
        {
          "$ref": "#/definitions/babel.types.StringTypeAnnotation"
        },
        {
          "$ref": "#/definitions/babel.types.SymbolTypeAnnotation"
        },
        {
          "$ref": "#/definitions/babel.types.ThisTypeAnnotation"
        },
        {
          "$ref": "#/definitions/babel.types.TupleTypeAnnotation"
        },
        {
          "$ref": "#/definitions/babel.types.TypeofTypeAnnotation"
        },
        {
          "$ref": "#/definitions/babel.types.UnionTypeAnnotation"
        },
        {
          "$ref": "#/definitions/babel.types.VoidTypeAnnotation"
        }
      ]
    },
    "babel.types.BooleanLiteralTypeAnnotation": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "BooleanLiteralTypeAnnotation"
          ]
        },
        "value": {
          "type": "boolean"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type",
        "value"
      ]
    },
    "babel.types.BooleanTypeAnnotation": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "BooleanTypeAnnotation"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type"
      ]
    },
    "babel.types.EmptyTypeAnnotation": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "EmptyTypeAnnotation"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type"
      ]
    },
    "babel.types.ExistsTypeAnnotation": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ExistsTypeAnnotation"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type"
      ]
    },
    "babel.types.FunctionTypeAnnotation": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "FunctionTypeAnnotation"
          ]
        },
        "typeParameters": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TypeParameterDeclaration"
            },
            {
              "type": "null"
            }
          ]
        },
        "params": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/babel.types.FunctionTypeParam"
          }
        },
        "rest": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.FunctionTypeParam"
            },
            {
              "type": "null"
            }
          ]
        },
        "returnType": {
          "$ref": "#/definitions/babel.types.FlowType"
        },
        "this": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.FunctionTypeParam"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "params",
        "returnType",
        "type"
      ]
    },
    "babel.types.FunctionTypeParam": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "FunctionTypeParam"
          ]
        },
        "name": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "type": "null"
            }
          ]
        },
        "typeAnnotation": {
          "$ref": "#/definitions/babel.types.FlowType"
        },
        "optional": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type",
        "typeAnnotation"
      ]
    },
    "babel.types.GenericTypeAnnotation": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "GenericTypeAnnotation"
          ]
        },
        "id": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "$ref": "#/definitions/babel.types.QualifiedTypeIdentifier"
            }
          ]
        },
        "typeParameters": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TypeParameterInstantiation"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "id",
        "type"
      ]
    },
    "babel.types.QualifiedTypeIdentifier": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "QualifiedTypeIdentifier"
          ]
        },
        "id": {
          "$ref": "#/definitions/babel.types.Identifier"
        },
        "qualification": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "$ref": "#/definitions/babel.types.QualifiedTypeIdentifier"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "id",
        "qualification",
        "type"
      ]
    },
    "babel.types.TypeParameterInstantiation": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TypeParameterInstantiation"
          ]
        },
        "params": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/babel.types.FlowType"
          }
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "params",
        "type"
      ]
    },
    "babel.types.IndexedAccessType": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "IndexedAccessType"
          ]
        },
        "objectType": {
          "$ref": "#/definitions/babel.types.FlowType"
        },
        "indexType": {
          "$ref": "#/definitions/babel.types.FlowType"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "indexType",
        "objectType",
        "type"
      ]
    },
    "babel.types.InterfaceTypeAnnotation": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "InterfaceTypeAnnotation"
          ]
        },
        "extends": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/babel.types.InterfaceExtends"
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "body": {
          "$ref": "#/definitions/babel.types.ObjectTypeAnnotation"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "body",
        "type"
      ]
    },
    "babel.types.InterfaceExtends": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "InterfaceExtends"
          ]
        },
        "id": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "$ref": "#/definitions/babel.types.QualifiedTypeIdentifier"
            }
          ]
        },
        "typeParameters": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TypeParameterInstantiation"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "id",
        "type"
      ]
    },
    "babel.types.ObjectTypeAnnotation": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ObjectTypeAnnotation"
          ]
        },
        "properties": {
          "type": "array",
          "items": {
            "anyOf": [
              {
                "$ref": "#/definitions/babel.types.ObjectTypeProperty"
              },
              {
                "$ref": "#/definitions/babel.types.ObjectTypeSpreadProperty"
              }
            ]
          }
        },
        "indexers": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/babel.types.ObjectTypeIndexer"
          }
        },
        "callProperties": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/babel.types.ObjectTypeCallProperty"
          }
        },
        "internalSlots": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/babel.types.ObjectTypeInternalSlot"
          }
        },
        "exact": {
          "type": "boolean"
        },
        "inexact": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "exact",
        "properties",
        "type"
      ]
    },
    "babel.types.ObjectTypeProperty": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ObjectTypeProperty"
          ]
        },
        "key": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "$ref": "#/definitions/babel.types.StringLiteral"
            }
          ]
        },
        "value": {
          "$ref": "#/definitions/babel.types.FlowType"
        },
        "variance": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Variance"
            },
            {
              "type": "null"
            }
          ]
        },
        "kind": {
          "enum": [
            "get",
            "init",
            "set"
          ],
          "type": "string"
        },
        "method": {
          "type": "boolean"
        },
        "optional": {
          "type": "boolean"
        },
        "proto": {
          "type": "boolean"
        },
        "static": {
          "type": "boolean"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "key",
        "kind",
        "method",
        "optional",
        "proto",
        "static",
        "type",
        "value"
      ]
    },
    "babel.types.Variance": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "Variance"
          ]
        },
        "kind": {
          "enum": [
            "minus",
            "plus"
          ],
          "type": "string"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "kind",
        "type"
      ]
    },
    "babel.types.ObjectTypeSpreadProperty": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ObjectTypeSpreadProperty"
          ]
        },
        "argument": {
          "$ref": "#/definitions/babel.types.FlowType"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "argument",
        "type"
      ]
    },
    "babel.types.ObjectTypeIndexer": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ObjectTypeIndexer"
          ]
        },
        "id": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "type": "null"
            }
          ]
        },
        "key": {
          "$ref": "#/definitions/babel.types.FlowType"
        },
        "value": {
          "$ref": "#/definitions/babel.types.FlowType"
        },
        "variance": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Variance"
            },
            {
              "type": "null"
            }
          ]
        },
        "static": {
          "type": "boolean"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "key",
        "static",
        "type",
        "value"
      ]
    },
    "babel.types.ObjectTypeCallProperty": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ObjectTypeCallProperty"
          ]
        },
        "value": {
          "$ref": "#/definitions/babel.types.FlowType"
        },
        "static": {
          "type": "boolean"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "static",
        "type",
        "value"
      ]
    },
    "babel.types.ObjectTypeInternalSlot": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ObjectTypeInternalSlot"
          ]
        },
        "id": {
          "$ref": "#/definitions/babel.types.Identifier"
        },
        "value": {
          "$ref": "#/definitions/babel.types.FlowType"
        },
        "optional": {
          "type": "boolean"
        },
        "static": {
          "type": "boolean"
        },
        "method": {
          "type": "boolean"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "id",
        "method",
        "optional",
        "static",
        "type",
        "value"
      ]
    },
    "babel.types.IntersectionTypeAnnotation": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "IntersectionTypeAnnotation"
          ]
        },
        "types": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/babel.types.FlowType"
          }
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type",
        "types"
      ]
    },
    "babel.types.MixedTypeAnnotation": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "MixedTypeAnnotation"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type"
      ]
    },
    "babel.types.NullLiteralTypeAnnotation": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "NullLiteralTypeAnnotation"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type"
      ]
    },
    "babel.types.NullableTypeAnnotation": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "NullableTypeAnnotation"
          ]
        },
        "typeAnnotation": {
          "$ref": "#/definitions/babel.types.FlowType"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type",
        "typeAnnotation"
      ]
    },
    "babel.types.NumberLiteralTypeAnnotation": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "NumberLiteralTypeAnnotation"
          ]
        },
        "value": {
          "type": "number"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type",
        "value"
      ]
    },
    "babel.types.NumberTypeAnnotation": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "NumberTypeAnnotation"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type"
      ]
    },
    "babel.types.OptionalIndexedAccessType": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "OptionalIndexedAccessType"
          ]
        },
        "objectType": {
          "$ref": "#/definitions/babel.types.FlowType"
        },
        "indexType": {
          "$ref": "#/definitions/babel.types.FlowType"
        },
        "optional": {
          "type": "boolean"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "indexType",
        "objectType",
        "optional",
        "type"
      ]
    },
    "babel.types.StringLiteralTypeAnnotation": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "StringLiteralTypeAnnotation"
          ]
        },
        "value": {
          "type": "string"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type",
        "value"
      ]
    },
    "babel.types.StringTypeAnnotation": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "StringTypeAnnotation"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type"
      ]
    },
    "babel.types.SymbolTypeAnnotation": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "SymbolTypeAnnotation"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type"
      ]
    },
    "babel.types.ThisTypeAnnotation": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ThisTypeAnnotation"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type"
      ]
    },
    "babel.types.TupleTypeAnnotation": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TupleTypeAnnotation"
          ]
        },
        "types": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/babel.types.FlowType"
          }
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type",
        "types"
      ]
    },
    "babel.types.TypeofTypeAnnotation": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TypeofTypeAnnotation"
          ]
        },
        "argument": {
          "$ref": "#/definitions/babel.types.FlowType"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "argument",
        "type"
      ]
    },
    "babel.types.UnionTypeAnnotation": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "UnionTypeAnnotation"
          ]
        },
        "types": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/babel.types.FlowType"
          }
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type",
        "types"
      ]
    },
    "babel.types.VoidTypeAnnotation": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "VoidTypeAnnotation"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type"
      ]
    },
    "babel.types.ClassImplements": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ClassImplements"
          ]
        },
        "id": {
          "$ref": "#/definitions/babel.types.Identifier"
        },
        "typeParameters": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TypeParameterInstantiation"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "id",
        "type"
      ]
    },
    "babel.types.DeclareExportAllDeclaration": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "DeclareExportAllDeclaration"
          ]
        },
        "source": {
          "$ref": "#/definitions/babel.types.StringLiteral"
        },
        "exportKind": {
          "anyOf": [
            {
              "enum": [
                "type",
                "value"
              ],
              "type": "string"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "source",
        "type"
      ]
    },
    "babel.types.DeclareExportDeclaration": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "DeclareExportDeclaration"
          ]
        },
        "declaration": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.AnyTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.ArrayTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.BooleanLiteralTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.BooleanTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.ClassImplements"
            },
            {
              "$ref": "#/definitions/babel.types.DeclareClass"
            },
            {
              "$ref": "#/definitions/babel.types.DeclareExportAllDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.DeclareExportDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.DeclareFunction"
            },
            {
              "$ref": "#/definitions/babel.types.DeclareInterface"
            },
            {
              "$ref": "#/definitions/babel.types.DeclareModule"
            },
            {
              "$ref": "#/definitions/babel.types.DeclareModuleExports"
            },
            {
              "$ref": "#/definitions/babel.types.DeclareOpaqueType"
            },
            {
              "$ref": "#/definitions/babel.types.DeclareTypeAlias"
            },
            {
              "$ref": "#/definitions/babel.types.DeclareVariable"
            },
            {
              "$ref": "#/definitions/babel.types.DeclaredPredicate"
            },
            {
              "$ref": "#/definitions/babel.types.EmptyTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.EnumBooleanBody"
            },
            {
              "$ref": "#/definitions/babel.types.EnumBooleanMember"
            },
            {
              "$ref": "#/definitions/babel.types.EnumDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.EnumDefaultedMember"
            },
            {
              "$ref": "#/definitions/babel.types.EnumNumberBody"
            },
            {
              "$ref": "#/definitions/babel.types.EnumNumberMember"
            },
            {
              "$ref": "#/definitions/babel.types.EnumStringBody"
            },
            {
              "$ref": "#/definitions/babel.types.EnumStringMember"
            },
            {
              "$ref": "#/definitions/babel.types.EnumSymbolBody"
            },
            {
              "$ref": "#/definitions/babel.types.ExistsTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.FunctionTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.FunctionTypeParam"
            },
            {
              "$ref": "#/definitions/babel.types.GenericTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.IndexedAccessType"
            },
            {
              "$ref": "#/definitions/babel.types.InferredPredicate"
            },
            {
              "$ref": "#/definitions/babel.types.InterfaceDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.InterfaceExtends"
            },
            {
              "$ref": "#/definitions/babel.types.InterfaceTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.IntersectionTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.MixedTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.NullLiteralTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.NullableTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.NumberLiteralTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.NumberTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectTypeCallProperty"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectTypeIndexer"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectTypeInternalSlot"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectTypeProperty"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectTypeSpreadProperty"
            },
            {
              "$ref": "#/definitions/babel.types.OpaqueType"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalIndexedAccessType"
            },
            {
              "$ref": "#/definitions/babel.types.QualifiedTypeIdentifier"
            },
            {
              "$ref": "#/definitions/babel.types.StringLiteralTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.StringTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.SymbolTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.ThisTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.TupleTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.TypeAlias"
            },
            {
              "$ref": "#/definitions/babel.types.TypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.TypeCastExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TypeParameter"
            },
            {
              "$ref": "#/definitions/babel.types.TypeParameterDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.TypeParameterInstantiation"
            },
            {
              "$ref": "#/definitions/babel.types.TypeofTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.UnionTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.Variance"
            },
            {
              "$ref": "#/definitions/babel.types.VoidTypeAnnotation"
            },
            {
              "type": "null"
            }
          ]
        },
        "specifiers": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.ExportNamespaceSpecifier"
                  },
                  {
                    "$ref": "#/definitions/babel.types.ExportSpecifier"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "source": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.StringLiteral"
            },
            {
              "type": "null"
            }
          ]
        },
        "default": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type"
      ]
    },
    "babel.types.DeclareFunction": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "DeclareFunction"
          ]
        },
        "id": {
          "$ref": "#/definitions/babel.types.Identifier"
        },
        "predicate": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.DeclaredPredicate"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "id",
        "type"
      ]
    },
    "babel.types.DeclaredPredicate": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "DeclaredPredicate"
          ]
        },
        "value": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.AnyTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.ArrayTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.BooleanLiteralTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.BooleanTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.ClassImplements"
            },
            {
              "$ref": "#/definitions/babel.types.DeclareClass"
            },
            {
              "$ref": "#/definitions/babel.types.DeclareExportAllDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.DeclareExportDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.DeclareFunction"
            },
            {
              "$ref": "#/definitions/babel.types.DeclareInterface"
            },
            {
              "$ref": "#/definitions/babel.types.DeclareModule"
            },
            {
              "$ref": "#/definitions/babel.types.DeclareModuleExports"
            },
            {
              "$ref": "#/definitions/babel.types.DeclareOpaqueType"
            },
            {
              "$ref": "#/definitions/babel.types.DeclareTypeAlias"
            },
            {
              "$ref": "#/definitions/babel.types.DeclareVariable"
            },
            {
              "$ref": "#/definitions/babel.types.DeclaredPredicate"
            },
            {
              "$ref": "#/definitions/babel.types.EmptyTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.EnumBooleanBody"
            },
            {
              "$ref": "#/definitions/babel.types.EnumBooleanMember"
            },
            {
              "$ref": "#/definitions/babel.types.EnumDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.EnumDefaultedMember"
            },
            {
              "$ref": "#/definitions/babel.types.EnumNumberBody"
            },
            {
              "$ref": "#/definitions/babel.types.EnumNumberMember"
            },
            {
              "$ref": "#/definitions/babel.types.EnumStringBody"
            },
            {
              "$ref": "#/definitions/babel.types.EnumStringMember"
            },
            {
              "$ref": "#/definitions/babel.types.EnumSymbolBody"
            },
            {
              "$ref": "#/definitions/babel.types.ExistsTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.FunctionTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.FunctionTypeParam"
            },
            {
              "$ref": "#/definitions/babel.types.GenericTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.IndexedAccessType"
            },
            {
              "$ref": "#/definitions/babel.types.InferredPredicate"
            },
            {
              "$ref": "#/definitions/babel.types.InterfaceDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.InterfaceExtends"
            },
            {
              "$ref": "#/definitions/babel.types.InterfaceTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.IntersectionTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.MixedTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.NullLiteralTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.NullableTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.NumberLiteralTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.NumberTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectTypeCallProperty"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectTypeIndexer"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectTypeInternalSlot"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectTypeProperty"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectTypeSpreadProperty"
            },
            {
              "$ref": "#/definitions/babel.types.OpaqueType"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalIndexedAccessType"
            },
            {
              "$ref": "#/definitions/babel.types.QualifiedTypeIdentifier"
            },
            {
              "$ref": "#/definitions/babel.types.StringLiteralTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.StringTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.SymbolTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.ThisTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.TupleTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.TypeAlias"
            },
            {
              "$ref": "#/definitions/babel.types.TypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.TypeCastExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TypeParameter"
            },
            {
              "$ref": "#/definitions/babel.types.TypeParameterDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.TypeParameterInstantiation"
            },
            {
              "$ref": "#/definitions/babel.types.TypeofTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.UnionTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.Variance"
            },
            {
              "$ref": "#/definitions/babel.types.VoidTypeAnnotation"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type",
        "value"
      ]
    },
    "babel.types.DeclareInterface": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "DeclareInterface"
          ]
        },
        "id": {
          "$ref": "#/definitions/babel.types.Identifier"
        },
        "typeParameters": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TypeParameterDeclaration"
            },
            {
              "type": "null"
            }
          ]
        },
        "extends": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/babel.types.InterfaceExtends"
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "body": {
          "$ref": "#/definitions/babel.types.ObjectTypeAnnotation"
        },
        "implements": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/babel.types.ClassImplements"
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "mixins": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/babel.types.InterfaceExtends"
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "body",
        "id",
        "type"
      ]
    },
    "babel.types.DeclareModule": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "DeclareModule"
          ]
        },
        "id": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "$ref": "#/definitions/babel.types.StringLiteral"
            }
          ]
        },
        "body": {
          "$ref": "#/definitions/babel.types.BlockStatement"
        },
        "kind": {
          "anyOf": [
            {
              "enum": [
                "CommonJS",
                "ES"
              ],
              "type": "string"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "body",
        "id",
        "type"
      ]
    },
    "babel.types.DeclareModuleExports": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "DeclareModuleExports"
          ]
        },
        "typeAnnotation": {
          "$ref": "#/definitions/babel.types.TypeAnnotation"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type",
        "typeAnnotation"
      ]
    },
    "babel.types.DeclareOpaqueType": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "DeclareOpaqueType"
          ]
        },
        "id": {
          "$ref": "#/definitions/babel.types.Identifier"
        },
        "typeParameters": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TypeParameterDeclaration"
            },
            {
              "type": "null"
            }
          ]
        },
        "supertype": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.AnyTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.ArrayTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.BooleanLiteralTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.BooleanTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.EmptyTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.ExistsTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.FunctionTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.GenericTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.IndexedAccessType"
            },
            {
              "$ref": "#/definitions/babel.types.InterfaceTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.IntersectionTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.MixedTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.NullLiteralTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.NullableTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.NumberLiteralTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.NumberTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalIndexedAccessType"
            },
            {
              "$ref": "#/definitions/babel.types.StringLiteralTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.StringTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.SymbolTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.ThisTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.TupleTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.TypeofTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.UnionTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.VoidTypeAnnotation"
            },
            {
              "type": "null"
            }
          ]
        },
        "impltype": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.AnyTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.ArrayTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.BooleanLiteralTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.BooleanTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.EmptyTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.ExistsTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.FunctionTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.GenericTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.IndexedAccessType"
            },
            {
              "$ref": "#/definitions/babel.types.InterfaceTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.IntersectionTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.MixedTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.NullLiteralTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.NullableTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.NumberLiteralTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.NumberTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalIndexedAccessType"
            },
            {
              "$ref": "#/definitions/babel.types.StringLiteralTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.StringTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.SymbolTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.ThisTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.TupleTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.TypeofTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.UnionTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.VoidTypeAnnotation"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "id",
        "type"
      ]
    },
    "babel.types.DeclareTypeAlias": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "DeclareTypeAlias"
          ]
        },
        "id": {
          "$ref": "#/definitions/babel.types.Identifier"
        },
        "typeParameters": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TypeParameterDeclaration"
            },
            {
              "type": "null"
            }
          ]
        },
        "right": {
          "$ref": "#/definitions/babel.types.FlowType"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "id",
        "right",
        "type"
      ]
    },
    "babel.types.DeclareVariable": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "DeclareVariable"
          ]
        },
        "id": {
          "$ref": "#/definitions/babel.types.Identifier"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "id",
        "type"
      ]
    },
    "babel.types.EnumBooleanBody": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "EnumBooleanBody"
          ]
        },
        "members": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/babel.types.EnumBooleanMember"
          }
        },
        "explicitType": {
          "type": "boolean"
        },
        "hasUnknownMembers": {
          "type": "boolean"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "explicitType",
        "hasUnknownMembers",
        "members",
        "type"
      ]
    },
    "babel.types.EnumBooleanMember": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "EnumBooleanMember"
          ]
        },
        "id": {
          "$ref": "#/definitions/babel.types.Identifier"
        },
        "init": {
          "$ref": "#/definitions/babel.types.BooleanLiteral"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "id",
        "init",
        "type"
      ]
    },
    "babel.types.EnumDeclaration": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "EnumDeclaration"
          ]
        },
        "id": {
          "$ref": "#/definitions/babel.types.Identifier"
        },
        "body": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.EnumBooleanBody"
            },
            {
              "$ref": "#/definitions/babel.types.EnumNumberBody"
            },
            {
              "$ref": "#/definitions/babel.types.EnumStringBody"
            },
            {
              "$ref": "#/definitions/babel.types.EnumSymbolBody"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "body",
        "id",
        "type"
      ]
    },
    "babel.types.EnumNumberBody": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "EnumNumberBody"
          ]
        },
        "members": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/babel.types.EnumNumberMember"
          }
        },
        "explicitType": {
          "type": "boolean"
        },
        "hasUnknownMembers": {
          "type": "boolean"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "explicitType",
        "hasUnknownMembers",
        "members",
        "type"
      ]
    },
    "babel.types.EnumNumberMember": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "EnumNumberMember"
          ]
        },
        "id": {
          "$ref": "#/definitions/babel.types.Identifier"
        },
        "init": {
          "$ref": "#/definitions/babel.types.NumericLiteral"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "id",
        "init",
        "type"
      ]
    },
    "babel.types.EnumStringBody": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "EnumStringBody"
          ]
        },
        "members": {
          "type": "array",
          "items": {
            "anyOf": [
              {
                "$ref": "#/definitions/babel.types.EnumDefaultedMember"
              },
              {
                "$ref": "#/definitions/babel.types.EnumStringMember"
              }
            ]
          }
        },
        "explicitType": {
          "type": "boolean"
        },
        "hasUnknownMembers": {
          "type": "boolean"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "explicitType",
        "hasUnknownMembers",
        "members",
        "type"
      ]
    },
    "babel.types.EnumDefaultedMember": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "EnumDefaultedMember"
          ]
        },
        "id": {
          "$ref": "#/definitions/babel.types.Identifier"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "id",
        "type"
      ]
    },
    "babel.types.EnumStringMember": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "EnumStringMember"
          ]
        },
        "id": {
          "$ref": "#/definitions/babel.types.Identifier"
        },
        "init": {
          "$ref": "#/definitions/babel.types.StringLiteral"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "id",
        "init",
        "type"
      ]
    },
    "babel.types.EnumSymbolBody": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "EnumSymbolBody"
          ]
        },
        "members": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/babel.types.EnumDefaultedMember"
          }
        },
        "hasUnknownMembers": {
          "type": "boolean"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "hasUnknownMembers",
        "members",
        "type"
      ]
    },
    "babel.types.InferredPredicate": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "InferredPredicate"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type"
      ]
    },
    "babel.types.InterfaceDeclaration": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "InterfaceDeclaration"
          ]
        },
        "id": {
          "$ref": "#/definitions/babel.types.Identifier"
        },
        "typeParameters": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TypeParameterDeclaration"
            },
            {
              "type": "null"
            }
          ]
        },
        "extends": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/babel.types.InterfaceExtends"
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "body": {
          "$ref": "#/definitions/babel.types.ObjectTypeAnnotation"
        },
        "implements": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/babel.types.ClassImplements"
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "mixins": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/babel.types.InterfaceExtends"
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "body",
        "id",
        "type"
      ]
    },
    "babel.types.OpaqueType": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "OpaqueType"
          ]
        },
        "id": {
          "$ref": "#/definitions/babel.types.Identifier"
        },
        "typeParameters": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TypeParameterDeclaration"
            },
            {
              "type": "null"
            }
          ]
        },
        "supertype": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.AnyTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.ArrayTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.BooleanLiteralTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.BooleanTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.EmptyTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.ExistsTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.FunctionTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.GenericTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.IndexedAccessType"
            },
            {
              "$ref": "#/definitions/babel.types.InterfaceTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.IntersectionTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.MixedTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.NullLiteralTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.NullableTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.NumberLiteralTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.NumberTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalIndexedAccessType"
            },
            {
              "$ref": "#/definitions/babel.types.StringLiteralTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.StringTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.SymbolTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.ThisTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.TupleTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.TypeofTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.UnionTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.VoidTypeAnnotation"
            },
            {
              "type": "null"
            }
          ]
        },
        "impltype": {
          "$ref": "#/definitions/babel.types.FlowType"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "id",
        "impltype",
        "type"
      ]
    },
    "babel.types.TypeAlias": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TypeAlias"
          ]
        },
        "id": {
          "$ref": "#/definitions/babel.types.Identifier"
        },
        "typeParameters": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TypeParameterDeclaration"
            },
            {
              "type": "null"
            }
          ]
        },
        "right": {
          "$ref": "#/definitions/babel.types.FlowType"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "id",
        "right",
        "type"
      ]
    },
    "babel.types.TypeCastExpression": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TypeCastExpression"
          ]
        },
        "expression": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "typeAnnotation": {
          "$ref": "#/definitions/babel.types.TypeAnnotation"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "expression",
        "type",
        "typeAnnotation"
      ]
    },
    "babel.types.ExportNamespaceSpecifier": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ExportNamespaceSpecifier"
          ]
        },
        "exported": {
          "$ref": "#/definitions/babel.types.Identifier"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "exported",
        "type"
      ]
    },
    "babel.types.ExportSpecifier": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ExportSpecifier"
          ]
        },
        "local": {
          "$ref": "#/definitions/babel.types.Identifier"
        },
        "exported": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "$ref": "#/definitions/babel.types.StringLiteral"
            }
          ]
        },
        "exportKind": {
          "anyOf": [
            {
              "enum": [
                "type",
                "value"
              ],
              "type": "string"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "exported",
        "local",
        "type"
      ]
    },
    "babel.types.DoWhileStatement": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "DoWhileStatement"
          ]
        },
        "test": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "body": {
          "$ref": "#/definitions/babel.types.Statement"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "body",
        "test",
        "type"
      ]
    },
    "babel.types.EmptyStatement": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "EmptyStatement"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type"
      ]
    },
    "babel.types.ExportAllDeclaration": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ExportAllDeclaration"
          ]
        },
        "source": {
          "$ref": "#/definitions/babel.types.StringLiteral"
        },
        "assertions": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/babel.types.ImportAttribute"
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "exportKind": {
          "anyOf": [
            {
              "enum": [
                "type",
                "value"
              ],
              "type": "string"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "source",
        "type"
      ]
    },
    "babel.types.ImportAttribute": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ImportAttribute"
          ]
        },
        "key": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "$ref": "#/definitions/babel.types.StringLiteral"
            }
          ]
        },
        "value": {
          "$ref": "#/definitions/babel.types.StringLiteral"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "key",
        "type",
        "value"
      ]
    },
    "babel.types.ExportDefaultDeclaration": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ExportDefaultDeclaration"
          ]
        },
        "declaration": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.ArrayExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ArrowFunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AssignmentExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AwaitExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BigIntLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.BinaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BindExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BooleanLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.CallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ClassDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.ClassExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ConditionalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.DecimalLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.DoExpression"
            },
            {
              "$ref": "#/definitions/babel.types.FunctionDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.FunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "$ref": "#/definitions/babel.types.Import"
            },
            {
              "$ref": "#/definitions/babel.types.JSXElement"
            },
            {
              "$ref": "#/definitions/babel.types.JSXFragment"
            },
            {
              "$ref": "#/definitions/babel.types.LogicalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MetaProperty"
            },
            {
              "$ref": "#/definitions/babel.types.ModuleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NewExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NullLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.NumericLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalCallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalMemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ParenthesizedExpression"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineBareFunction"
            },
            {
              "$ref": "#/definitions/babel.types.PipelinePrimaryTopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineTopicExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RecordExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RegExpLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.SequenceExpression"
            },
            {
              "$ref": "#/definitions/babel.types.StringLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.Super"
            },
            {
              "$ref": "#/definitions/babel.types.TSAsExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSInstantiationExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSNonNullExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAssertion"
            },
            {
              "$ref": "#/definitions/babel.types.TaggedTemplateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TemplateLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ThisExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.TupleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TypeCastExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UnaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UpdateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.YieldExpression"
            }
          ]
        },
        "exportKind": {
          "anyOf": [
            {
              "enum": [
                "value"
              ],
              "type": "string"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "declaration",
        "type"
      ]
    },
    "babel.types.FunctionDeclaration": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "FunctionDeclaration"
          ]
        },
        "id": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "type": "null"
            }
          ]
        },
        "params": {
          "type": "array",
          "items": {
            "anyOf": [
              {
                "$ref": "#/definitions/babel.types.ArrayPattern"
              },
              {
                "$ref": "#/definitions/babel.types.AssignmentPattern"
              },
              {
                "$ref": "#/definitions/babel.types.Identifier"
              },
              {
                "$ref": "#/definitions/babel.types.ObjectPattern"
              },
              {
                "$ref": "#/definitions/babel.types.RestElement"
              }
            ]
          }
        },
        "body": {
          "$ref": "#/definitions/babel.types.BlockStatement"
        },
        "generator": {
          "type": "boolean"
        },
        "async": {
          "type": "boolean"
        },
        "declare": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "predicate": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.DeclaredPredicate"
            },
            {
              "$ref": "#/definitions/babel.types.InferredPredicate"
            },
            {
              "type": "null"
            }
          ]
        },
        "returnType": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Noop"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.TypeAnnotation"
            },
            {
              "type": "null"
            }
          ]
        },
        "typeParameters": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Noop"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeParameterDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.TypeParameterDeclaration"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "body",
        "params",
        "type"
      ]
    },
    "babel.types.Noop": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "Noop"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type"
      ]
    },
    "babel.types.NewExpression": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "NewExpression"
          ]
        },
        "callee": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.ArrayExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ArrowFunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AssignmentExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AwaitExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BigIntLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.BinaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BindExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BooleanLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.CallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ClassExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ConditionalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.DecimalLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.DoExpression"
            },
            {
              "$ref": "#/definitions/babel.types.FunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "$ref": "#/definitions/babel.types.Import"
            },
            {
              "$ref": "#/definitions/babel.types.JSXElement"
            },
            {
              "$ref": "#/definitions/babel.types.JSXFragment"
            },
            {
              "$ref": "#/definitions/babel.types.LogicalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MetaProperty"
            },
            {
              "$ref": "#/definitions/babel.types.ModuleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NewExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NullLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.NumericLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalCallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalMemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ParenthesizedExpression"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineBareFunction"
            },
            {
              "$ref": "#/definitions/babel.types.PipelinePrimaryTopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineTopicExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RecordExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RegExpLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.SequenceExpression"
            },
            {
              "$ref": "#/definitions/babel.types.StringLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.Super"
            },
            {
              "$ref": "#/definitions/babel.types.TSAsExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSInstantiationExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSNonNullExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAssertion"
            },
            {
              "$ref": "#/definitions/babel.types.TaggedTemplateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TemplateLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ThisExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.TupleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TypeCastExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UnaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UpdateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.V8IntrinsicIdentifier"
            },
            {
              "$ref": "#/definitions/babel.types.YieldExpression"
            }
          ]
        },
        "arguments": {
          "type": "array",
          "items": {
            "anyOf": [
              {
                "$ref": "#/definitions/babel.types.ArgumentPlaceholder"
              },
              {
                "$ref": "#/definitions/babel.types.ArrayExpression"
              },
              {
                "$ref": "#/definitions/babel.types.ArrowFunctionExpression"
              },
              {
                "$ref": "#/definitions/babel.types.AssignmentExpression"
              },
              {
                "$ref": "#/definitions/babel.types.AwaitExpression"
              },
              {
                "$ref": "#/definitions/babel.types.BigIntLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.BinaryExpression"
              },
              {
                "$ref": "#/definitions/babel.types.BindExpression"
              },
              {
                "$ref": "#/definitions/babel.types.BooleanLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.CallExpression"
              },
              {
                "$ref": "#/definitions/babel.types.ClassExpression"
              },
              {
                "$ref": "#/definitions/babel.types.ConditionalExpression"
              },
              {
                "$ref": "#/definitions/babel.types.DecimalLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.DoExpression"
              },
              {
                "$ref": "#/definitions/babel.types.FunctionExpression"
              },
              {
                "$ref": "#/definitions/babel.types.Identifier"
              },
              {
                "$ref": "#/definitions/babel.types.Import"
              },
              {
                "$ref": "#/definitions/babel.types.JSXElement"
              },
              {
                "$ref": "#/definitions/babel.types.JSXFragment"
              },
              {
                "$ref": "#/definitions/babel.types.JSXNamespacedName"
              },
              {
                "$ref": "#/definitions/babel.types.LogicalExpression"
              },
              {
                "$ref": "#/definitions/babel.types.MemberExpression"
              },
              {
                "$ref": "#/definitions/babel.types.MetaProperty"
              },
              {
                "$ref": "#/definitions/babel.types.ModuleExpression"
              },
              {
                "$ref": "#/definitions/babel.types.NewExpression"
              },
              {
                "$ref": "#/definitions/babel.types.NullLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.NumericLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.ObjectExpression"
              },
              {
                "$ref": "#/definitions/babel.types.OptionalCallExpression"
              },
              {
                "$ref": "#/definitions/babel.types.OptionalMemberExpression"
              },
              {
                "$ref": "#/definitions/babel.types.ParenthesizedExpression"
              },
              {
                "$ref": "#/definitions/babel.types.PipelineBareFunction"
              },
              {
                "$ref": "#/definitions/babel.types.PipelinePrimaryTopicReference"
              },
              {
                "$ref": "#/definitions/babel.types.PipelineTopicExpression"
              },
              {
                "$ref": "#/definitions/babel.types.RecordExpression"
              },
              {
                "$ref": "#/definitions/babel.types.RegExpLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.SequenceExpression"
              },
              {
                "$ref": "#/definitions/babel.types.SpreadElement"
              },
              {
                "$ref": "#/definitions/babel.types.StringLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.Super"
              },
              {
                "$ref": "#/definitions/babel.types.TSAsExpression"
              },
              {
                "$ref": "#/definitions/babel.types.TSInstantiationExpression"
              },
              {
                "$ref": "#/definitions/babel.types.TSNonNullExpression"
              },
              {
                "$ref": "#/definitions/babel.types.TSTypeAssertion"
              },
              {
                "$ref": "#/definitions/babel.types.TaggedTemplateExpression"
              },
              {
                "$ref": "#/definitions/babel.types.TemplateLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.ThisExpression"
              },
              {
                "$ref": "#/definitions/babel.types.TopicReference"
              },
              {
                "$ref": "#/definitions/babel.types.TupleExpression"
              },
              {
                "$ref": "#/definitions/babel.types.TypeCastExpression"
              },
              {
                "$ref": "#/definitions/babel.types.UnaryExpression"
              },
              {
                "$ref": "#/definitions/babel.types.UpdateExpression"
              },
              {
                "$ref": "#/definitions/babel.types.YieldExpression"
              }
            ]
          }
        },
        "optional": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "typeArguments": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TypeParameterInstantiation"
            },
            {
              "type": "null"
            }
          ]
        },
        "typeParameters": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TSTypeParameterInstantiation"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "arguments",
        "callee",
        "type"
      ]
    },
    "babel.types.NullLiteral": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "NullLiteral"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type"
      ]
    },
    "babel.types.ObjectExpression": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ObjectExpression"
          ]
        },
        "properties": {
          "type": "array",
          "items": {
            "anyOf": [
              {
                "$ref": "#/definitions/babel.types.ObjectMethod"
              },
              {
                "$ref": "#/definitions/babel.types.ObjectProperty"
              },
              {
                "$ref": "#/definitions/babel.types.SpreadElement"
              }
            ]
          }
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "properties",
        "type"
      ]
    },
    "babel.types.ObjectMethod": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ObjectMethod"
          ]
        },
        "kind": {
          "enum": [
            "get",
            "method",
            "set"
          ],
          "type": "string"
        },
        "key": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "params": {
          "type": "array",
          "items": {
            "anyOf": [
              {
                "$ref": "#/definitions/babel.types.ArrayPattern"
              },
              {
                "$ref": "#/definitions/babel.types.AssignmentPattern"
              },
              {
                "$ref": "#/definitions/babel.types.Identifier"
              },
              {
                "$ref": "#/definitions/babel.types.ObjectPattern"
              },
              {
                "$ref": "#/definitions/babel.types.RestElement"
              }
            ]
          }
        },
        "body": {
          "$ref": "#/definitions/babel.types.BlockStatement"
        },
        "computed": {
          "type": "boolean"
        },
        "generator": {
          "type": "boolean"
        },
        "async": {
          "type": "boolean"
        },
        "decorators": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/babel.types.Decorator"
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "returnType": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Noop"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.TypeAnnotation"
            },
            {
              "type": "null"
            }
          ]
        },
        "typeParameters": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Noop"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeParameterDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.TypeParameterDeclaration"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "body",
        "computed",
        "key",
        "kind",
        "params",
        "type"
      ]
    },
    "babel.types.SpreadElement": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "SpreadElement"
          ]
        },
        "argument": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "argument",
        "type"
      ]
    },
    "babel.types.OptionalCallExpression": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "OptionalCallExpression"
          ]
        },
        "callee": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "arguments": {
          "type": "array",
          "items": {
            "anyOf": [
              {
                "$ref": "#/definitions/babel.types.ArgumentPlaceholder"
              },
              {
                "$ref": "#/definitions/babel.types.ArrayExpression"
              },
              {
                "$ref": "#/definitions/babel.types.ArrowFunctionExpression"
              },
              {
                "$ref": "#/definitions/babel.types.AssignmentExpression"
              },
              {
                "$ref": "#/definitions/babel.types.AwaitExpression"
              },
              {
                "$ref": "#/definitions/babel.types.BigIntLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.BinaryExpression"
              },
              {
                "$ref": "#/definitions/babel.types.BindExpression"
              },
              {
                "$ref": "#/definitions/babel.types.BooleanLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.CallExpression"
              },
              {
                "$ref": "#/definitions/babel.types.ClassExpression"
              },
              {
                "$ref": "#/definitions/babel.types.ConditionalExpression"
              },
              {
                "$ref": "#/definitions/babel.types.DecimalLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.DoExpression"
              },
              {
                "$ref": "#/definitions/babel.types.FunctionExpression"
              },
              {
                "$ref": "#/definitions/babel.types.Identifier"
              },
              {
                "$ref": "#/definitions/babel.types.Import"
              },
              {
                "$ref": "#/definitions/babel.types.JSXElement"
              },
              {
                "$ref": "#/definitions/babel.types.JSXFragment"
              },
              {
                "$ref": "#/definitions/babel.types.JSXNamespacedName"
              },
              {
                "$ref": "#/definitions/babel.types.LogicalExpression"
              },
              {
                "$ref": "#/definitions/babel.types.MemberExpression"
              },
              {
                "$ref": "#/definitions/babel.types.MetaProperty"
              },
              {
                "$ref": "#/definitions/babel.types.ModuleExpression"
              },
              {
                "$ref": "#/definitions/babel.types.NewExpression"
              },
              {
                "$ref": "#/definitions/babel.types.NullLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.NumericLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.ObjectExpression"
              },
              {
                "$ref": "#/definitions/babel.types.OptionalCallExpression"
              },
              {
                "$ref": "#/definitions/babel.types.OptionalMemberExpression"
              },
              {
                "$ref": "#/definitions/babel.types.ParenthesizedExpression"
              },
              {
                "$ref": "#/definitions/babel.types.PipelineBareFunction"
              },
              {
                "$ref": "#/definitions/babel.types.PipelinePrimaryTopicReference"
              },
              {
                "$ref": "#/definitions/babel.types.PipelineTopicExpression"
              },
              {
                "$ref": "#/definitions/babel.types.RecordExpression"
              },
              {
                "$ref": "#/definitions/babel.types.RegExpLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.SequenceExpression"
              },
              {
                "$ref": "#/definitions/babel.types.SpreadElement"
              },
              {
                "$ref": "#/definitions/babel.types.StringLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.Super"
              },
              {
                "$ref": "#/definitions/babel.types.TSAsExpression"
              },
              {
                "$ref": "#/definitions/babel.types.TSInstantiationExpression"
              },
              {
                "$ref": "#/definitions/babel.types.TSNonNullExpression"
              },
              {
                "$ref": "#/definitions/babel.types.TSTypeAssertion"
              },
              {
                "$ref": "#/definitions/babel.types.TaggedTemplateExpression"
              },
              {
                "$ref": "#/definitions/babel.types.TemplateLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.ThisExpression"
              },
              {
                "$ref": "#/definitions/babel.types.TopicReference"
              },
              {
                "$ref": "#/definitions/babel.types.TupleExpression"
              },
              {
                "$ref": "#/definitions/babel.types.TypeCastExpression"
              },
              {
                "$ref": "#/definitions/babel.types.UnaryExpression"
              },
              {
                "$ref": "#/definitions/babel.types.UpdateExpression"
              },
              {
                "$ref": "#/definitions/babel.types.YieldExpression"
              }
            ]
          }
        },
        "optional": {
          "type": "boolean"
        },
        "typeArguments": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TypeParameterInstantiation"
            },
            {
              "type": "null"
            }
          ]
        },
        "typeParameters": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TSTypeParameterInstantiation"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "arguments",
        "callee",
        "optional",
        "type"
      ]
    },
    "babel.types.ArgumentPlaceholder": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ArgumentPlaceholder"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type"
      ]
    },
    "babel.types.OptionalMemberExpression": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "OptionalMemberExpression"
          ]
        },
        "object": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "property": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "computed": {
          "type": "boolean"
        },
        "optional": {
          "type": "boolean"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "computed",
        "object",
        "optional",
        "property",
        "type"
      ]
    },
    "babel.types.ParenthesizedExpression": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ParenthesizedExpression"
          ]
        },
        "expression": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "expression",
        "type"
      ]
    },
    "babel.types.PipelineBareFunction": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "PipelineBareFunction"
          ]
        },
        "callee": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "callee",
        "type"
      ]
    },
    "babel.types.PipelinePrimaryTopicReference": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "PipelinePrimaryTopicReference"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type"
      ]
    },
    "babel.types.PipelineTopicExpression": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "PipelineTopicExpression"
          ]
        },
        "expression": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "expression",
        "type"
      ]
    },
    "babel.types.RecordExpression": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "RecordExpression"
          ]
        },
        "properties": {
          "type": "array",
          "items": {
            "anyOf": [
              {
                "$ref": "#/definitions/babel.types.ObjectProperty"
              },
              {
                "$ref": "#/definitions/babel.types.SpreadElement"
              }
            ]
          }
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "properties",
        "type"
      ]
    },
    "babel.types.RegExpLiteral": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "RegExpLiteral"
          ]
        },
        "pattern": {
          "type": "string"
        },
        "flags": {
          "type": "string"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "flags",
        "pattern",
        "type"
      ]
    },
    "babel.types.SequenceExpression": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "SequenceExpression"
          ]
        },
        "expressions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/babel.types.Expression"
          }
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "expressions",
        "type"
      ]
    },
    "babel.types.Super": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "Super"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type"
      ]
    },
    "babel.types.TSInstantiationExpression": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSInstantiationExpression"
          ]
        },
        "expression": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "typeParameters": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TSTypeParameterInstantiation"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "expression",
        "type"
      ]
    },
    "babel.types.TSNonNullExpression": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSNonNullExpression"
          ]
        },
        "expression": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "expression",
        "type"
      ]
    },
    "babel.types.TSTypeAssertion": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSTypeAssertion"
          ]
        },
        "typeAnnotation": {
          "$ref": "#/definitions/babel.types.TSType"
        },
        "expression": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "expression",
        "type",
        "typeAnnotation"
      ]
    },
    "babel.types.TaggedTemplateExpression": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TaggedTemplateExpression"
          ]
        },
        "tag": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "quasi": {
          "$ref": "#/definitions/babel.types.TemplateLiteral"
        },
        "typeParameters": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TSTypeParameterInstantiation"
            },
            {
              "$ref": "#/definitions/babel.types.TypeParameterInstantiation"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "quasi",
        "tag",
        "type"
      ]
    },
    "babel.types.TemplateLiteral": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TemplateLiteral"
          ]
        },
        "quasis": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/babel.types.TemplateElement"
          }
        },
        "expressions": {
          "type": "array",
          "items": {
            "anyOf": [
              {
                "$ref": "#/definitions/babel.types.ArrayExpression"
              },
              {
                "$ref": "#/definitions/babel.types.ArrowFunctionExpression"
              },
              {
                "$ref": "#/definitions/babel.types.AssignmentExpression"
              },
              {
                "$ref": "#/definitions/babel.types.AwaitExpression"
              },
              {
                "$ref": "#/definitions/babel.types.BigIntLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.BinaryExpression"
              },
              {
                "$ref": "#/definitions/babel.types.BindExpression"
              },
              {
                "$ref": "#/definitions/babel.types.BooleanLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.CallExpression"
              },
              {
                "$ref": "#/definitions/babel.types.ClassExpression"
              },
              {
                "$ref": "#/definitions/babel.types.ConditionalExpression"
              },
              {
                "$ref": "#/definitions/babel.types.DecimalLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.DoExpression"
              },
              {
                "$ref": "#/definitions/babel.types.FunctionExpression"
              },
              {
                "$ref": "#/definitions/babel.types.Identifier"
              },
              {
                "$ref": "#/definitions/babel.types.Import"
              },
              {
                "$ref": "#/definitions/babel.types.JSXElement"
              },
              {
                "$ref": "#/definitions/babel.types.JSXFragment"
              },
              {
                "$ref": "#/definitions/babel.types.LogicalExpression"
              },
              {
                "$ref": "#/definitions/babel.types.MemberExpression"
              },
              {
                "$ref": "#/definitions/babel.types.MetaProperty"
              },
              {
                "$ref": "#/definitions/babel.types.ModuleExpression"
              },
              {
                "$ref": "#/definitions/babel.types.NewExpression"
              },
              {
                "$ref": "#/definitions/babel.types.NullLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.NumericLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.ObjectExpression"
              },
              {
                "$ref": "#/definitions/babel.types.OptionalCallExpression"
              },
              {
                "$ref": "#/definitions/babel.types.OptionalMemberExpression"
              },
              {
                "$ref": "#/definitions/babel.types.ParenthesizedExpression"
              },
              {
                "$ref": "#/definitions/babel.types.PipelineBareFunction"
              },
              {
                "$ref": "#/definitions/babel.types.PipelinePrimaryTopicReference"
              },
              {
                "$ref": "#/definitions/babel.types.PipelineTopicExpression"
              },
              {
                "$ref": "#/definitions/babel.types.RecordExpression"
              },
              {
                "$ref": "#/definitions/babel.types.RegExpLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.SequenceExpression"
              },
              {
                "$ref": "#/definitions/babel.types.StringLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.Super"
              },
              {
                "$ref": "#/definitions/babel.types.TSAnyKeyword"
              },
              {
                "$ref": "#/definitions/babel.types.TSArrayType"
              },
              {
                "$ref": "#/definitions/babel.types.TSAsExpression"
              },
              {
                "$ref": "#/definitions/babel.types.TSBigIntKeyword"
              },
              {
                "$ref": "#/definitions/babel.types.TSBooleanKeyword"
              },
              {
                "$ref": "#/definitions/babel.types.TSConditionalType"
              },
              {
                "$ref": "#/definitions/babel.types.TSConstructorType"
              },
              {
                "$ref": "#/definitions/babel.types.TSExpressionWithTypeArguments"
              },
              {
                "$ref": "#/definitions/babel.types.TSFunctionType"
              },
              {
                "$ref": "#/definitions/babel.types.TSImportType"
              },
              {
                "$ref": "#/definitions/babel.types.TSIndexedAccessType"
              },
              {
                "$ref": "#/definitions/babel.types.TSInferType"
              },
              {
                "$ref": "#/definitions/babel.types.TSInstantiationExpression"
              },
              {
                "$ref": "#/definitions/babel.types.TSIntersectionType"
              },
              {
                "$ref": "#/definitions/babel.types.TSIntrinsicKeyword"
              },
              {
                "$ref": "#/definitions/babel.types.TSLiteralType"
              },
              {
                "$ref": "#/definitions/babel.types.TSMappedType"
              },
              {
                "$ref": "#/definitions/babel.types.TSNeverKeyword"
              },
              {
                "$ref": "#/definitions/babel.types.TSNonNullExpression"
              },
              {
                "$ref": "#/definitions/babel.types.TSNullKeyword"
              },
              {
                "$ref": "#/definitions/babel.types.TSNumberKeyword"
              },
              {
                "$ref": "#/definitions/babel.types.TSObjectKeyword"
              },
              {
                "$ref": "#/definitions/babel.types.TSOptionalType"
              },
              {
                "$ref": "#/definitions/babel.types.TSParenthesizedType"
              },
              {
                "$ref": "#/definitions/babel.types.TSRestType"
              },
              {
                "$ref": "#/definitions/babel.types.TSStringKeyword"
              },
              {
                "$ref": "#/definitions/babel.types.TSSymbolKeyword"
              },
              {
                "$ref": "#/definitions/babel.types.TSThisType"
              },
              {
                "$ref": "#/definitions/babel.types.TSTupleType"
              },
              {
                "$ref": "#/definitions/babel.types.TSTypeAssertion"
              },
              {
                "$ref": "#/definitions/babel.types.TSTypeLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.TSTypeOperator"
              },
              {
                "$ref": "#/definitions/babel.types.TSTypePredicate"
              },
              {
                "$ref": "#/definitions/babel.types.TSTypeQuery"
              },
              {
                "$ref": "#/definitions/babel.types.TSTypeReference"
              },
              {
                "$ref": "#/definitions/babel.types.TSUndefinedKeyword"
              },
              {
                "$ref": "#/definitions/babel.types.TSUnionType"
              },
              {
                "$ref": "#/definitions/babel.types.TSUnknownKeyword"
              },
              {
                "$ref": "#/definitions/babel.types.TSVoidKeyword"
              },
              {
                "$ref": "#/definitions/babel.types.TaggedTemplateExpression"
              },
              {
                "$ref": "#/definitions/babel.types.TemplateLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.ThisExpression"
              },
              {
                "$ref": "#/definitions/babel.types.TopicReference"
              },
              {
                "$ref": "#/definitions/babel.types.TupleExpression"
              },
              {
                "$ref": "#/definitions/babel.types.TypeCastExpression"
              },
              {
                "$ref": "#/definitions/babel.types.UnaryExpression"
              },
              {
                "$ref": "#/definitions/babel.types.UpdateExpression"
              },
              {
                "$ref": "#/definitions/babel.types.YieldExpression"
              }
            ]
          }
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "expressions",
        "quasis",
        "type"
      ]
    },
    "babel.types.TemplateElement": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TemplateElement"
          ]
        },
        "value": {
          "type": "object",
          "properties": {
            "raw": {
              "type": "string"
            },
            "cooked": {
              "type": "string"
            }
          },
          "required": [
            "raw"
          ]
        },
        "tail": {
          "type": "boolean"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "tail",
        "type",
        "value"
      ]
    },
    "babel.types.TSTypeOperator": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSTypeOperator"
          ]
        },
        "typeAnnotation": {
          "$ref": "#/definitions/babel.types.TSType"
        },
        "operator": {
          "type": "string"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "operator",
        "type",
        "typeAnnotation"
      ]
    },
    "babel.types.TSTypePredicate": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSTypePredicate"
          ]
        },
        "parameterName": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "$ref": "#/definitions/babel.types.TSThisType"
            }
          ]
        },
        "typeAnnotation": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TSTypeAnnotation"
            },
            {
              "type": "null"
            }
          ]
        },
        "asserts": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "parameterName",
        "type"
      ]
    },
    "babel.types.TSTypeQuery": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSTypeQuery"
          ]
        },
        "exprName": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "$ref": "#/definitions/babel.types.TSImportType"
            },
            {
              "$ref": "#/definitions/babel.types.TSQualifiedName"
            }
          ]
        },
        "typeParameters": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TSTypeParameterInstantiation"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "exprName",
        "type"
      ]
    },
    "babel.types.TSTypeReference": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSTypeReference"
          ]
        },
        "typeName": {
          "$ref": "#/definitions/babel.types.TSEntityName"
        },
        "typeParameters": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TSTypeParameterInstantiation"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type",
        "typeName"
      ]
    },
    "babel.types.TSUndefinedKeyword": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSUndefinedKeyword"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type"
      ]
    },
    "babel.types.TSUnionType": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSUnionType"
          ]
        },
        "types": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/babel.types.TSType"
          }
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type",
        "types"
      ]
    },
    "babel.types.TSUnknownKeyword": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSUnknownKeyword"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type"
      ]
    },
    "babel.types.TSVoidKeyword": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSVoidKeyword"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type"
      ]
    },
    "babel.types.ThisExpression": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ThisExpression"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type"
      ]
    },
    "babel.types.TopicReference": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TopicReference"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type"
      ]
    },
    "babel.types.TupleExpression": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TupleExpression"
          ]
        },
        "elements": {
          "type": "array",
          "items": {
            "anyOf": [
              {
                "$ref": "#/definitions/babel.types.ArrayExpression"
              },
              {
                "$ref": "#/definitions/babel.types.ArrowFunctionExpression"
              },
              {
                "$ref": "#/definitions/babel.types.AssignmentExpression"
              },
              {
                "$ref": "#/definitions/babel.types.AwaitExpression"
              },
              {
                "$ref": "#/definitions/babel.types.BigIntLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.BinaryExpression"
              },
              {
                "$ref": "#/definitions/babel.types.BindExpression"
              },
              {
                "$ref": "#/definitions/babel.types.BooleanLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.CallExpression"
              },
              {
                "$ref": "#/definitions/babel.types.ClassExpression"
              },
              {
                "$ref": "#/definitions/babel.types.ConditionalExpression"
              },
              {
                "$ref": "#/definitions/babel.types.DecimalLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.DoExpression"
              },
              {
                "$ref": "#/definitions/babel.types.FunctionExpression"
              },
              {
                "$ref": "#/definitions/babel.types.Identifier"
              },
              {
                "$ref": "#/definitions/babel.types.Import"
              },
              {
                "$ref": "#/definitions/babel.types.JSXElement"
              },
              {
                "$ref": "#/definitions/babel.types.JSXFragment"
              },
              {
                "$ref": "#/definitions/babel.types.LogicalExpression"
              },
              {
                "$ref": "#/definitions/babel.types.MemberExpression"
              },
              {
                "$ref": "#/definitions/babel.types.MetaProperty"
              },
              {
                "$ref": "#/definitions/babel.types.ModuleExpression"
              },
              {
                "$ref": "#/definitions/babel.types.NewExpression"
              },
              {
                "$ref": "#/definitions/babel.types.NullLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.NumericLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.ObjectExpression"
              },
              {
                "$ref": "#/definitions/babel.types.OptionalCallExpression"
              },
              {
                "$ref": "#/definitions/babel.types.OptionalMemberExpression"
              },
              {
                "$ref": "#/definitions/babel.types.ParenthesizedExpression"
              },
              {
                "$ref": "#/definitions/babel.types.PipelineBareFunction"
              },
              {
                "$ref": "#/definitions/babel.types.PipelinePrimaryTopicReference"
              },
              {
                "$ref": "#/definitions/babel.types.PipelineTopicExpression"
              },
              {
                "$ref": "#/definitions/babel.types.RecordExpression"
              },
              {
                "$ref": "#/definitions/babel.types.RegExpLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.SequenceExpression"
              },
              {
                "$ref": "#/definitions/babel.types.SpreadElement"
              },
              {
                "$ref": "#/definitions/babel.types.StringLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.Super"
              },
              {
                "$ref": "#/definitions/babel.types.TSAsExpression"
              },
              {
                "$ref": "#/definitions/babel.types.TSInstantiationExpression"
              },
              {
                "$ref": "#/definitions/babel.types.TSNonNullExpression"
              },
              {
                "$ref": "#/definitions/babel.types.TSTypeAssertion"
              },
              {
                "$ref": "#/definitions/babel.types.TaggedTemplateExpression"
              },
              {
                "$ref": "#/definitions/babel.types.TemplateLiteral"
              },
              {
                "$ref": "#/definitions/babel.types.ThisExpression"
              },
              {
                "$ref": "#/definitions/babel.types.TopicReference"
              },
              {
                "$ref": "#/definitions/babel.types.TupleExpression"
              },
              {
                "$ref": "#/definitions/babel.types.TypeCastExpression"
              },
              {
                "$ref": "#/definitions/babel.types.UnaryExpression"
              },
              {
                "$ref": "#/definitions/babel.types.UpdateExpression"
              },
              {
                "$ref": "#/definitions/babel.types.YieldExpression"
              }
            ]
          }
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "elements",
        "type"
      ]
    },
    "babel.types.UpdateExpression": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "UpdateExpression"
          ]
        },
        "operator": {
          "enum": [
            "++",
            "--"
          ],
          "type": "string"
        },
        "argument": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "prefix": {
          "type": "boolean"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "argument",
        "operator",
        "prefix",
        "type"
      ]
    },
    "babel.types.YieldExpression": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "YieldExpression"
          ]
        },
        "argument": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.ArrayExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ArrowFunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AssignmentExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AwaitExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BigIntLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.BinaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BindExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BooleanLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.CallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ClassExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ConditionalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.DecimalLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.DoExpression"
            },
            {
              "$ref": "#/definitions/babel.types.FunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "$ref": "#/definitions/babel.types.Import"
            },
            {
              "$ref": "#/definitions/babel.types.JSXElement"
            },
            {
              "$ref": "#/definitions/babel.types.JSXFragment"
            },
            {
              "$ref": "#/definitions/babel.types.LogicalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MetaProperty"
            },
            {
              "$ref": "#/definitions/babel.types.ModuleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NewExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NullLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.NumericLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalCallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalMemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ParenthesizedExpression"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineBareFunction"
            },
            {
              "$ref": "#/definitions/babel.types.PipelinePrimaryTopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineTopicExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RecordExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RegExpLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.SequenceExpression"
            },
            {
              "$ref": "#/definitions/babel.types.StringLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.Super"
            },
            {
              "$ref": "#/definitions/babel.types.TSAsExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSInstantiationExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSNonNullExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAssertion"
            },
            {
              "$ref": "#/definitions/babel.types.TaggedTemplateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TemplateLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ThisExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.TupleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TypeCastExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UnaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UpdateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.YieldExpression"
            },
            {
              "type": "null"
            }
          ]
        },
        "delegate": {
          "type": "boolean"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "delegate",
        "type"
      ]
    },
    "babel.types.V8IntrinsicIdentifier": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "V8IntrinsicIdentifier"
          ]
        },
        "name": {
          "type": "string"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "name",
        "type"
      ]
    },
    "babel.types.ExportNamedDeclaration": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ExportNamedDeclaration"
          ]
        },
        "declaration": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.ClassDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.DeclareClass"
            },
            {
              "$ref": "#/definitions/babel.types.DeclareExportAllDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.DeclareExportDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.DeclareFunction"
            },
            {
              "$ref": "#/definitions/babel.types.DeclareInterface"
            },
            {
              "$ref": "#/definitions/babel.types.DeclareModule"
            },
            {
              "$ref": "#/definitions/babel.types.DeclareModuleExports"
            },
            {
              "$ref": "#/definitions/babel.types.DeclareOpaqueType"
            },
            {
              "$ref": "#/definitions/babel.types.DeclareTypeAlias"
            },
            {
              "$ref": "#/definitions/babel.types.DeclareVariable"
            },
            {
              "$ref": "#/definitions/babel.types.EnumDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.ExportAllDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.ExportDefaultDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.ExportNamedDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.FunctionDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.ImportDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.InterfaceDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.OpaqueType"
            },
            {
              "$ref": "#/definitions/babel.types.TSDeclareFunction"
            },
            {
              "$ref": "#/definitions/babel.types.TSEnumDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.TSInterfaceDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.TSModuleDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAliasDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.TypeAlias"
            },
            {
              "$ref": "#/definitions/babel.types.VariableDeclaration"
            },
            {
              "type": "null"
            }
          ]
        },
        "specifiers": {
          "type": "array",
          "items": {
            "anyOf": [
              {
                "$ref": "#/definitions/babel.types.ExportDefaultSpecifier"
              },
              {
                "$ref": "#/definitions/babel.types.ExportNamespaceSpecifier"
              },
              {
                "$ref": "#/definitions/babel.types.ExportSpecifier"
              }
            ]
          }
        },
        "source": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.StringLiteral"
            },
            {
              "type": "null"
            }
          ]
        },
        "assertions": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/babel.types.ImportAttribute"
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "exportKind": {
          "anyOf": [
            {
              "enum": [
                "type",
                "value"
              ],
              "type": "string"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "specifiers",
        "type"
      ]
    },
    "babel.types.ImportDeclaration": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ImportDeclaration"
          ]
        },
        "specifiers": {
          "type": "array",
          "items": {
            "anyOf": [
              {
                "$ref": "#/definitions/babel.types.ImportDefaultSpecifier"
              },
              {
                "$ref": "#/definitions/babel.types.ImportNamespaceSpecifier"
              },
              {
                "$ref": "#/definitions/babel.types.ImportSpecifier"
              }
            ]
          }
        },
        "source": {
          "$ref": "#/definitions/babel.types.StringLiteral"
        },
        "assertions": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/babel.types.ImportAttribute"
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "importKind": {
          "anyOf": [
            {
              "enum": [
                "type",
                "typeof",
                "value"
              ],
              "type": "string"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "source",
        "specifiers",
        "type"
      ]
    },
    "babel.types.ImportDefaultSpecifier": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ImportDefaultSpecifier"
          ]
        },
        "local": {
          "$ref": "#/definitions/babel.types.Identifier"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "local",
        "type"
      ]
    },
    "babel.types.ImportNamespaceSpecifier": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ImportNamespaceSpecifier"
          ]
        },
        "local": {
          "$ref": "#/definitions/babel.types.Identifier"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "local",
        "type"
      ]
    },
    "babel.types.ImportSpecifier": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ImportSpecifier"
          ]
        },
        "local": {
          "$ref": "#/definitions/babel.types.Identifier"
        },
        "imported": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "$ref": "#/definitions/babel.types.StringLiteral"
            }
          ]
        },
        "importKind": {
          "anyOf": [
            {
              "enum": [
                "type",
                "typeof",
                "value"
              ],
              "type": "string"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "imported",
        "local",
        "type"
      ]
    },
    "babel.types.TSDeclareFunction": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSDeclareFunction"
          ]
        },
        "id": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "type": "null"
            }
          ]
        },
        "typeParameters": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Noop"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeParameterDeclaration"
            },
            {
              "type": "null"
            }
          ]
        },
        "params": {
          "type": "array",
          "items": {
            "anyOf": [
              {
                "$ref": "#/definitions/babel.types.ArrayPattern"
              },
              {
                "$ref": "#/definitions/babel.types.AssignmentPattern"
              },
              {
                "$ref": "#/definitions/babel.types.Identifier"
              },
              {
                "$ref": "#/definitions/babel.types.ObjectPattern"
              },
              {
                "$ref": "#/definitions/babel.types.RestElement"
              }
            ]
          }
        },
        "returnType": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Noop"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAnnotation"
            },
            {
              "type": "null"
            }
          ]
        },
        "async": {
          "type": "boolean"
        },
        "declare": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "generator": {
          "type": "boolean"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "params",
        "type"
      ]
    },
    "babel.types.TSEnumDeclaration": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSEnumDeclaration"
          ]
        },
        "id": {
          "$ref": "#/definitions/babel.types.Identifier"
        },
        "members": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/babel.types.TSEnumMember"
          }
        },
        "const": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "declare": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "initializer": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.ArrayExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ArrowFunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AssignmentExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AwaitExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BigIntLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.BinaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BindExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BooleanLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.CallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ClassExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ConditionalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.DecimalLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.DoExpression"
            },
            {
              "$ref": "#/definitions/babel.types.FunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "$ref": "#/definitions/babel.types.Import"
            },
            {
              "$ref": "#/definitions/babel.types.JSXElement"
            },
            {
              "$ref": "#/definitions/babel.types.JSXFragment"
            },
            {
              "$ref": "#/definitions/babel.types.LogicalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MetaProperty"
            },
            {
              "$ref": "#/definitions/babel.types.ModuleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NewExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NullLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.NumericLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalCallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalMemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ParenthesizedExpression"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineBareFunction"
            },
            {
              "$ref": "#/definitions/babel.types.PipelinePrimaryTopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineTopicExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RecordExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RegExpLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.SequenceExpression"
            },
            {
              "$ref": "#/definitions/babel.types.StringLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.Super"
            },
            {
              "$ref": "#/definitions/babel.types.TSAsExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSInstantiationExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSNonNullExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAssertion"
            },
            {
              "$ref": "#/definitions/babel.types.TaggedTemplateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TemplateLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ThisExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.TupleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TypeCastExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UnaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UpdateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.YieldExpression"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "id",
        "members",
        "type"
      ]
    },
    "babel.types.TSEnumMember": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSEnumMember"
          ]
        },
        "id": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "$ref": "#/definitions/babel.types.StringLiteral"
            }
          ]
        },
        "initializer": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.ArrayExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ArrowFunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AssignmentExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AwaitExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BigIntLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.BinaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BindExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BooleanLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.CallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ClassExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ConditionalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.DecimalLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.DoExpression"
            },
            {
              "$ref": "#/definitions/babel.types.FunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "$ref": "#/definitions/babel.types.Import"
            },
            {
              "$ref": "#/definitions/babel.types.JSXElement"
            },
            {
              "$ref": "#/definitions/babel.types.JSXFragment"
            },
            {
              "$ref": "#/definitions/babel.types.LogicalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MetaProperty"
            },
            {
              "$ref": "#/definitions/babel.types.ModuleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NewExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NullLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.NumericLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalCallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalMemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ParenthesizedExpression"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineBareFunction"
            },
            {
              "$ref": "#/definitions/babel.types.PipelinePrimaryTopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineTopicExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RecordExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RegExpLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.SequenceExpression"
            },
            {
              "$ref": "#/definitions/babel.types.StringLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.Super"
            },
            {
              "$ref": "#/definitions/babel.types.TSAsExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSInstantiationExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSNonNullExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAssertion"
            },
            {
              "$ref": "#/definitions/babel.types.TaggedTemplateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TemplateLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ThisExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.TupleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TypeCastExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UnaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UpdateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.YieldExpression"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "id",
        "type"
      ]
    },
    "babel.types.TSInterfaceDeclaration": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSInterfaceDeclaration"
          ]
        },
        "id": {
          "$ref": "#/definitions/babel.types.Identifier"
        },
        "typeParameters": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TSTypeParameterDeclaration"
            },
            {
              "type": "null"
            }
          ]
        },
        "extends": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/babel.types.TSExpressionWithTypeArguments"
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "body": {
          "$ref": "#/definitions/babel.types.TSInterfaceBody"
        },
        "declare": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "body",
        "id",
        "type"
      ]
    },
    "babel.types.TSInterfaceBody": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSInterfaceBody"
          ]
        },
        "body": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/babel.types.TSTypeElement"
          }
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "body",
        "type"
      ]
    },
    "babel.types.TSTypeElement": {
      "anyOf": [
        {
          "$ref": "#/definitions/babel.types.TSCallSignatureDeclaration"
        },
        {
          "$ref": "#/definitions/babel.types.TSConstructSignatureDeclaration"
        },
        {
          "$ref": "#/definitions/babel.types.TSIndexSignature"
        },
        {
          "$ref": "#/definitions/babel.types.TSMethodSignature"
        },
        {
          "$ref": "#/definitions/babel.types.TSPropertySignature"
        }
      ]
    },
    "babel.types.TSModuleDeclaration": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSModuleDeclaration"
          ]
        },
        "id": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "$ref": "#/definitions/babel.types.StringLiteral"
            }
          ]
        },
        "body": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TSModuleBlock"
            },
            {
              "$ref": "#/definitions/babel.types.TSModuleDeclaration"
            }
          ]
        },
        "declare": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "global": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "body",
        "id",
        "type"
      ]
    },
    "babel.types.TSModuleBlock": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSModuleBlock"
          ]
        },
        "body": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/babel.types.Statement"
          }
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "body",
        "type"
      ]
    },
    "babel.types.TSTypeAliasDeclaration": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSTypeAliasDeclaration"
          ]
        },
        "id": {
          "$ref": "#/definitions/babel.types.Identifier"
        },
        "typeParameters": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.TSTypeParameterDeclaration"
            },
            {
              "type": "null"
            }
          ]
        },
        "typeAnnotation": {
          "$ref": "#/definitions/babel.types.TSType"
        },
        "declare": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "id",
        "type",
        "typeAnnotation"
      ]
    },
    "babel.types.VariableDeclaration": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "VariableDeclaration"
          ]
        },
        "kind": {
          "enum": [
            "const",
            "let",
            "var"
          ],
          "type": "string"
        },
        "declarations": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/babel.types.VariableDeclarator"
          }
        },
        "declare": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "declarations",
        "kind",
        "type"
      ]
    },
    "babel.types.VariableDeclarator": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "VariableDeclarator"
          ]
        },
        "id": {
          "$ref": "#/definitions/babel.types.LVal"
        },
        "init": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.ArrayExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ArrowFunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AssignmentExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AwaitExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BigIntLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.BinaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BindExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BooleanLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.CallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ClassExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ConditionalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.DecimalLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.DoExpression"
            },
            {
              "$ref": "#/definitions/babel.types.FunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "$ref": "#/definitions/babel.types.Import"
            },
            {
              "$ref": "#/definitions/babel.types.JSXElement"
            },
            {
              "$ref": "#/definitions/babel.types.JSXFragment"
            },
            {
              "$ref": "#/definitions/babel.types.LogicalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MetaProperty"
            },
            {
              "$ref": "#/definitions/babel.types.ModuleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NewExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NullLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.NumericLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalCallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalMemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ParenthesizedExpression"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineBareFunction"
            },
            {
              "$ref": "#/definitions/babel.types.PipelinePrimaryTopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineTopicExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RecordExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RegExpLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.SequenceExpression"
            },
            {
              "$ref": "#/definitions/babel.types.StringLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.Super"
            },
            {
              "$ref": "#/definitions/babel.types.TSAsExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSInstantiationExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSNonNullExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAssertion"
            },
            {
              "$ref": "#/definitions/babel.types.TaggedTemplateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TemplateLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ThisExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.TupleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TypeCastExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UnaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UpdateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.YieldExpression"
            },
            {
              "type": "null"
            }
          ]
        },
        "definite": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "id",
        "type"
      ]
    },
    "babel.types.ExportDefaultSpecifier": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ExportDefaultSpecifier"
          ]
        },
        "exported": {
          "$ref": "#/definitions/babel.types.Identifier"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "exported",
        "type"
      ]
    },
    "babel.types.ExpressionStatement": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ExpressionStatement"
          ]
        },
        "expression": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "expression",
        "type"
      ]
    },
    "babel.types.ForInStatement": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ForInStatement"
          ]
        },
        "left": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.ArrayPattern"
            },
            {
              "$ref": "#/definitions/babel.types.AssignmentPattern"
            },
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "$ref": "#/definitions/babel.types.MemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectPattern"
            },
            {
              "$ref": "#/definitions/babel.types.RestElement"
            },
            {
              "$ref": "#/definitions/babel.types.TSAsExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSNonNullExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSParameterProperty"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAssertion"
            },
            {
              "$ref": "#/definitions/babel.types.VariableDeclaration"
            }
          ]
        },
        "right": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "body": {
          "$ref": "#/definitions/babel.types.Statement"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "body",
        "left",
        "right",
        "type"
      ]
    },
    "babel.types.TSParameterProperty": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSParameterProperty"
          ]
        },
        "parameter": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.AssignmentPattern"
            },
            {
              "$ref": "#/definitions/babel.types.Identifier"
            }
          ]
        },
        "accessibility": {
          "anyOf": [
            {
              "enum": [
                "private",
                "protected",
                "public"
              ],
              "type": "string"
            },
            {
              "type": "null"
            }
          ]
        },
        "decorators": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/babel.types.Decorator"
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "override": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "readonly": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "parameter",
        "type"
      ]
    },
    "babel.types.ForOfStatement": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ForOfStatement"
          ]
        },
        "left": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.ArrayPattern"
            },
            {
              "$ref": "#/definitions/babel.types.AssignmentPattern"
            },
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "$ref": "#/definitions/babel.types.MemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectPattern"
            },
            {
              "$ref": "#/definitions/babel.types.RestElement"
            },
            {
              "$ref": "#/definitions/babel.types.TSAsExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSNonNullExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSParameterProperty"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAssertion"
            },
            {
              "$ref": "#/definitions/babel.types.VariableDeclaration"
            }
          ]
        },
        "right": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "body": {
          "$ref": "#/definitions/babel.types.Statement"
        },
        "await": {
          "type": "boolean"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "await",
        "body",
        "left",
        "right",
        "type"
      ]
    },
    "babel.types.ForStatement": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ForStatement"
          ]
        },
        "init": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.ArrayExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ArrowFunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AssignmentExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AwaitExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BigIntLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.BinaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BindExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BooleanLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.CallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ClassExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ConditionalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.DecimalLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.DoExpression"
            },
            {
              "$ref": "#/definitions/babel.types.FunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "$ref": "#/definitions/babel.types.Import"
            },
            {
              "$ref": "#/definitions/babel.types.JSXElement"
            },
            {
              "$ref": "#/definitions/babel.types.JSXFragment"
            },
            {
              "$ref": "#/definitions/babel.types.LogicalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MetaProperty"
            },
            {
              "$ref": "#/definitions/babel.types.ModuleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NewExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NullLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.NumericLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalCallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalMemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ParenthesizedExpression"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineBareFunction"
            },
            {
              "$ref": "#/definitions/babel.types.PipelinePrimaryTopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineTopicExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RecordExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RegExpLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.SequenceExpression"
            },
            {
              "$ref": "#/definitions/babel.types.StringLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.Super"
            },
            {
              "$ref": "#/definitions/babel.types.TSAsExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSInstantiationExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSNonNullExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAssertion"
            },
            {
              "$ref": "#/definitions/babel.types.TaggedTemplateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TemplateLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ThisExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.TupleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TypeCastExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UnaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UpdateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.VariableDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.YieldExpression"
            },
            {
              "type": "null"
            }
          ]
        },
        "test": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.ArrayExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ArrowFunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AssignmentExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AwaitExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BigIntLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.BinaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BindExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BooleanLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.CallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ClassExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ConditionalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.DecimalLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.DoExpression"
            },
            {
              "$ref": "#/definitions/babel.types.FunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "$ref": "#/definitions/babel.types.Import"
            },
            {
              "$ref": "#/definitions/babel.types.JSXElement"
            },
            {
              "$ref": "#/definitions/babel.types.JSXFragment"
            },
            {
              "$ref": "#/definitions/babel.types.LogicalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MetaProperty"
            },
            {
              "$ref": "#/definitions/babel.types.ModuleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NewExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NullLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.NumericLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalCallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalMemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ParenthesizedExpression"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineBareFunction"
            },
            {
              "$ref": "#/definitions/babel.types.PipelinePrimaryTopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineTopicExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RecordExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RegExpLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.SequenceExpression"
            },
            {
              "$ref": "#/definitions/babel.types.StringLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.Super"
            },
            {
              "$ref": "#/definitions/babel.types.TSAsExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSInstantiationExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSNonNullExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAssertion"
            },
            {
              "$ref": "#/definitions/babel.types.TaggedTemplateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TemplateLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ThisExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.TupleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TypeCastExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UnaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UpdateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.YieldExpression"
            },
            {
              "type": "null"
            }
          ]
        },
        "update": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.ArrayExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ArrowFunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AssignmentExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AwaitExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BigIntLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.BinaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BindExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BooleanLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.CallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ClassExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ConditionalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.DecimalLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.DoExpression"
            },
            {
              "$ref": "#/definitions/babel.types.FunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "$ref": "#/definitions/babel.types.Import"
            },
            {
              "$ref": "#/definitions/babel.types.JSXElement"
            },
            {
              "$ref": "#/definitions/babel.types.JSXFragment"
            },
            {
              "$ref": "#/definitions/babel.types.LogicalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MetaProperty"
            },
            {
              "$ref": "#/definitions/babel.types.ModuleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NewExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NullLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.NumericLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalCallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalMemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ParenthesizedExpression"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineBareFunction"
            },
            {
              "$ref": "#/definitions/babel.types.PipelinePrimaryTopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineTopicExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RecordExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RegExpLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.SequenceExpression"
            },
            {
              "$ref": "#/definitions/babel.types.StringLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.Super"
            },
            {
              "$ref": "#/definitions/babel.types.TSAsExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSInstantiationExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSNonNullExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAssertion"
            },
            {
              "$ref": "#/definitions/babel.types.TaggedTemplateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TemplateLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ThisExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.TupleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TypeCastExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UnaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UpdateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.YieldExpression"
            },
            {
              "type": "null"
            }
          ]
        },
        "body": {
          "$ref": "#/definitions/babel.types.Statement"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "body",
        "type"
      ]
    },
    "babel.types.IfStatement": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "IfStatement"
          ]
        },
        "test": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "consequent": {
          "$ref": "#/definitions/babel.types.Statement"
        },
        "alternate": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.BlockStatement"
            },
            {
              "$ref": "#/definitions/babel.types.BreakStatement"
            },
            {
              "$ref": "#/definitions/babel.types.ClassDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.ContinueStatement"
            },
            {
              "$ref": "#/definitions/babel.types.DebuggerStatement"
            },
            {
              "$ref": "#/definitions/babel.types.DeclareClass"
            },
            {
              "$ref": "#/definitions/babel.types.DeclareExportAllDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.DeclareExportDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.DeclareFunction"
            },
            {
              "$ref": "#/definitions/babel.types.DeclareInterface"
            },
            {
              "$ref": "#/definitions/babel.types.DeclareModule"
            },
            {
              "$ref": "#/definitions/babel.types.DeclareModuleExports"
            },
            {
              "$ref": "#/definitions/babel.types.DeclareOpaqueType"
            },
            {
              "$ref": "#/definitions/babel.types.DeclareTypeAlias"
            },
            {
              "$ref": "#/definitions/babel.types.DeclareVariable"
            },
            {
              "$ref": "#/definitions/babel.types.DoWhileStatement"
            },
            {
              "$ref": "#/definitions/babel.types.EmptyStatement"
            },
            {
              "$ref": "#/definitions/babel.types.EnumDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.ExportAllDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.ExportDefaultDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.ExportNamedDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.ExpressionStatement"
            },
            {
              "$ref": "#/definitions/babel.types.ForInStatement"
            },
            {
              "$ref": "#/definitions/babel.types.ForOfStatement"
            },
            {
              "$ref": "#/definitions/babel.types.ForStatement"
            },
            {
              "$ref": "#/definitions/babel.types.FunctionDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.IfStatement"
            },
            {
              "$ref": "#/definitions/babel.types.ImportDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.InterfaceDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.LabeledStatement"
            },
            {
              "$ref": "#/definitions/babel.types.OpaqueType"
            },
            {
              "$ref": "#/definitions/babel.types.ReturnStatement"
            },
            {
              "$ref": "#/definitions/babel.types.SwitchStatement"
            },
            {
              "$ref": "#/definitions/babel.types.TSDeclareFunction"
            },
            {
              "$ref": "#/definitions/babel.types.TSEnumDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.TSExportAssignment"
            },
            {
              "$ref": "#/definitions/babel.types.TSImportEqualsDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.TSInterfaceDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.TSModuleDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.TSNamespaceExportDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAliasDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.ThrowStatement"
            },
            {
              "$ref": "#/definitions/babel.types.TryStatement"
            },
            {
              "$ref": "#/definitions/babel.types.TypeAlias"
            },
            {
              "$ref": "#/definitions/babel.types.VariableDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.WhileStatement"
            },
            {
              "$ref": "#/definitions/babel.types.WithStatement"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "consequent",
        "test",
        "type"
      ]
    },
    "babel.types.LabeledStatement": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "LabeledStatement"
          ]
        },
        "label": {
          "$ref": "#/definitions/babel.types.Identifier"
        },
        "body": {
          "$ref": "#/definitions/babel.types.Statement"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "body",
        "label",
        "type"
      ]
    },
    "babel.types.ReturnStatement": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ReturnStatement"
          ]
        },
        "argument": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.ArrayExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ArrowFunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AssignmentExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AwaitExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BigIntLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.BinaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BindExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BooleanLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.CallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ClassExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ConditionalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.DecimalLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.DoExpression"
            },
            {
              "$ref": "#/definitions/babel.types.FunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "$ref": "#/definitions/babel.types.Import"
            },
            {
              "$ref": "#/definitions/babel.types.JSXElement"
            },
            {
              "$ref": "#/definitions/babel.types.JSXFragment"
            },
            {
              "$ref": "#/definitions/babel.types.LogicalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MetaProperty"
            },
            {
              "$ref": "#/definitions/babel.types.ModuleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NewExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NullLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.NumericLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalCallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalMemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ParenthesizedExpression"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineBareFunction"
            },
            {
              "$ref": "#/definitions/babel.types.PipelinePrimaryTopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineTopicExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RecordExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RegExpLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.SequenceExpression"
            },
            {
              "$ref": "#/definitions/babel.types.StringLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.Super"
            },
            {
              "$ref": "#/definitions/babel.types.TSAsExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSInstantiationExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSNonNullExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAssertion"
            },
            {
              "$ref": "#/definitions/babel.types.TaggedTemplateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TemplateLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ThisExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.TupleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TypeCastExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UnaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UpdateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.YieldExpression"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type"
      ]
    },
    "babel.types.SwitchStatement": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "SwitchStatement"
          ]
        },
        "discriminant": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "cases": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/babel.types.SwitchCase"
          }
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "cases",
        "discriminant",
        "type"
      ]
    },
    "babel.types.SwitchCase": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "SwitchCase"
          ]
        },
        "test": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.ArrayExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ArrowFunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AssignmentExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AwaitExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BigIntLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.BinaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BindExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BooleanLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.CallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ClassExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ConditionalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.DecimalLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.DoExpression"
            },
            {
              "$ref": "#/definitions/babel.types.FunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "$ref": "#/definitions/babel.types.Import"
            },
            {
              "$ref": "#/definitions/babel.types.JSXElement"
            },
            {
              "$ref": "#/definitions/babel.types.JSXFragment"
            },
            {
              "$ref": "#/definitions/babel.types.LogicalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MetaProperty"
            },
            {
              "$ref": "#/definitions/babel.types.ModuleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NewExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NullLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.NumericLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalCallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalMemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ParenthesizedExpression"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineBareFunction"
            },
            {
              "$ref": "#/definitions/babel.types.PipelinePrimaryTopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineTopicExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RecordExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RegExpLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.SequenceExpression"
            },
            {
              "$ref": "#/definitions/babel.types.StringLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.Super"
            },
            {
              "$ref": "#/definitions/babel.types.TSAsExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSInstantiationExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSNonNullExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAssertion"
            },
            {
              "$ref": "#/definitions/babel.types.TaggedTemplateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TemplateLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ThisExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.TupleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TypeCastExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UnaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UpdateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.YieldExpression"
            },
            {
              "type": "null"
            }
          ]
        },
        "consequent": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/babel.types.Statement"
          }
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "consequent",
        "type"
      ]
    },
    "babel.types.TSExportAssignment": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSExportAssignment"
          ]
        },
        "expression": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "expression",
        "type"
      ]
    },
    "babel.types.TSImportEqualsDeclaration": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSImportEqualsDeclaration"
          ]
        },
        "id": {
          "$ref": "#/definitions/babel.types.Identifier"
        },
        "moduleReference": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "$ref": "#/definitions/babel.types.TSExternalModuleReference"
            },
            {
              "$ref": "#/definitions/babel.types.TSQualifiedName"
            }
          ]
        },
        "importKind": {
          "anyOf": [
            {
              "enum": [
                "type",
                "value"
              ],
              "type": "string"
            },
            {
              "type": "null"
            }
          ]
        },
        "isExport": {
          "type": "boolean"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "id",
        "isExport",
        "moduleReference",
        "type"
      ]
    },
    "babel.types.TSExternalModuleReference": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSExternalModuleReference"
          ]
        },
        "expression": {
          "$ref": "#/definitions/babel.types.StringLiteral"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "expression",
        "type"
      ]
    },
    "babel.types.TSNamespaceExportDeclaration": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSNamespaceExportDeclaration"
          ]
        },
        "id": {
          "$ref": "#/definitions/babel.types.Identifier"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "id",
        "type"
      ]
    },
    "babel.types.ThrowStatement": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ThrowStatement"
          ]
        },
        "argument": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "argument",
        "type"
      ]
    },
    "babel.types.TryStatement": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TryStatement"
          ]
        },
        "block": {
          "$ref": "#/definitions/babel.types.BlockStatement"
        },
        "handler": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.CatchClause"
            },
            {
              "type": "null"
            }
          ]
        },
        "finalizer": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.BlockStatement"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "block",
        "type"
      ]
    },
    "babel.types.CatchClause": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "CatchClause"
          ]
        },
        "param": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.ArrayPattern"
            },
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectPattern"
            },
            {
              "type": "null"
            }
          ]
        },
        "body": {
          "$ref": "#/definitions/babel.types.BlockStatement"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "body",
        "type"
      ]
    },
    "babel.types.WhileStatement": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "WhileStatement"
          ]
        },
        "test": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "body": {
          "$ref": "#/definitions/babel.types.Statement"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "body",
        "test",
        "type"
      ]
    },
    "babel.types.WithStatement": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "WithStatement"
          ]
        },
        "object": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "body": {
          "$ref": "#/definitions/babel.types.Statement"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "body",
        "object",
        "type"
      ]
    },
    "babel.types.Directive": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "Directive"
          ]
        },
        "value": {
          "$ref": "#/definitions/babel.types.DirectiveLiteral"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type",
        "value"
      ]
    },
    "babel.types.DirectiveLiteral": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "DirectiveLiteral"
          ]
        },
        "value": {
          "type": "string"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type",
        "value"
      ]
    },
    "babel.types.InterpreterDirective": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "InterpreterDirective"
          ]
        },
        "value": {
          "type": "string"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "type",
        "value"
      ]
    },
    "babel.types.JSXSpreadAttribute": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "JSXSpreadAttribute"
          ]
        },
        "argument": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "argument",
        "type"
      ]
    },
    "babel.types.JSXClosingElement": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "JSXClosingElement"
          ]
        },
        "name": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.JSXIdentifier"
            },
            {
              "$ref": "#/definitions/babel.types.JSXMemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.JSXNamespacedName"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "name",
        "type"
      ]
    },
    "babel.types.ClassBody": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ClassBody"
          ]
        },
        "body": {
          "type": "array",
          "items": {
            "anyOf": [
              {
                "$ref": "#/definitions/babel.types.ClassAccessorProperty"
              },
              {
                "$ref": "#/definitions/babel.types.ClassMethod"
              },
              {
                "$ref": "#/definitions/babel.types.ClassPrivateMethod"
              },
              {
                "$ref": "#/definitions/babel.types.ClassPrivateProperty"
              },
              {
                "$ref": "#/definitions/babel.types.ClassProperty"
              },
              {
                "$ref": "#/definitions/babel.types.StaticBlock"
              },
              {
                "$ref": "#/definitions/babel.types.TSDeclareMethod"
              },
              {
                "$ref": "#/definitions/babel.types.TSIndexSignature"
              }
            ]
          }
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "body",
        "type"
      ]
    },
    "babel.types.ClassAccessorProperty": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ClassAccessorProperty"
          ]
        },
        "key": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.ArrayExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ArrowFunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AssignmentExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AwaitExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BigIntLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.BinaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BindExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BooleanLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.CallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ClassExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ConditionalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.DecimalLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.DoExpression"
            },
            {
              "$ref": "#/definitions/babel.types.FunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "$ref": "#/definitions/babel.types.Import"
            },
            {
              "$ref": "#/definitions/babel.types.JSXElement"
            },
            {
              "$ref": "#/definitions/babel.types.JSXFragment"
            },
            {
              "$ref": "#/definitions/babel.types.LogicalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MetaProperty"
            },
            {
              "$ref": "#/definitions/babel.types.ModuleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NewExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NullLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.NumericLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalCallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalMemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ParenthesizedExpression"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineBareFunction"
            },
            {
              "$ref": "#/definitions/babel.types.PipelinePrimaryTopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineTopicExpression"
            },
            {
              "$ref": "#/definitions/babel.types.PrivateName"
            },
            {
              "$ref": "#/definitions/babel.types.RecordExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RegExpLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.SequenceExpression"
            },
            {
              "$ref": "#/definitions/babel.types.StringLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.Super"
            },
            {
              "$ref": "#/definitions/babel.types.TSAsExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSInstantiationExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSNonNullExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAssertion"
            },
            {
              "$ref": "#/definitions/babel.types.TaggedTemplateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TemplateLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ThisExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.TupleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TypeCastExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UnaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UpdateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.YieldExpression"
            }
          ]
        },
        "value": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.ArrayExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ArrowFunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AssignmentExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AwaitExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BigIntLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.BinaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BindExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BooleanLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.CallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ClassExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ConditionalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.DecimalLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.DoExpression"
            },
            {
              "$ref": "#/definitions/babel.types.FunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "$ref": "#/definitions/babel.types.Import"
            },
            {
              "$ref": "#/definitions/babel.types.JSXElement"
            },
            {
              "$ref": "#/definitions/babel.types.JSXFragment"
            },
            {
              "$ref": "#/definitions/babel.types.LogicalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MetaProperty"
            },
            {
              "$ref": "#/definitions/babel.types.ModuleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NewExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NullLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.NumericLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalCallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalMemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ParenthesizedExpression"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineBareFunction"
            },
            {
              "$ref": "#/definitions/babel.types.PipelinePrimaryTopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineTopicExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RecordExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RegExpLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.SequenceExpression"
            },
            {
              "$ref": "#/definitions/babel.types.StringLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.Super"
            },
            {
              "$ref": "#/definitions/babel.types.TSAsExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSInstantiationExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSNonNullExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAssertion"
            },
            {
              "$ref": "#/definitions/babel.types.TaggedTemplateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TemplateLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ThisExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.TupleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TypeCastExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UnaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UpdateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.YieldExpression"
            },
            {
              "type": "null"
            }
          ]
        },
        "typeAnnotation": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Noop"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.TypeAnnotation"
            },
            {
              "type": "null"
            }
          ]
        },
        "decorators": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/babel.types.Decorator"
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "computed": {
          "type": "boolean"
        },
        "static": {
          "type": "boolean"
        },
        "abstract": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "accessibility": {
          "anyOf": [
            {
              "enum": [
                "private",
                "protected",
                "public"
              ],
              "type": "string"
            },
            {
              "type": "null"
            }
          ]
        },
        "declare": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "definite": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "optional": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "override": {
          "type": "boolean"
        },
        "readonly": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "variance": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Variance"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "key",
        "type"
      ]
    },
    "babel.types.PrivateName": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "PrivateName"
          ]
        },
        "id": {
          "$ref": "#/definitions/babel.types.Identifier"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "id",
        "type"
      ]
    },
    "babel.types.ClassMethod": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ClassMethod"
          ]
        },
        "kind": {
          "enum": [
            "constructor",
            "get",
            "method",
            "set"
          ],
          "type": "string"
        },
        "key": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "params": {
          "type": "array",
          "items": {
            "anyOf": [
              {
                "$ref": "#/definitions/babel.types.ArrayPattern"
              },
              {
                "$ref": "#/definitions/babel.types.AssignmentPattern"
              },
              {
                "$ref": "#/definitions/babel.types.Identifier"
              },
              {
                "$ref": "#/definitions/babel.types.ObjectPattern"
              },
              {
                "$ref": "#/definitions/babel.types.RestElement"
              },
              {
                "$ref": "#/definitions/babel.types.TSParameterProperty"
              }
            ]
          }
        },
        "body": {
          "$ref": "#/definitions/babel.types.BlockStatement"
        },
        "computed": {
          "type": "boolean"
        },
        "static": {
          "type": "boolean"
        },
        "generator": {
          "type": "boolean"
        },
        "async": {
          "type": "boolean"
        },
        "abstract": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "access": {
          "anyOf": [
            {
              "enum": [
                "private",
                "protected",
                "public"
              ],
              "type": "string"
            },
            {
              "type": "null"
            }
          ]
        },
        "accessibility": {
          "anyOf": [
            {
              "enum": [
                "private",
                "protected",
                "public"
              ],
              "type": "string"
            },
            {
              "type": "null"
            }
          ]
        },
        "decorators": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/babel.types.Decorator"
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "optional": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "override": {
          "type": "boolean"
        },
        "returnType": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Noop"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.TypeAnnotation"
            },
            {
              "type": "null"
            }
          ]
        },
        "typeParameters": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Noop"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeParameterDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.TypeParameterDeclaration"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "body",
        "key",
        "params",
        "type"
      ]
    },
    "babel.types.ClassPrivateMethod": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ClassPrivateMethod"
          ]
        },
        "kind": {
          "enum": [
            "constructor",
            "get",
            "method",
            "set"
          ],
          "type": "string"
        },
        "key": {
          "$ref": "#/definitions/babel.types.PrivateName"
        },
        "params": {
          "type": "array",
          "items": {
            "anyOf": [
              {
                "$ref": "#/definitions/babel.types.ArrayPattern"
              },
              {
                "$ref": "#/definitions/babel.types.AssignmentPattern"
              },
              {
                "$ref": "#/definitions/babel.types.Identifier"
              },
              {
                "$ref": "#/definitions/babel.types.ObjectPattern"
              },
              {
                "$ref": "#/definitions/babel.types.RestElement"
              },
              {
                "$ref": "#/definitions/babel.types.TSParameterProperty"
              }
            ]
          }
        },
        "body": {
          "$ref": "#/definitions/babel.types.BlockStatement"
        },
        "static": {
          "type": "boolean"
        },
        "abstract": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "access": {
          "anyOf": [
            {
              "enum": [
                "private",
                "protected",
                "public"
              ],
              "type": "string"
            },
            {
              "type": "null"
            }
          ]
        },
        "accessibility": {
          "anyOf": [
            {
              "enum": [
                "private",
                "protected",
                "public"
              ],
              "type": "string"
            },
            {
              "type": "null"
            }
          ]
        },
        "async": {
          "type": "boolean"
        },
        "computed": {
          "type": "boolean"
        },
        "decorators": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/babel.types.Decorator"
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "generator": {
          "type": "boolean"
        },
        "optional": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "override": {
          "type": "boolean"
        },
        "returnType": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Noop"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.TypeAnnotation"
            },
            {
              "type": "null"
            }
          ]
        },
        "typeParameters": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Noop"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeParameterDeclaration"
            },
            {
              "$ref": "#/definitions/babel.types.TypeParameterDeclaration"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "body",
        "key",
        "params",
        "type"
      ]
    },
    "babel.types.ClassPrivateProperty": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ClassPrivateProperty"
          ]
        },
        "key": {
          "$ref": "#/definitions/babel.types.PrivateName"
        },
        "value": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.ArrayExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ArrowFunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AssignmentExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AwaitExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BigIntLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.BinaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BindExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BooleanLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.CallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ClassExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ConditionalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.DecimalLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.DoExpression"
            },
            {
              "$ref": "#/definitions/babel.types.FunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "$ref": "#/definitions/babel.types.Import"
            },
            {
              "$ref": "#/definitions/babel.types.JSXElement"
            },
            {
              "$ref": "#/definitions/babel.types.JSXFragment"
            },
            {
              "$ref": "#/definitions/babel.types.LogicalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MetaProperty"
            },
            {
              "$ref": "#/definitions/babel.types.ModuleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NewExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NullLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.NumericLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalCallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalMemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ParenthesizedExpression"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineBareFunction"
            },
            {
              "$ref": "#/definitions/babel.types.PipelinePrimaryTopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineTopicExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RecordExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RegExpLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.SequenceExpression"
            },
            {
              "$ref": "#/definitions/babel.types.StringLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.Super"
            },
            {
              "$ref": "#/definitions/babel.types.TSAsExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSInstantiationExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSNonNullExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAssertion"
            },
            {
              "$ref": "#/definitions/babel.types.TaggedTemplateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TemplateLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ThisExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.TupleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TypeCastExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UnaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UpdateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.YieldExpression"
            },
            {
              "type": "null"
            }
          ]
        },
        "decorators": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/babel.types.Decorator"
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "static": {},
        "definite": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "readonly": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "typeAnnotation": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Noop"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.TypeAnnotation"
            },
            {
              "type": "null"
            }
          ]
        },
        "variance": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Variance"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "key",
        "static",
        "type"
      ]
    },
    "babel.types.ClassProperty": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "ClassProperty"
          ]
        },
        "key": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "value": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.ArrayExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ArrowFunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AssignmentExpression"
            },
            {
              "$ref": "#/definitions/babel.types.AwaitExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BigIntLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.BinaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BindExpression"
            },
            {
              "$ref": "#/definitions/babel.types.BooleanLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.CallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ClassExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ConditionalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.DecimalLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.DoExpression"
            },
            {
              "$ref": "#/definitions/babel.types.FunctionExpression"
            },
            {
              "$ref": "#/definitions/babel.types.Identifier"
            },
            {
              "$ref": "#/definitions/babel.types.Import"
            },
            {
              "$ref": "#/definitions/babel.types.JSXElement"
            },
            {
              "$ref": "#/definitions/babel.types.JSXFragment"
            },
            {
              "$ref": "#/definitions/babel.types.LogicalExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.MetaProperty"
            },
            {
              "$ref": "#/definitions/babel.types.ModuleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NewExpression"
            },
            {
              "$ref": "#/definitions/babel.types.NullLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.NumericLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ObjectExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalCallExpression"
            },
            {
              "$ref": "#/definitions/babel.types.OptionalMemberExpression"
            },
            {
              "$ref": "#/definitions/babel.types.ParenthesizedExpression"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineBareFunction"
            },
            {
              "$ref": "#/definitions/babel.types.PipelinePrimaryTopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.PipelineTopicExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RecordExpression"
            },
            {
              "$ref": "#/definitions/babel.types.RegExpLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.SequenceExpression"
            },
            {
              "$ref": "#/definitions/babel.types.StringLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.Super"
            },
            {
              "$ref": "#/definitions/babel.types.TSAsExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSInstantiationExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSNonNullExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAssertion"
            },
            {
              "$ref": "#/definitions/babel.types.TaggedTemplateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TemplateLiteral"
            },
            {
              "$ref": "#/definitions/babel.types.ThisExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TopicReference"
            },
            {
              "$ref": "#/definitions/babel.types.TupleExpression"
            },
            {
              "$ref": "#/definitions/babel.types.TypeCastExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UnaryExpression"
            },
            {
              "$ref": "#/definitions/babel.types.UpdateExpression"
            },
            {
              "$ref": "#/definitions/babel.types.YieldExpression"
            },
            {
              "type": "null"
            }
          ]
        },
        "typeAnnotation": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Noop"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAnnotation"
            },
            {
              "$ref": "#/definitions/babel.types.TypeAnnotation"
            },
            {
              "type": "null"
            }
          ]
        },
        "decorators": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/babel.types.Decorator"
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "computed": {
          "type": "boolean"
        },
        "static": {
          "type": "boolean"
        },
        "abstract": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "accessibility": {
          "anyOf": [
            {
              "enum": [
                "private",
                "protected",
                "public"
              ],
              "type": "string"
            },
            {
              "type": "null"
            }
          ]
        },
        "declare": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "definite": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "optional": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "override": {
          "type": "boolean"
        },
        "readonly": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "variance": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Variance"
            },
            {
              "type": "null"
            }
          ]
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "key",
        "type"
      ]
    },
    "babel.types.StaticBlock": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "StaticBlock"
          ]
        },
        "body": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/babel.types.Statement"
          }
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "body",
        "type"
      ]
    },
    "babel.types.TSDeclareMethod": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TSDeclareMethod"
          ]
        },
        "decorators": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/babel.types.Decorator"
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "key": {
          "$ref": "#/definitions/babel.types.Expression"
        },
        "typeParameters": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Noop"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeParameterDeclaration"
            },
            {
              "type": "null"
            }
          ]
        },
        "params": {
          "type": "array",
          "items": {
            "anyOf": [
              {
                "$ref": "#/definitions/babel.types.ArrayPattern"
              },
              {
                "$ref": "#/definitions/babel.types.AssignmentPattern"
              },
              {
                "$ref": "#/definitions/babel.types.Identifier"
              },
              {
                "$ref": "#/definitions/babel.types.ObjectPattern"
              },
              {
                "$ref": "#/definitions/babel.types.RestElement"
              },
              {
                "$ref": "#/definitions/babel.types.TSParameterProperty"
              }
            ]
          }
        },
        "returnType": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.Noop"
            },
            {
              "$ref": "#/definitions/babel.types.TSTypeAnnotation"
            },
            {
              "type": "null"
            }
          ]
        },
        "abstract": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "access": {
          "anyOf": [
            {
              "enum": [
                "private",
                "protected",
                "public"
              ],
              "type": "string"
            },
            {
              "type": "null"
            }
          ]
        },
        "accessibility": {
          "anyOf": [
            {
              "enum": [
                "private",
                "protected",
                "public"
              ],
              "type": "string"
            },
            {
              "type": "null"
            }
          ]
        },
        "async": {
          "type": "boolean"
        },
        "computed": {
          "type": "boolean"
        },
        "generator": {
          "type": "boolean"
        },
        "kind": {
          "enum": [
            "constructor",
            "get",
            "method",
            "set"
          ],
          "type": "string"
        },
        "optional": {
          "type": [
            "null",
            "boolean"
          ]
        },
        "override": {
          "type": "boolean"
        },
        "static": {
          "type": "boolean"
        },
        "leadingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "innerComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "trailingComments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/babel.types.CommentBlock"
                  },
                  {
                    "$ref": "#/definitions/babel.types.CommentLine"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "start": {
          "type": [
            "null",
            "number"
          ]
        },
        "end": {
          "type": [
            "null",
            "number"
          ]
        },
        "loc": {
          "anyOf": [
            {
              "$ref": "#/definitions/babel.types.SourceLocation"
            },
            {
              "type": "null"
            }
          ]
        },
        "range": {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "number"
            }
          ],
          "minItems": 2,
          "maxItems": 2
        },
        "extra": {
          "$ref": "#/definitions/Record<string,unknown>"
        }
      },
      "required": [
        "key",
        "params",
        "type"
      ]
    }
  },
  "$schema": "http://json-schema.org/draft-07/schema#"
}