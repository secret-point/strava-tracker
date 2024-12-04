import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import useAuthStore from '../store/auth';
import { AuthResponse } from '../types/common';

const STRAVA_AUTH_ENDPOINT = 'https://www.strava.com/oauth/authorize';
const STRAVA_TOKEN_ENDPOINT = 'https://www.strava.com/oauth/token';

const discovery = {
  authorizationEndpoint: STRAVA_AUTH_ENDPOINT,
};

export const useStravaAuth = () => {
  const { setAuth } = useAuthStore();

  const redirectUri = makeRedirectUri({ scheme: 'yourapp' });

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: process.env.CLIENT_ID!,
      scopes: ['activity:read', 'activity:read_all'],
      redirectUri,
      responseType: 'code',
    },
    discovery // Pass the discovery object here
  );

  const handleAuth = async () => {
    if (response?.type === 'success') {
      const tokenResponse = await fetch(STRAVA_TOKEN_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          client_id: process.env.CLIENT_ID!,
          client_secret: process.env.CLIENT_SECRET!,
          code: response.params.code,
          grant_type: 'authorization_code',
        }),
      });
      const data: AuthResponse = await tokenResponse.json();
      setAuth(data.access_token, data.refresh_token);
    }
  };

  return { request, response, promptAsync, handleAuth };
};
