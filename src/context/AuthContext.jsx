import { createContext, useState } from "react";
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const isLoggedIn = !!token;
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        token,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

/* import { createContext } from "react";
import { AuthProvider as OidcProvider, useAuth } from "react-oidc-context";

export const AuthContext = createContext();

const oidcConfig = {
  authority: "https://your-keycloak-url/realms/your-realm", // PLACEHOLDER
  client_id: "your-client-id", // PLACEHOLDER
  redirect_uri: window.location.origin,
  onSigninCallback: () => {
    window.history.replaceState({}, document.title, window.location.pathname);
  }
};

function AuthProviderContent({ children }) {
  const auth = useAuth();

  const hasRole = (role) => {
    if (!auth.user || !auth.user.profile) return false;
    const roles = auth.user.profile.realm_access?.roles || [];
    return roles.includes(role);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: auth.isAuthenticated,
        user: auth.user,
        isLoading: auth.isLoading,
        login: () => auth.signinRedirect(),
        logout: () => auth.signoutRedirect(),
        hasRole,
        error: auth.error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function AuthProvider({ children }) {
  return (
    <OidcProvider {...oidcConfig}>
      <AuthProviderContent>{children}</AuthProviderContent>
    </OidcProvider>
  );
} */
