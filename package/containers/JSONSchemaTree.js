"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var TreeView_1 = __importDefault(require("@material-ui/lab/TreeView"));
var TreeItem_1 = __importDefault(require("@material-ui/lab/TreeItem"));
var colors_1 = require("@material-ui/core/colors");
var core_1 = require("@material-ui/core");
var ExpandMore_1 = __importDefault(require("@material-ui/icons/ExpandMore"));
var ChevronRight_1 = __importDefault(require("@material-ui/icons/ChevronRight"));
var uuid_1 = require("uuid");
var colorMap = {
    any: colors_1.grey[500],
    array: colors_1.blue[400],
    boolean: colors_1.blue[500],
    integer: colors_1.purple[800],
    null: colors_1.yellow[900],
    number: colors_1.purple[500],
    string: colors_1.green[500],
    undefined: colors_1.grey[500],
    object: colors_1.blue[900],
    properties: colors_1.deepPurple[500],
    required: colors_1.deepOrange[500],
    oneof: colors_1.blue.A100,
    anyof: colors_1.blue[200],
    allof: colors_1.blue.A700,
    enum: colors_1.green[900],
};
var RenderNodes = function (_a) {
    var schema = _a.schema, required = _a.required;
    if (schema.anyOf) {
        return (react_1.default.createElement(TreeItem_1.default, { nodeId: uuid_1.v4(), label: react_1.default.createElement(core_1.Typography, { style: { color: colorMap.anyof } }, "Any Of") }, schema.anyOf.map(function (s) {
            return (react_1.default.createElement(RenderNodes, { schema: s }));
        })));
    }
    if (schema.allOf) {
        return (react_1.default.createElement(TreeItem_1.default, { nodeId: uuid_1.v4(), label: react_1.default.createElement(core_1.Typography, { style: { color: colorMap.allof } }, "All Of") }, schema.allOf.map(function (s, i) {
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(RenderNodes, { schema: s }),
                schema && schema.allOf && i !== (schema.allOf.length - 1)
                    ? react_1.default.createElement(core_1.Divider, { style: { width: "100px", marginBottom: "10px", marginTop: "10px", height: "3px" }, variant: "inset" })
                    : null));
        })));
    }
    if (schema.oneOf) {
        return (react_1.default.createElement(TreeItem_1.default, { nodeId: uuid_1.v4(), label: react_1.default.createElement(core_1.Typography, { style: { color: colorMap.oneof } }, "One Of") },
            react_1.default.createElement("div", { style: { marginTop: "10px", marginBottom: "10px" } }),
            schema.oneOf.map(function (s, i) {
                return (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(RenderNodes, { schema: s }),
                    schema && schema.oneOf && i !== (schema.oneOf.length - 1)
                        ? react_1.default.createElement(core_1.Divider, { style: { width: "100px", marginBottom: "10px", marginTop: "10px", height: "3px" }, variant: "inset" })
                        : null));
            }),
            react_1.default.createElement("div", { style: { marginTop: "10px", marginBottom: "10px" } })));
    }
    if (schema.items instanceof Array) {
        return (react_1.default.createElement(TreeItem_1.default, { nodeId: uuid_1.v4(), label: react_1.default.createElement(core_1.Typography, { style: { color: colorMap.array } }, "Array") },
            react_1.default.createElement(TreeItem_1.default, { label: schema.description
                    ? react_1.default.createElement(core_1.Grid, { container: true, justify: "flex-start", alignItems: "center", spacing: 1 },
                        react_1.default.createElement(core_1.Typography, { style: { color: colorMap.undefined, marginRight: "4px", marginLeft: "4px" }, variant: "caption" }, "description"),
                        react_1.default.createElement(core_1.Typography, null, schema.description))
                    : null, nodeId: uuid_1.v4() }),
            schema.items.map(function (s) {
                return (react_1.default.createElement(RenderNodes, { schema: s }));
            })));
    }
    if (schema.items instanceof Object) {
        return (react_1.default.createElement(TreeItem_1.default, { nodeId: uuid_1.v4(), label: react_1.default.createElement(core_1.Typography, { style: { color: colorMap.array } }, "Array") },
            react_1.default.createElement(TreeItem_1.default, { label: schema.title
                    ? react_1.default.createElement(core_1.Grid, { container: true, justify: "flex-start", alignItems: "center", spacing: 1 },
                        react_1.default.createElement(core_1.Typography, { style: { color: colorMap.undefined, marginRight: "4px", marginLeft: "4px" }, variant: "caption" }, "title"),
                        react_1.default.createElement(core_1.Typography, null, schema.title))
                    : null, nodeId: uuid_1.v4() }),
            react_1.default.createElement(TreeItem_1.default, { label: schema.description
                    ? react_1.default.createElement(core_1.Grid, { container: true, justify: "flex-start", alignItems: "center", spacing: 1 },
                        react_1.default.createElement(core_1.Typography, { style: { color: colorMap.undefined, marginRight: "4px", marginLeft: "4px" }, variant: "caption" }, "description"),
                        react_1.default.createElement(core_1.Typography, null, schema.description))
                    : null, nodeId: uuid_1.v4() }),
            react_1.default.createElement(RenderNodes, { schema: schema.items })));
    }
    if (schema.properties) {
        return (react_1.default.createElement(TreeItem_1.default, { nodeId: uuid_1.v4(), label: react_1.default.createElement(core_1.Typography, { style: { color: colorMap.object } }, "Object") },
            react_1.default.createElement(TreeItem_1.default, { label: schema.title
                    ? react_1.default.createElement(core_1.Grid, { container: true, justify: "flex-start", alignItems: "center", spacing: 1 },
                        react_1.default.createElement(core_1.Typography, { style: { color: colorMap.undefined, marginRight: "4px", marginLeft: "4px" }, variant: "caption" }, "title"),
                        react_1.default.createElement(core_1.Typography, null, schema.title))
                    : null, nodeId: uuid_1.v4() }),
            react_1.default.createElement(TreeItem_1.default, { label: schema.description
                    ? react_1.default.createElement(core_1.Grid, { container: true, justify: "flex-start", alignItems: "center", spacing: 1 },
                        react_1.default.createElement(core_1.Typography, { style: { color: colorMap.undefined, marginRight: "4px", marginLeft: "4px" }, variant: "caption" }, "description"),
                        react_1.default.createElement(core_1.Typography, null, schema.description))
                    : null, nodeId: uuid_1.v4() }),
            react_1.default.createElement(TreeItem_1.default, { label: react_1.default.createElement(core_1.Typography, { style: { color: colorMap.properties } }, "properties"), nodeId: uuid_1.v4() }, schema.properties &&
                Object.entries(schema.properties)
                    .map(function (_a, i) {
                    var n = _a[0], s = _a[1];
                    var schem = s;
                    return (react_1.default.createElement(TreeItem_1.default, { label: n, nodeId: uuid_1.v4() },
                        react_1.default.createElement(RenderNodes, { schema: schem, required: schema.required && schema.required.includes(n) })));
                }))));
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        schema.title &&
            react_1.default.createElement(TreeItem_1.default, { label: react_1.default.createElement(core_1.Grid, { container: true, justify: "flex-start", alignItems: "center", spacing: 1 },
                    react_1.default.createElement(core_1.Typography, { style: { color: colorMap.undefined, marginRight: "4px", marginLeft: "4px" }, variant: "caption" }, "title"),
                    react_1.default.createElement(core_1.Typography, { style: { color: colorMap.title } }, schema.title)), nodeId: uuid_1.v4() }),
        schema.type &&
            react_1.default.createElement(TreeItem_1.default, { label: react_1.default.createElement(core_1.Grid, { container: true, justify: "flex-start", alignItems: "center", spacing: 1 },
                    react_1.default.createElement(core_1.Typography, { style: { color: colorMap.undefined, marginRight: "4px", marginLeft: "4px" }, variant: "caption" }, "type"),
                    react_1.default.createElement(core_1.Typography, { style: { color: colorMap[schema.type] } }, schema.type)), nodeId: uuid_1.v4() }),
        schema.description &&
            react_1.default.createElement(TreeItem_1.default, { label: react_1.default.createElement(core_1.Grid, { container: true, justify: "flex-start", alignItems: "center", spacing: 1 },
                    react_1.default.createElement(core_1.Typography, { style: { color: colorMap.undefined, marginRight: "4px", marginLeft: "4px" }, variant: "caption" }, "description"),
                    react_1.default.createElement(core_1.Typography, null, schema.description)), nodeId: uuid_1.v4() }),
        schema.pattern &&
            react_1.default.createElement(TreeItem_1.default, { label: react_1.default.createElement(core_1.Grid, { container: true, justify: "flex-start", alignItems: "center", spacing: 1 },
                    react_1.default.createElement(core_1.Typography, { style: { color: colorMap.undefined, marginRight: "4px", marginLeft: "4px" }, variant: "caption" }, "pattern"),
                    react_1.default.createElement(core_1.Typography, null, schema.pattern)), nodeId: uuid_1.v4() }),
        schema.const &&
            react_1.default.createElement(TreeItem_1.default, { label: react_1.default.createElement(core_1.Grid, { container: true, justify: "flex-start", alignItems: "center", spacing: 1 },
                    react_1.default.createElement(core_1.Typography, { style: { color: colorMap.undefined, marginRight: "4px", marginLeft: "4px" }, variant: "caption" }, "const"),
                    react_1.default.createElement(core_1.Typography, null, schema.const)), nodeId: uuid_1.v4() }),
        required &&
            react_1.default.createElement(TreeItem_1.default, { label: react_1.default.createElement(core_1.Typography, { style: { color: colorMap.required } }, "required"), nodeId: uuid_1.v4() }),
        schema.enum &&
            react_1.default.createElement(TreeItem_1.default, { nodeId: uuid_1.v4(), label: react_1.default.createElement(core_1.Typography, { style: { color: colorMap.enum, marginRight: "4px", marginLeft: "4px" } }, "enum") }, schema.enum.map(function (enumType) {
                var str = enumType ? enumType.toString() : null;
                return (react_1.default.createElement(TreeItem_1.default, { nodeId: uuid_1.v4(), label: react_1.default.createElement(core_1.Typography, { style: { marginRight: "4px", marginLeft: "4px" } }, str) }));
            })),
        schema.if &&
            react_1.default.createElement(TreeItem_1.default, { nodeId: uuid_1.v4(), label: react_1.default.createElement(core_1.Typography, { style: { color: colorMap.enum, marginRight: "4px", marginLeft: "4px" } }, "if") },
                react_1.default.createElement(RenderNodes, { schema: schema.if })),
        schema.then &&
            react_1.default.createElement(TreeItem_1.default, { nodeId: uuid_1.v4(), label: react_1.default.createElement(core_1.Typography, { style: { color: colorMap.enum, marginRight: "4px", marginLeft: "4px" } }, "then") },
                react_1.default.createElement(RenderNodes, { schema: schema.then })),
        schema.else &&
            react_1.default.createElement(TreeItem_1.default, { nodeId: uuid_1.v4(), label: react_1.default.createElement(core_1.Typography, { style: { color: colorMap.enum, marginRight: "4px", marginLeft: "4px" } }, "else") },
                react_1.default.createElement(RenderNodes, { schema: schema.else }))));
};
/*
 * A React component that renders a tree to display JSON Schema types
 */
exports.JSONSchemaTree = function (_a) {
    var schema = _a.schema;
    return (react_1.default.createElement(TreeView_1.default, { defaultCollapseIcon: react_1.default.createElement(ExpandMore_1.default, null), defaultExpandIcon: react_1.default.createElement(ChevronRight_1.default, null) },
        react_1.default.createElement(RenderNodes, { schema: schema })));
};
exports.default = exports.JSONSchemaTree;
