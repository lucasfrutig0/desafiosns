function getFormValues(event) {
  const data = new FormData(event.currentTarget);
  return Object.fromEntries(data.entries());
}

export { getFormValues }