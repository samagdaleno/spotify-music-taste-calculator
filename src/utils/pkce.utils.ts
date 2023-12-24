class PKCEUtils {
    private static generateRandomString(length: number): string {
      const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let result = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        result += charset.charAt(randomIndex);
      }
      return result;
    }
    
    public static generateCodeVerifier(): string {
      const codeVerifierLength = 64;
      return this.generateRandomString(codeVerifierLength);
    }
  
    private static async sha256(plain: string): Promise<ArrayBuffer> {
      const encoder = new TextEncoder();
      const data = encoder.encode(plain);
      return await crypto.subtle.digest('SHA-256', data);
    }
  
    private static base64URLEncode(buffer: ArrayBuffer): string {
      const bytes = new Uint8Array(buffer);
      let binary = '';
      bytes.forEach((byte) => {
        binary += String.fromCharCode(byte);
      });
      return btoa(binary)
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
    }
  
    public static async generateCodeChallenge(codeVerifier: string): Promise<string> {
      const hashed = await this.sha256(codeVerifier);
      return this.base64URLEncode(hashed);
    }
  }
  
export default PKCEUtils;