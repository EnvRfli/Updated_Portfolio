export interface Project {
  id: string;
  title: string;
  description_en: string;
  description_id: string;
  image_url: string;
  project_type: 'web' | 'mobile';
  tags: string[];
  show_repo: boolean;
  repo_url: string | null;
  show_demo: boolean;
  demo_url: string | null;
  created_at: string;
}
