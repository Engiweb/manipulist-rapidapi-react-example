import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { MANIPULIST_DOCS } from "../constants/about";
import {
  DEFAULT_INPUT_TEXT,
  INPUT_TYPE,
  LB_OPTIONS,
  TOOLS_FORM,
  TOOLS_LABELS,
} from "../constants/form";
import { COLORS } from "../styles/constants";
import { upperFirst } from "lodash";
import AppFormParam from "./AppFormParam";
import sendToManipulistApi from "../utils/sendToManipulistApi";
import Loader from "react-loader-spinner";

const Wrapper = styled.main`
  height: 100%;
  width: 100%;
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: top;
  justify-content: center;
  overflow: hidden;
  overflow-y: auto;
`;

const FormWrapper = styled.div`
  padding: 20px;
  color: white;
  width: 100%;
  max-width: 500px;
  text-align: center;

  .text,
  li {
    line-height: 32px;
    text-align: left;

    a {
      color: ${COLORS.primary};
      font-weight: bold;
    }
  }
`;

const Form = styled.form`
  padding: 20px;

  label {
    margin: 20px auto 5px 10px;
    display: block;
    text-align: left;
    font-weight: 600;
  }

  input,
  textarea,
  select {
    width: 100%;
    border-radius: 10px;
    font-size: 16px;
    line-height: 24px;
  }

  select,
  input {
    padding: 10px;
  }

  textarea {
    height: 120px;
    padding: 10px;
  }

  input[type="submit"] {
    width: 100%;
    max-width: 240px;
    padding: 20px;
    border-radius: 40px;
    background: ${COLORS.primary};
    color: white;
    font-size: 18px;
    margin-top: 40px;
    cursor: pointer;
  }

  input[type="submit"]:hover {
    transition: 1s ease all;
    color: ${COLORS.primary};
    background: white;
  }
`;

const ErrorMessage = styled.span`
  color: red;
  margin-top: 5px;
  display: block;
`;

const Output = styled.textarea`
  width: 100%;
  border-radius: 10px;
  font-size: 16px;
  line-height: 24px;
  height: 120px;
  padding: 10px;
`;

const AppForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
  });
  const [output, setOutput] = useState("Output will be displayed here...");
  const [loading, setLoading] = useState(false);

  const textImport = watch("textImport");
  const tool = watch("tool") as keyof typeof TOOLS_FORM;

  return (
    <Wrapper>
      <FormWrapper>
        <h1>Input data</h1>

        <ol>
          <li>Choose input type (file vs text);</li>
          <li>Choose tool to apply;</li>
          <li>Add parameters.</li>
        </ol>

        <div className="text">
          For a list of all available tools and related documentation, visit{" "}
          <a href={MANIPULIST_DOCS} rel="noopener noreferrer" target="_blank">
            {MANIPULIST_DOCS.replace("https://", "")}
          </a>
          .
        </div>

        <Form
          onSubmit={handleSubmit((data) =>
            sendToManipulistApi({
              setLoading,
              setOutput,
              data,
            })
          )}
        >
          <label htmlFor="textImport">Choose input type</label>
          <select
            id="textImport"
            {...register("textImport", { required: true })}
            defaultValue="File"
          >
            {INPUT_TYPE.map((inputType) => (
              <option key={`text-import-${inputType}`} value={inputType}>
                {inputType}
              </option>
            ))}
          </select>

          {textImport === "Text" ? (
            <>
              <label htmlFor="input">Input text</label>
              <textarea
                id="input"
                placeholder="Insert text..."
                defaultValue={DEFAULT_INPUT_TEXT}
                {...register("input", {
                  required: true,
                })}
              />
              {errors.input && (
                <ErrorMessage>This field is required</ErrorMessage>
              )}
            </>
          ) : (
            <>
              <label htmlFor="file">Upload file text</label>
              <input
                type="file"
                id="file"
                {...register("file", {
                  required: true,
                })}
              />
              {errors.file && (
                <ErrorMessage>This field is required</ErrorMessage>
              )}
            </>
          )}

          <label htmlFor="tool">Choose tool</label>
          <select
            id="tool"
            {...register("tool", { required: true })}
            defaultValue="remove-duplicate-lines"
          >
            {TOOLS_LABELS.map((tool) => (
              <option key={`tool-${tool}`} value={tool}>
                {upperFirst(tool).replace(/-/g, " ")}
              </option>
            ))}
          </select>

          {TOOLS_FORM[tool]?.param1 && (
            <AppFormParam
              register={register}
              tool={TOOLS_FORM[tool]}
              errors={errors}
              name="param1"
              key={`param1-${TOOLS_FORM[tool]?.param1?.type}`}
            />
          )}

          {TOOLS_FORM[tool]?.param2 && (
            <AppFormParam
              register={register}
              tool={TOOLS_FORM[tool]}
              errors={errors}
              name="param2"
              key={`param2-${TOOLS_FORM[tool]?.param2?.type}`}
            />
          )}

          <label htmlFor="lb">Line break</label>
          <select
            id="lb"
            {...register("lb", { required: true })}
            defaultValue="lf"
          >
            {LB_OPTIONS.map((lb) => (
              <option key={`lb-${lb}`} value={lb}>
                {lb}
              </option>
            ))}
          </select>

          <input type="submit" value="Send to Manipulist API" />
        </Form>
      </FormWrapper>

      <FormWrapper>
        <h2>API result</h2>

        {loading ? (
          <Loader type="TailSpin" color="#00BFFF" height={100} width={100} />
        ) : (
          <Output value={output} readOnly={true} />
        )}
      </FormWrapper>
    </Wrapper>
  );
};

export default AppForm;
