export const envConfig = {
  vapi: {
    apiUrl: process.env.NEXT_PUBLIC_VAPI_API_URL ?? "https://api.vapi.ai",
    token:
      process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN ??
      "11503214-2564-4029-b8e6-1d2bbc1c9d3e",
  },
};
