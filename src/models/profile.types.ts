export interface Profile {
  name: string;
  role: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    portfolio?: string;
  };
}
