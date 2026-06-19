import Link from 'next/link';
import type { ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  children: ReactNode;
  [key: string]: unknown;
}

export default function Button({
  variant = 'primary',
  size,
  href,
  target,
  rel,
  type = 'button',
  disabled = false,
  className = '',
  children,
  ...rest
}: ButtonProps) {
  const variantClass = { primary: 'btn-primary', secondary: 'btn-secondary', ghost: 'btn-ghost' }[variant];
  const sizeClass    = size === 'lg' ? 'btn-lg' : size === 'sm' ? 'btn-sm' : '';
  const classes      = [variantClass, sizeClass, className].filter(Boolean).join(' ');

  if (href) {
    const computedRel = rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined);
    if (href.startsWith('/') || href.startsWith('#')) {
      return (
        <Link href={href} className={classes} target={target} rel={computedRel} {...(rest as Record<string, unknown>)}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} target={target} rel={computedRel} {...(rest as Record<string, unknown>)}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      type={type}
      disabled={disabled || undefined}
      {...(rest as Record<string, unknown>)}
    >
      {children}
    </button>
  );
}
