"use client";

import { UserRole } from "@prisma/client";

import { useCurrentRole } from "@/hooks/use-current-role";
import { FormError } from "@/components/form-error";

interface RoleGateProps {
  children: React.ReactNode;
  allowedRole: UserRole;
};

export const RoleGateBoolean = ({
  children,
  allowedRole,
}: RoleGateProps) => {
  const role = useCurrentRole();

  if (role == UserRole.ADMIN) {
    return(
      <>{children}</>
    )
  }
  
  if (role !== allowedRole) {
    return;
  }

  return (
    <>
      {children}
    </>
  );
};
