export function extractQueryParams(query) {
  const queryParams = query
    .substr(1)
    .split("&")
    .reduce((queryParams, param) => {
      const [key, value] = param.split("=");

      queryParams[key] = value;

      return queryParams;
    }, {});

  console.log("Query params: ", queryParams);

  return queryParams;
}
