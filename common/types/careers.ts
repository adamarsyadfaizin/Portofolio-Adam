export interface CareerProps {
  position: string;
  company: string;
  logo: string | null;
  location: string;
  location_type: "Onsite" | "Remote" | "Hybrid";
  type: string;
  start_date: string;
  end_date: string | null;
  industry: string;
  link: string | null;
  responsibilities?: string[];
  responsibilities_en?: string[];
  lessons_learned?: string[];
  lessons_learned_en?: string[];
  impact?: string[];
  impact_en?: string[];
  isShow?: boolean;
}

export interface CareerGroupProps {
  company: string;
  logo: string | null;
  location: string;
  location_type?: "Onsite" | "Remote" | "Hybrid";
  type?: string;
  start_date: string;
  end_date: string | null;
  link: string | null;
  positions: CareerProps[];
  is_pinned?: boolean;
  pin_tag?: string;
  pin_tag_en?: string;
  isShow?: boolean;
}
