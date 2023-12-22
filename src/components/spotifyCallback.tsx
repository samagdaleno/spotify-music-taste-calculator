import React, { useEffect } from 'react';

const SpotifyCallback: React.FC = () => {

    useEffect(() => {
        const handleCallback = async () => {
            console.log("Callback");
            const urlParams = new URLSearchParams(window.location.search);
            let code = urlParams.get('code')!;

            let codeVerifier = localStorage.getItem('code_verifier')!; // VALIDATE Maybe ? 
            const tokenUrl = 'https://accounts.spotify.com/api/token';
            const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID!;
            const redirectUri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI!;

            const payload = {
                method: 'POST' as const, 
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    client_id: clientId,
                    grant_type: 'authorization_code',
                    code: code,
                    redirect_uri: redirectUri,
                    code_verifier: codeVerifier,
                }),
            };
            const body = await fetch(tokenUrl, payload);
            const response = await body.json();

            localStorage.setItem('access_token', response.access_token);
        };
        handleCallback();
    }, []);

    return <div>Processing...</div>;
};

export default SpotifyCallback;
