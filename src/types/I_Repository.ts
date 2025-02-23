import { I_OwnerRepo } from './I_OwnerRepo';

export interface I_Repository {
  id: number;
  name: string;
  forks_count: number;
  stargazers_count: number;
  archived: boolean;
  language: string;
  created_at: string;
  updated_at: string;
  full_name: string;
  description: string;
  owner: I_OwnerRepo;
  html_url: string;
}
