import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import AboutSection from './AboutSection';

// Mock framer-motion to avoid animation complexities in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }) => <p {...props}>{children}</p>,
  },
}));

// Mock the profile image import
vi.mock('./assets/13_7.png', () => ({
  default: 'mocked-profile-image.png'
}));

describe('AboutSection', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the about section with correct structure', () => {
    render(<AboutSection />);
    
    expect(screen.getByRole('region', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByText('ABOUT')).toBeInTheDocument();
    expect(screen.getByText('ME')).toBeInTheDocument();
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(<AboutSection />);
    
    const section = screen.getByRole('region');
    expect(section).toHaveAttribute('aria-labelledby', 'about-heading');
    
    const heading = screen.getByText('ABOUT');
    expect(heading).toHaveAttribute('id', 'about-heading');
  });

  it('renders image with correct attributes', () => {
    render(<AboutSection />);
    
    const image = screen.getByAltText(/Professional workspace with person sitting by window/);
    expect(image).toHaveAttribute('src', 'mocked-profile-image.png');
    expect(image).toHaveAttribute('loading', 'lazy');
    expect(image).toHaveClass('grayscale');
  });

  it('shows loading state initially', () => {
    render(<AboutSection />);
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('handles image load success', async () => {
    render(<AboutSection />);
    
    const image = screen.getByAltText(/Professional workspace with person sitting by window/);
    
    fireEvent.load(image);
    
    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    });
  });

  it('handles image load error', async () => {
    render(<AboutSection />);
    
    const image = screen.getByAltText(/Professional workspace with person sitting by window/);
    
    fireEvent.error(image);
    
    await waitFor(() => {
      expect(screen.getByText('Image failed to load')).toBeInTheDocument();
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    });
  });

  it('applies correct styling classes', () => {
    render(<AboutSection />);
    
    const section = screen.getByRole('region');
    expect(section).toHaveClass('min-h-screen', 'bg-black', 'text-white');
    
    const aboutHeading = screen.getByText('ABOUT');
    expect(aboutHeading).toHaveClass('text-[88px]', 'font-normal');
  });
});