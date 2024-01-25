interface Body {
  search: string;
  page: number;
}

export const UseRequest = () => {
  const doRequest = async (url: string, body: Body) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      return data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  return { doRequest };
};
