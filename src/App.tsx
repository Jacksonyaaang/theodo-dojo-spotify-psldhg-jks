import logo from './assets/logo.svg';
import './App.css';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchTracks } from './lib/fetchTracks';
import { SavedTrack } from 'spotify-types';


const MonComposant = () => {
  return (<p>Ici notre composant est un simple paragraphe</p>);
}




const App = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const goToNextTrack = () => {
    setTrackIndex(trackIndex + 1);
  }
  const initi = () =>{
    setTrackIndex(0)
  }
  const { data: tracks } = useQuery<SavedTrack[]>({
    queryKey: ['tracks'],
    queryFn: fetchTracks
  });
  console.log({ data: tracks })
  console.log("nbr d'éléments qu'il contient")
  console.log({data : tracks}.data.length)
  const tracksFav = {data : tracks}?.data


  const trackUrls = [
    tracksFav[0].track.preview_url,
    tracksFav[1].track.preview_url,
    tracksFav[2].track.preview_url,
    'https://p.scdn.co/mp3-preview/742294f35af9390e799dd96c633788410a332e52',
    'https://p.scdn.co/mp3-preview/5a12483aa3b51331aba663131dbac967ccb33d99',
    'https://p.scdn.co/mp3-preview/31f65b6a613010f22316c7be335b62226cf2f263',
    'https://p.scdn.co/mp3-preview/0f6b8a3524ec410020457da4cdd7717f9addce2f',
    'https://p.scdn.co/mp3-preview/ac28d1b0be285ed3bfd8e9fa5fad133776d7cf36',
  ];


  const AlbumCover = ({track}) =>  {
    const src = track[0].track.album.images[0].url; // A changer ;)
    console.log(src)
    return (
        <img src={src} style={{ width: 400, height: 320  }} />
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">blind test</h1>
      </header>
      <div className="App-images">
        <p>Spotify!!!</p>
        <audio src={trackUrls[trackIndex]} autoPlay controls />
        <button onClick={goToNextTrack}>
            Next track
        </button>
        <button onClick={initi}>
            initialisation
        </button>
        <MonComposant />
        <AlbumCover  track={tracksFav}/>
      </div>
      <div className="App-buttons"></div>
    </div>
  );
};

export default App;
