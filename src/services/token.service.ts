class tokenService {
    private accessToken: string | null = null;
    private code: string | null = null;

    getAccessToken(): string  | null {
      return this.accessToken;
    }
  
    async loginToSpotify() {;
    }
  }
  
  const authService = new tokenService();
  export default authService;