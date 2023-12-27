import Track from "../interfaces/spotify/track";

export default class TrackUtils {

    public stringArrayToTrackListValidator(tracksLists: string[]): boolean {
        if (tracksLists.length === 0) {
            console.log('Track list is empty');
            return false;
        }

        tracksLists.forEach((trackList) => {
            try {
                JSON.parse(trackList) as Track[];
            } catch (error) {
                console.error('Error parsing track list:', error);
                return false;
            }
        });

        return true;
    }

}