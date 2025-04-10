// removing extra keys according to the condition
export function removeEmptyFields(data) {
    Object.keys(data).forEach((key) => {
      if (
        data[key] === "" ||
        data[key] == null ||
        data[key]?.length === 0 ||
        data[key] === false
      ) {
        delete data[key];
      }
    });
    return data;
  }