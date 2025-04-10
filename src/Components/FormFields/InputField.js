import { useController } from "react-hook-form";
import { ERROR_TYPE } from "../../constant";

function InputField({
  control,
  rules,
  name,
  defaultValue,
  placeholder,
  type,
  label,
  onChange,
  minValue,
}) {
  // usehooks
  const {
    field,
    fieldState: { error },
  } = useController({ name, control, rules, defaultValue });

  //   on change Input field
  const onInputChange = (e) => {
    // send value to onChange function
    if (onChange) onChange(e.target.value);

    // send value to hook form
    field.onChange(e.target.value);
  };

  const onKeyChange = (e) => {
    // prevent click when key is '-' and input type is number
    if (type === "number" && (e.charCode === 45 || e.charCode === 101)) {
      e.preventDefault();
    }
  };

  const onBlurChange = (value) => {
    // on type number, removing leading 0
    if (type === "number") {
      const finalValue = value.replace(/^0+/, "");
      field.onChange(finalValue);
    }
  };
  return (
    <>
      <div className="form-group">
        {label && <label className="mb-1">{label}</label>}
        <div className="textfield-block">
          <input
            {...field}
            className="form-control"
            placeholder={placeholder}
            type={type ? type : "text"}
            min={type == "number" ? minValue : ""}
            onChange={(e) => onInputChange(e)}
            onKeyPress={(e) => onKeyChange(e)}
            onBlur={(e) => onBlurChange(e.target.value)}
          />

          {ERROR_TYPE?.map((type) => {
            if (error?.type === type && error?.message !== "") {
              return (
                <span key={type} className="error-msg">
                  {error?.message}
                </span>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

/**
 * @property defaults
 */
InputField.defaultProps = {
  defaultValue: "",
  rules: {},
  errorClass: "error-msg",
  onChange: (value) => value,
};

export default InputField;
