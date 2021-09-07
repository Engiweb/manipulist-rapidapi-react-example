import callManipulistApi from "manipulist-rapidapi-query";
import { API_KEY } from "../constants/endpoint";
import * as React from "react";
import { ManipulistApi } from "manipulist-rapidapi-query/@types/types";
import { TOOLS_FORM } from "../constants/form";

type TSendToApi = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setOutput: React.Dispatch<React.SetStateAction<string>>;
  data: { [x: string]: any };
};

const sendToManipulistApi = async ({
  setLoading,
  setOutput,
  data,
}: TSendToApi): Promise<void> => {
  setLoading(true);

  const tool = data.tool || "remove-duplicate-lines";
  const schema = TOOLS_FORM[tool];

  const payload: ManipulistApi = {
    endpoint: `/tool/${tool}`,
    apiKey: API_KEY,
    lb: "lf",
  };

  if (data.textImport === "Text") {
    payload.input = data.input;
  } else {
    payload.file = data.file[0];
    payload.endpoint = `/file${payload.endpoint}`;
  }

  if (data.param1) {
    payload.param1 =
      schema?.param1?.type === "integer" ? parseInt(data.param1) : data.param1;
  }

  if (data.param2) {
    payload.param2 =
      schema?.param2?.type === "integer" ? parseInt(data.param2) : data.param2;
  }

  if (data.lb) {
    payload.lb = data.lb;
  }

  try {
    const response = await callManipulistApi(payload);

    const output = response.data ? response.data : response.message;
    setOutput(output as string);

    setLoading(false);
  } catch (e: any) {
    setOutput(e.message);
    setLoading(false);
  }
};
export default sendToManipulistApi;
