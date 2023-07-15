import { Key } from "react";

export type JobType = {
  id: Key;
  type: string;
  url: URL;
  created_at: string;
  company: string;
  company_url: URL;
  location: string;
  title: string;
  description: string;
  how_to_apply: string;
  company_logo: string;
};
