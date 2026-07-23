export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string | 'Present';
  description: string[];
  techStack: string[];
}
