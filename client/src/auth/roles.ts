export const Roles = {
  AUDITEUR: "auditeur",
  APPRENTI: "apprenti",
  FRERE_SOEUR: "frere_soeur",
} as const;

export type Role = typeof Roles[keyof typeof Roles];

export const roleRank: Record<Role, number> = {
  auditeur: 1,
  apprenti: 2,
  frere_soeur: 3,
};
