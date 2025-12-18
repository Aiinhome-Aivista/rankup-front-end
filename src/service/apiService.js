const apiService = async (url, options = {}) => {
  let headers = options.headers || {};

  const token = localStorage.getItem("token");
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  if (!(options.body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
  }

  const config = {
    ...options,
    headers,
  };

  if (config.body && !(config.body instanceof FormData)) {
    config.body = JSON.stringify(config.body);
  }

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({
        message: "An unknown API error occurred.",
      }));
      throw new Error(errorData.message || response.statusText);
    }

    return response.status === 204 ? null : response.json();
  } catch (error) {
    console.error("ApiService Error:", error.message);
    throw error;
  }
};

export default apiService;
