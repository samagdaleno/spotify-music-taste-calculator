import React from "react";
import { Link, Navigate } from "react-router-dom";
import tokenService from "../services/token.service";

const Home: React.FC = () => {

    const clientId = "b2b03bd7211e4c189a77861c11fb4b85"; // TODO: Replace with secret or environmental variable
    const redirectUri = "http://localhost:3000"; // TODO: Replace with actual redirect URI
    const scopes = 'user-read-private user-read-email'; // Specify the scopes you need
  
    const spotifyLoginUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=${encodeURIComponent(scopes)}`;
  
    // const getAccessTokenFromUrl = () => {
    //     const match = window.location.hash.match(/#access_token=([^&]*)/);
    //     return match && match[1];
    // };

    if (window.location.hash.includes('access_token')) {
        tokenService.setAccessTokenFromUrl(window.location.toString());
        return <Navigate to="/" />;
    }
    
    if(tokenService.getAccessToken()){
        alert(tokenService.getAccessToken());
    }else{
        console.log("FUCKYOU!");
    }
    
    return(
        <div>
            <h1>Spotify Login Fucker</h1>
            <Link to={spotifyLoginUrl}>Log in with Spotify</Link>
        </div>
    );
};

export default Home;