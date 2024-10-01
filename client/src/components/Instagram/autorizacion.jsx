// Redirect to Instagram OAuth
const redirectToInstagramOAuth = () => {
    const clientId = 'YOUR_CLIENT_ID'; // Reemplaza con tu ID de cliente
    const redirectUri = 'http://localhost:3000/auth/instagram/callback'; // Tu URI de redirección
    const scope = 'user_profile,user_media'; // Permisos necesarios
  
    window.location.href = `https://api.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`;
  };
  
  // Handle OAuth Callback
  const handleOAuthCallback = async (code) => {
    const clientId = '842965664101798'; // Reemplaza con tu ID de cliente
    const clientSecret = '4a2f1a92930122e50e07004180a1a2e7'; // Reemplaza con tu secreto de cliente
    const redirectUri = 'http://localhost:3000/autorizacion'; // Tu URI de redirección
  
    try {
      const response = await fetch(`https://api.instagram.com/oauth/access_token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          client_id: clientId,
          client_secret: clientSecret,
          grant_type: 'authorization_code',
          redirect_uri: redirectUri,
          code: code,
        }),
      });
      const data = await response.json();
      // Manejar el token de acceso recibido
      console.log(data);
    } catch (error) {
      console.error('Error fetching access token:', error);
    }
  };
  
  // Llama a redirectToInstagramOAuth() para iniciar el proceso de autorización
  