const API_URL = 'https://run.mocky.io/v3/86d47c54-d64c-4c04-a2eb-4e346baeb4af';

export const login = async (username: string, password: string) => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  console.log("🚀 ~ login ~ response:", response.ok)
  if (!response.ok) {
    throw new Error('Error en la solicitud de login');
  }
  return response.ok;
};