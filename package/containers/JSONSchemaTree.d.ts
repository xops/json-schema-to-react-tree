import React from "react";
import { JSONSchema7 } from "json-schema";
interface IProps {
    schema: JSONSchema7;
    nodeId?: string;
}
export declare const JSONSchemaTree: React.FC<IProps>;
export default JSONSchemaTree;
