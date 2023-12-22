class tokenService {
    private accessToken: string | null = null;
  
    setAccessToken(token: string): void {
      this.accessToken = token;
    }
  
    getAccessToken(): string | null {
      return this.accessToken;
    }

    setAccessTokenFromUrl(url: string): void{
      const tokenMatch = url.match(/#access_token=([^&]*)/);
      if(tokenMatch){
        this.accessToken = tokenMatch && tokenMatch[1];
      };
    }
  }
  
  const authService = new tokenService();
  export default authService;