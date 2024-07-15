import Cookies from "js-cookie";

export const postMoviesData = async (url, method, body) => {
  try {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("x-token", JSON.parse(localStorage.getItem("token")));
    myHeaders.append("x-token", Cookies.get("ai_to"));
    const response = await fetch(`http://localhost:4000/api${url}`, {
      method: method,
      headers: myHeaders,
      body: JSON.stringify(body)
    });
    console.log({response})

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
