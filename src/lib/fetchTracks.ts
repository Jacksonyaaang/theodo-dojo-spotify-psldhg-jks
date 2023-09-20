const apiToken = 'BQByzHSWAVkLgpM_XHORFo5HvrbCC2iQKe4Q84RuRvNLXDZmm-8rOnx_lFa0MOYTsdMq2DEQH0OyPXuQaAvqGbnC3w6xkwWpEPyFU4VJwHo6pquZ25-L5h9VM4m8d92o-hlh-ji6-yiifJI3JvVII7XSN1Hn0qZRCi0Jc0HJQGTAYBSTTexkcO1863lBnp4dZ6M__ECduqs-CaZAoDUfI067s2Julg';

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