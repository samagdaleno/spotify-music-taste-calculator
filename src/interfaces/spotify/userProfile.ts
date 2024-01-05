import Track from './track';
import Artist from './artist';
export default interface UserProfile {
    name: string;
    imageUrl: string;
    followers: number;
    topTracks: Track[];
    savedTracks: Track[];
    topArtists: Artist[];
    savedArtists: Artist[];
}