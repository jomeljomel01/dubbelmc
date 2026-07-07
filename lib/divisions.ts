import {
  Activity,
  Cpu,
  Microscope,
  ShieldCheck,
  Stethoscope,
  Syringe,
} from 'lucide-react';
import type { ComponentType } from 'react';

export type DivisionKey =
  | '99tech'
  | 'network'
  | 'bonss'
  | 'ENT';

export type Division = {
  key: DivisionKey;
  icon: ComponentType<{ className?: string; 'aria-hidden'?: boolean }>;
  title: string;
  description: string;
  highlights: string[];
};

export const divisions: Division[] = [];

export function getDivision(key: string): Division | undefined {
  return divisions.find((d) => d.key === key);
}
