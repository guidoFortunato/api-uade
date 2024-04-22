import { getEnvVariables } from "./getEnvVariables";

const { VITE_API_TOKEN } = getEnvVariables();

export const getData = async (url) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${VITE_API_TOKEN}`
      },
    });
    // console.log({response})

    if (!response.ok) {
      const data = {
        results: [],
      };
      console.log({ response });
      console.error({
        error: "error",
        status: response.status,
        ok: response.ok,
      });

      return data;
    }

    const data = await response.json();

    return data;
  } catch (error) {
    const data = {
      results: [],
    };
    console.error({
      error: { error },
      ok: false,
    });

    return data;
  }
};
