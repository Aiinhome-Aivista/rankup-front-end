/* import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const RoleGuard = ({ roles, children, fallback = null }) => {
  const { hasRole, isAuthenticated, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <div>Loading...</div>; // Or a proper loading spinner
  }

  if (!isAuthenticated) {
    return fallback;
  }

  const userHasRequiredRole = roles.some(role => hasRole(role));

  if (userHasRequiredRole) {
    return <>{children}</>;
  }

  return fallback;
};

export default RoleGuard;
 */