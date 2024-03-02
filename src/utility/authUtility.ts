import { CLIENT_ID, CLIENT_SECRET } from "../environment";

const clientId: string = CLIENT_ID;
const params = new URLSearchParams(window.location.search);
const code = params.get("code");

export default async function getAuthInfo() {
    if (!code) {
        console.log("Redirecting to Spotify authorization page...");
        redirectToAuthCodeFlow(clientId)
    } 
}

export async function getAccessTokenFromCode() {
    if (code)
    {
        await getAccessToken(clientId, code!); 
        document.location.reload(); // reload once token is received.
    }
}

async function redirectToAuthCodeFlow(clientId: string) {
    const verifier = generateCodeVerifier(128);
    const challenge = await generateCodeChallenge(verifier);

    localStorage.setItem("verifier", verifier);

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("response_type", "code");
    params.append("redirect_uri", "http://localhost:3000/callback");
    params.append("scope", "user-read-private user-read-email playlist-modify-public playlist-modify-private");
    params.append("code_challenge_method", "S256");
    params.append("code_challenge", challenge);

    document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

function generateCodeVerifier(length: number) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

async function generateCodeChallenge(codeVerifier: string) {
    const data = new TextEncoder().encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode(...Array.from(new Uint8Array(digest))))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}


async function getAccessToken(clientId: string, code: string): Promise<string> {
    const verifier = localStorage.getItem("verifier");

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("grant_type", "authorization_code");
    params.append("code", code);
    params.append("redirect_uri", "http://localhost:3000/callback");
    params.append("code_verifier", verifier!);

    try {
        const result = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(clientId + ':' + CLIENT_SECRET)
            },
            body: params
        });

        if (result.status !== 200) {
            const errorMessage = await result.text();
            console.error("Error:", errorMessage);
        } else {
            const { access_token } = await result.json();
            console.log("Access token:", access_token);
            localStorage.setItem("access_token", access_token);
            return access_token;
        }
    } catch (error) {
        console.error("Error:", error);
    }

    return "no access token found";
}
