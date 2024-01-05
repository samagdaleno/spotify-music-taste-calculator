export default interface TrackDetails {
    id: string; // TODO: isn't it trackId ?	
    // numeric
    danceability: number; //0.585
    energy: number; // 0.842
    valence: number; //0.428
    // non-numeric
    signature: string; // Major
    bpm: string; // 118.211 BPM
    key: string; // C♯/D♭ - TODO: LISTEN NOW option ?
    time_signature: string; // 4/4
    duration: string; // 3m 35s	 ? 3:35 ? 3:35s ? 
    decibels: string; // -5.883 dB
    // unique ? 
    acousticness: number; //0.00242
    instrumentalness: number; // 0.00686
    speechiness: number; // 0.0556
    liveness: number; // 0.0866
}