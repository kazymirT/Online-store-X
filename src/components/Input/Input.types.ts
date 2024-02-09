import type { InputHTMLAttributes } from 'react';

type DefaultInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size' | 'type' | 'color'
>;

export type InputProps = {
  type: 'email' | 'text' | 'number' | 'password';
  className?: string;
  size: 's' | 'm' | 'l';
  color: 'white' | 'grey';
  error?: boolean;
} & DefaultInputProps;
