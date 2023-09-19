const apiToken = 'BQCHeVgggm5iV1pcd3wsEJq2aRbwOWTzUCEmLqOOHb7zbAz-xgpIeZcq0o8OvBOlfx4RDfvPgEXh1Va-Rw1imZgGKptsEzuMsTA3jajVjT3zc6gJvUGhDZ96Mre8ZurCEC1_VK7oYtJmpCG5IvUHuop45nbmOKW6s3FAfunrba_gC4sB3ycDRFpGdGEzJ74dAuzyTg8sxUC-7MjL0U3SYgz52ESLUg';

export const fetchTracks = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
     throw new Error(`Fetching tracks failed with status ${response.status}`)
   }
  const data = await response.json() as { items: unknown[] };

  return data.items;
};