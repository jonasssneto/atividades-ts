export interface Option {
  key: string;
  description: string;
  action: () => void | Promise<void>;
}