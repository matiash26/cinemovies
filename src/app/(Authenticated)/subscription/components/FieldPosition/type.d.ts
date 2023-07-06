import type React from 'react';

export interface IField {
  side: boolean;
  children: React.ReactNode;
  label: string;
}
