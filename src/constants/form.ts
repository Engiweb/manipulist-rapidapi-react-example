export const DEFAULT_INPUT_TEXT = `The quick brown dog jumped over the 
lazy fox. The quick brown dog jumped 
over the lazy fox. The quick brown dog.
jumped over the lazy fox. The quick
brown dog jumped over the lazy fox.`;

export type TToolsParamObj = {
  type: string;
  description: string;
  enum?: string[];
};

export type TTToolObj = {
  required?: string[];
  param1?: TToolsParamObj;
  param2?: TToolsParamObj;
};

type TToolsForm = {
  [key: string]: TTToolObj;
};

export const TOOLS_FORM: TToolsForm = {
  "add-incremental-number": {
    required: ["param1"],
    param1: {
      type: "integer",
      description: "Starting number",
    },
    param2: {
      type: "string",
      description: "Incremental number position",
      enum: ["atStart", "atEnd"],
    },
  },
  "extract-rows": {
    required: ["param1"],
    param1: {
      description: "List or range of rows",
      type: "range",
    },
  },
  "find-and-replace": {
    required: ["param1"],
    param1: {
      description: "Replace",
      type: "string",
    },
    param2: {
      description: "With",
      type: "string",
    },
  },
  "remove-duplicate-lines": {},
  "sort-lines": {
    param1: {
      description: "Sorting method",
      type: "string",
      enum: ["az", "za", "reverse", "shuffle"],
    },
  },
};

export const TOOLS_LABELS = Object.keys(TOOLS_FORM);

export const LB_OPTIONS = ["lf", "crlf"];

export const INPUT_TYPE = ["File", "Text"];
