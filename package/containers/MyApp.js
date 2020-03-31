"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var JSONSchemaTree_1 = __importDefault(require("./JSONSchemaTree"));
var MyApp = function (props) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(JSONSchemaTree_1.default, { schema: {
                type: "object",
                properties: {
                    number: {
                        type: "string",
                    },
                    hash: {
                        type: "string",
                    },
                    timestamp: {
                        description: "timestamp in which the block occured",
                        title: "Timestamp",
                        type: "string",
                    },
                    transactions: {
                        type: "string",
                    },
                },
            } }),
        react_1.default.createElement(JSONSchemaTree_1.default, { schema: {
                type: "array",
                title: "My Array",
                items: {
                    type: "object",
                    description: "A Block",
                    properties: {
                        number: {
                            type: "boolean",
                        },
                        hash: {
                            type: "string",
                        },
                        timestamp: {
                            description: "timestamp in which the block occured",
                            type: "string",
                        },
                        transactions: {
                            type: "array",
                            items: {
                                type: "object",
                                description: "transactions that occurred within the block",
                                properties: {
                                    hash: {
                                        type: "string",
                                    },
                                },
                            },
                        },
                    },
                },
            } }),
        react_1.default.createElement(JSONSchemaTree_1.default, { schema: {
                allOf: [
                    {
                        oneOf: [
                            {
                                type: "array",
                                title: "My Array",
                                items: {
                                    type: "object",
                                    title: "Block",
                                    description: "A Block",
                                    required: ["number"],
                                    properties: {
                                        number: {
                                            type: "boolean",
                                        },
                                        hash: {
                                            title: "Hash",
                                            type: "string",
                                            description: "hex string starts with 0x + hash",
                                            pattern: "/^0x{40}/",
                                        },
                                        timestamp: {
                                            description: "timestamp in which the block occured",
                                            type: "string",
                                        },
                                        transactions: {
                                            type: "object",
                                            description: "transactions that occurred within the block",
                                            properties: {
                                                hash: {
                                                    type: "string",
                                                },
                                                bar: {
                                                    type: "object",
                                                    properties: {
                                                        number: {
                                                            type: "string",
                                                        },
                                                        hash: {
                                                            type: "string",
                                                        },
                                                        timestamp: {
                                                            description: "timestamp in which the block occured",
                                                            type: "string",
                                                        },
                                                        transactions: {
                                                            type: "string",
                                                        },
                                                        baz: {
                                                            type: "object",
                                                            description: "A Block",
                                                            properties: {
                                                                number: {
                                                                    type: "boolean",
                                                                },
                                                                hash: {
                                                                    type: "string",
                                                                },
                                                                timestamp: {
                                                                    description: "timestamp in which the block occured",
                                                                    type: "string",
                                                                },
                                                                transactions: {
                                                                    type: "object",
                                                                    description: "transactions that occurred within the block",
                                                                    properties: {
                                                                        hash: {
                                                                            allOf: [
                                                                                {
                                                                                    type: "string",
                                                                                },
                                                                            ],
                                                                        },
                                                                    },
                                                                },
                                                                boo: {
                                                                    type: "object",
                                                                    description: "A Block",
                                                                    properties: {
                                                                        number: {
                                                                            type: "boolean",
                                                                        },
                                                                        hash: {
                                                                            type: "string",
                                                                        },
                                                                        timestamp: {
                                                                            description: "timestamp in which the block occured",
                                                                            type: "string",
                                                                        },
                                                                        transactions: {
                                                                            type: "object",
                                                                            description: "transactions that occurred within the block",
                                                                            properties: {
                                                                                hash: {
                                                                                    type: "object",
                                                                                    description: "A Block",
                                                                                    properties: {
                                                                                        number: {
                                                                                            type: "boolean",
                                                                                        },
                                                                                        hash: {
                                                                                            type: "string",
                                                                                        },
                                                                                        timestamp: {
                                                                                            description: "timestamp in which the block occured",
                                                                                            type: "string",
                                                                                        },
                                                                                        transactions: {
                                                                                            type: "object",
                                                                                            description: "transactions that occurred within the block",
                                                                                            properties: {
                                                                                                hash: {
                                                                                                    type: "string",
                                                                                                },
                                                                                            },
                                                                                        },
                                                                                    },
                                                                                },
                                                                            },
                                                                        },
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                            {
                                type: "array",
                                title: "My Array",
                                items: {
                                    type: "object",
                                    title: "Block",
                                    description: "A Block",
                                    required: ["number"],
                                    properties: {
                                        number: {
                                            type: "boolean",
                                        },
                                        hash: {
                                            title: "Hash",
                                            type: "string",
                                            description: "hex string starts with 0x + hash",
                                            pattern: "/^0x{40}/",
                                        },
                                        timestamp: {
                                            description: "timestamp in which the block occured",
                                            type: "string",
                                        },
                                        transactions: {
                                            type: "object",
                                            description: "transactions that occurred within the block",
                                            properties: {
                                                hash: {
                                                    type: "string",
                                                },
                                                bar: {
                                                    type: "object",
                                                    properties: {
                                                        number: {
                                                            type: "string",
                                                        },
                                                        hash: {
                                                            type: "string",
                                                        },
                                                        timestamp: {
                                                            description: "timestamp in which the block occured",
                                                            type: "string",
                                                        },
                                                        transactions: {
                                                            type: "string",
                                                        },
                                                        baz: {
                                                            type: "object",
                                                            description: "A Block",
                                                            properties: {
                                                                number: {
                                                                    type: "boolean",
                                                                },
                                                                hash: {
                                                                    type: "string",
                                                                },
                                                                timestamp: {
                                                                    description: "timestamp in which the block occured",
                                                                    type: "string",
                                                                },
                                                                transactions: {
                                                                    type: "object",
                                                                    description: "transactions that occurred within the block",
                                                                    properties: {
                                                                        hash: {
                                                                            allOf: [
                                                                                {
                                                                                    type: "string",
                                                                                },
                                                                            ],
                                                                        },
                                                                    },
                                                                },
                                                                boo: {
                                                                    type: "object",
                                                                    description: "A Block",
                                                                    properties: {
                                                                        number: {
                                                                            type: "boolean",
                                                                        },
                                                                        hash: {
                                                                            type: "string",
                                                                        },
                                                                        timestamp: {
                                                                            description: "timestamp in which the block occured",
                                                                            type: "string",
                                                                        },
                                                                        transactions: {
                                                                            type: "object",
                                                                            description: "transactions that occurred within the block",
                                                                            properties: {
                                                                                hash: {
                                                                                    type: "object",
                                                                                    description: "A Block",
                                                                                    properties: {
                                                                                        number: {
                                                                                            type: "boolean",
                                                                                        },
                                                                                        hash: {
                                                                                            type: "string",
                                                                                        },
                                                                                        timestamp: {
                                                                                            description: "timestamp in which the block occured",
                                                                                            type: "string",
                                                                                        },
                                                                                        transactions: {
                                                                                            type: "object",
                                                                                            description: "transactions that occurred within the block",
                                                                                            properties: {
                                                                                                hash: {
                                                                                                    type: "string",
                                                                                                },
                                                                                            },
                                                                                        },
                                                                                    },
                                                                                },
                                                                            },
                                                                        },
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        ],
                    },
                ],
            } }),
        react_1.default.createElement(JSONSchemaTree_1.default, { schema: {
                oneOf: [
                    {
                        title: "keccak",
                        type: "string",
                        const: "0x00123012030sasdfasdf",
                        description: "Hex representation of a Keccak 256 hash",
                        pattern: "^0x[a-fA-F\\d]{64}$",
                    },
                    {
                        title: "keccak",
                        type: "string",
                        enum: ["0x00", "0x1asdf"],
                        description: "Hex representation of a Keccak 256 hash",
                        pattern: "^0x[a-fA-F\\d]{64}$",
                    },
                    {
                        if: {
                            properties: {
                                method: {
                                    const: "potatoe",
                                },
                            },
                        },
                        then: {
                            properties: {
                                params: {
                                    oneOf: [
                                        {
                                            title: "foo",
                                            description: "bar",
                                            type: "string",
                                        },
                                    ],
                                },
                            },
                        },
                    },
                ],
            } })));
};
exports.default = MyApp;
