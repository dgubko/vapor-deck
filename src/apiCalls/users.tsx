export const login = async (username: string, password: string) => {
  const url = "http://localhost:3001/api/v1/login";
  const body: { username: string; password: string } = { username, password };
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    throw Error("Can't get user");
  }
  return response.json();
};
