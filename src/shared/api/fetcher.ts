const API_URL = import.meta.env.VITE_API_URL || '/api';

export async function fetcher<TData>(path: string, options?: RequestInit): Promise<TData> {
  const url = `${API_URL}${path.startsWith('/') ? path : '/' + path}`;

  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });

  if (!res.ok) {
    const { error } = await res.json().catch(() => ({ error: res.statusText }));
    throw new Error(error);
  }

  return res.json() as Promise<TData>;
}
