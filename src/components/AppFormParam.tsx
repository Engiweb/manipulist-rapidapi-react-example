import { FieldValues, UseFormRegister } from "react-hook-form";
import { TTToolObj } from "../constants/form";
import integersListRangeChecker from "../utils/integersListRangeChecker";
import styled from "styled-components";

const ErrorMessage = styled.span`
  color: red;
  margin-top: 5px;
  display: block;
`;

type TProps = {
  register: UseFormRegister<FieldValues>;
  tool: TTToolObj;
  errors: {
    [key: string]: string;
  };
  name: "param1" | "param2";
};

const AppFormParam = ({ register, tool, errors, name }: TProps) => {
  const param = tool[name];

  const required = tool.required?.includes(name);

  let field;

  switch (param?.type) {
    case "integer":
      field = (
        <input
          id={name}
          defaultValue={1}
          type="number"
          placeholder="Insert number"
          min={0}
          step={1}
          {...register(name, {
            required,
            min: 1,
            max: Number.MAX_SAFE_INTEGER,
          })}
        />
      );
      break;

    case "range":
      field = (
        <input
          id={name}
          placeholder="Insert range e.g. 1,3-5,7"
          defaultValue="1,2-3"
          {...register(name, {
            required,
            validate: (value) => integersListRangeChecker(value),
          })}
        />
      );
      break;

    default:
      if (param?.enum) {
        field = (
          <select
            placeholder="Choose from list"
            id={name}
            {...register(name, { required })}
          >
            {param?.enum?.map((tool) => (
              <option key={`${name}-${tool}`} value={tool}>
                {tool}
              </option>
            ))}
          </select>
        );
        break;
      }

      field = (
        <input
          id={name}
          placeholder="Insert text"
          defaultValue="text"
          {...register(name, {
            required,
            validate: (value) => (required ? value !== "" : true),
          })}
        />
      );
      break;
  }

  return (
    <>
      <label htmlFor="param">
        {param?.description} ({name})
      </label>
      {field}
      {errors[name] && (
        <ErrorMessage>
          {param?.type === "integer"
            ? "Insert a valid integer"
            : param?.type === "range"
            ? "Insert a valid range e.g. 1,3-5,7"
            : "This field is required"}
        </ErrorMessage>
      )}
    </>
  );
};

export default AppFormParam;
