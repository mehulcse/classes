import { type VariantProps, cva } from 'class-variance-authority';

const button = cva(
  'button rounded-[15px] text-center font-medium font-asap justify-center items-center gap-6 focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      color: {
        primary: '',
        secondary: '',
        info: '',
      },
      variant: {
        contained: 'bg-primary text-white',
        outlined: 'border',
        link: 'hover:underline',
      },
      size: {
        md: 'px-8 py-4',
        xs: 'px-4 py-1',
        sm: 'px-6 py-3',
      },
      fullWidth: {
        true: ['w-full'],
      },
    },
    defaultVariants: {
      variant: 'contained',
      color: 'primary',
      size: 'sm',
    },
  }
);

export type Color = 'primary' | 'secondary' | 'info';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  color: Color;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  color,
  fullWidth,
  ...props
}) => (
  <button
    className={button({ variant, size, color, fullWidth, className })}
    {...props}
  />
);

export default Button;
