class RequestUtils {
  static get = async (uri: string) => {
    const requestInit: RequestInit = {
      method: "GET",
      credentials: "include",
    };
    return await fetch(uri, requestInit);
  };

  static post = async (uri: string, data?: object) => {
    const requestInit: RequestInit = {
      method: "POST",
    };

    if (data !== undefined) {
      if (data instanceof FormData) {
        requestInit.body = data;
      } else {
        requestInit.headers = { "Content-Type": "application/json" };
        requestInit.body = JSON.stringify(data);
      }
    }
    return await fetch(uri, requestInit);
  };

  static put = async (uri: string, data: object | FormData) => {
    const requestInit: RequestInit = {
      method: "PUT",
      credentials: "include",
    };

    if (data instanceof FormData) {
      requestInit.body = data;
    } else {
      requestInit.headers = { "Content-Type": "application/json" };
      requestInit.body = JSON.stringify(data);
    }
    return await fetch(uri, requestInit);
  };

  static patch = async (uri: string, data: object | FormData) => {
    const requestInit: RequestInit = {
      method: "PATCH",
      credentials: "include",
    };

    if (data instanceof FormData) {
      requestInit.body = data;
    } else {
      requestInit.headers = { "Content-Type": "application/json" };
      requestInit.body = JSON.stringify(data);
    }
    return await fetch(uri, requestInit);
  };

  static del = async (uri: string, data: object = {}) => {
    const requestInit: RequestInit = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    };
    if (Object.keys(data).length !== 0) {
      requestInit.body = JSON.stringify(data);
    }
    return await fetch(uri, requestInit);
  };
}

export default RequestUtils;
