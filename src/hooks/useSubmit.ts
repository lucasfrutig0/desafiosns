import { getFormValues } from "utils/getFormValues";

function useSubmit(fn) {
  return (event) => {
    event.preventDefault();

    const values = getFormValues(event);
    return fn(values);
  };
}

export { useSubmit }