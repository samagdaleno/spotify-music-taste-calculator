import React, { useEffect } from "react";
import { useNavigate  } from "react-router-dom";
import tokenService from "./token.service"

const Callback: React.FC = () => {
    const history = useNavigate();
    // const location = useLocation();

    useEffect(() => {
      
      alert(window.location.href);
      // Handle callback logic (extract access token from URL, perform actions)
      const handleCallback = () => {
        const accessToken = GetAccessTokenFromUrl();
        if (accessToken) {
          tokenService.setAccessToken(accessToken);
          console.log('Access Token:', accessToken);
        }
  
        // Redirect back to the home page or perform other navigation logic
        history('/');
      };
  
      const GetAccessTokenFromUrl = () => {
        // let { access_token } = useParams();
        const match = window.location.hash.match(/#access_token=([^&]*)/);
        // alert(match);
        return match && match[1];
      };
  
      handleCallback();
    }, [history]);
  
    return(
        <div>Handling Callback...</div>
    );
};

export default Callback;