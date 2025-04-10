import { useController } from "react-hook-form";
import { ERROR_TYPE } from "../../constant";

function TextAreaField({
  control,
  rules,
  name,
  defaultValue,
  placeholder,
  type,
  label,
  onChange,
  rows,
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

  return (
    <>
      <div className="form-group">
        {label && <label className="mb-1">{label}</label>}
        <div className="textfield-block">
          <textarea
            {...field}
            rows={rows || 5}
            className="form-control"
            placeholder={placeholder}
            type={type ? type : "text"}
            onChange={(e) => onInputChange(e)}
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
TextAreaField.defaultProps = {
  defaultValue: "",
  rules: {},
  errorClass: "error-msg",
  onChange: (value) => value,
};

export default TextAreaField;
