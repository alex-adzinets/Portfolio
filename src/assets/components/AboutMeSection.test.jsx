import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import AboutMeSection from './AboutMeSection';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    section: ({ children, ...props }) => <section {...props}>{children}</section>,
    h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }) => <p {...props}>{children}</p>,
  },
  useInView: () => true,
}));

// Mock AnimatedText component
vi.mock('../src/assets/components/AnimatedText.jsx', () => ({
  default: ({ text }) => <span>{text}</span>
}));

describe('AboutMeSection', () => {
  it('renders the about me section with correct content', () => {
    render(<AboutMeSection />);
    
    expect(screen.getByText('ABOUT')).toBeInTheDocument();
    expect(screen.getByText('ME')).toBeInTheDocument();
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument();
  });

  it('renders the image with correct alt text', () => {
    render(<AboutMeSection />);
    
    const image = screen.getByAltText('Portrait of the person in a casual setting');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', './assets/13_7.png');
  });

  it('has proper accessibility attributes', () => {
    render(<AboutMeSection />);
    
    const section = screen.getByLabelText('About Me Section');
    expect(section).toBeInTheDocument();
  });

  it('applies correct styling classes', () => {
    render(<AboutMeSection />);
    
    const section = screen.getByLabelText('About Me Section');
    expect(section).toHaveClass('bg-black', 'text-white', 'min-h-screen');
  });

  it('handles image loading state', async () => {
    render(<AboutMeSection />);
    
    const image = screen.getByAltText('Portrait of the person in a casual setting');
    expect(image).toHaveAttribute('loading', 'lazy');
  });
});