import { useController } from "react-hook-form";
import Select from "react-select";

import { ERROR_TYPE } from "../../constant";

function ReactSelectField({
  name,
  control,
  rules,
  defaultValue,
  label,
  multi,
  optionValue,
  optionLabel,
  options,
  placeholder,
}) {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control, rules, defaultValue });

  // handle value on change
  const handleChange = (value) => {
    if (multi) {
      let multiData = value.map((_value) =>
        optionValue !== undefined ? _value[optionValue] : _value?.value
      );
      field.onChange(multiData?.id);
    } else {
      field.onChange(value?.id);
    }
  };

  // handling value according to selected one
  const handleValue = () => {
    if (field?.value !== "") {
      if (multi) {
        return options?.filter((c) =>
          field?.value?.includes?.(
            optionValue !== undefined ? c[optionValue] : c.value
          )
        );
      } else {
        return options?.find((c) =>
          optionValue
            ? c[optionValue] === field?.value
            : c.value === field?.value
        );
      }
    } else {
      return "";
    }
  };

  return (
    <>
      <div className="form-group">
        {label && <label className="mb-1">{label}</label>}
        <div className="textfield-block">
          <div className="bootstrap-select">
            <Select
              inputRef={field.ref}
              value={handleValue()}
              onChange={(val) => handleChange(val)}
              options={options}
              placeholder={placeholder ? placeholder : label}
              isMulti={multi}
              getOptionLabel={(opt) => opt[optionLabel]}
              getOptionValue={(opt) => opt[optionValue]}
            />

            {ERROR_TYPE?.map((type) => {
              if (error?.type === type && error?.message !== "")
                return (
                  <span key={type} className="error">
                    {error?.message}
                  </span>
                );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ReactSelectField;
