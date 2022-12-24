export const isDevelopment = process.env.NODE_ENV === "development" ? true : false;
export const backendPort = "8000";
export const host = `localhost:${backendPort}`;
export const protocol = "http";
export const baseURL = `${protocol}://${host}`;
export const apiUrl = `${baseURL}/api`;

// globals
export const EmptyFieldError = "Field cannot be empty!"
export const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone