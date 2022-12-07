export type RegisterProps = {
  scrollx?: any;
  current?: number;
  email?: string;
  name?: string;
  password?: string;
  confirmPassword?: string;
  profession?: string;
  region?: string;
  organization?: string;
  setCurrent?: React.Dispatch<React.SetStateAction<number>>;
  setEmail?: React.Dispatch<React.SetStateAction<number>>;
  setName?: React.Dispatch<React.SetStateAction<number>>;
  setPassword?: React.Dispatch<React.SetStateAction<number>>;
  setConfirmPassword?: React.Dispatch<React.SetStateAction<number>>;
  setProfession?: React.Dispatch<React.SetStateAction<number>>;
  setRegion?: React.Dispatch<React.SetStateAction<number>>;
  setOrganization?: React.Dispatch<React.SetStateAction<number>>;
};
