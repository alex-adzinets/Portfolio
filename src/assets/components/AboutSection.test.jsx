import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AboutSection from './AboutSection';

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    span: ({ children, ...props }) => <span {...props}>{children}</span>,
    p: ({ children, ...props }) => <p {...props}>{children}</p>,
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
  },
}));

describe('AboutSection', () => {
  it('renders the about section with correct title', () => {
    render(<AboutSection />);
    
    expect(screen.getByText('ABOUT')).toBeInTheDocument();
    expect(screen.getByText('ME')).toBeInTheDocument();
  });

  it('renders the description text', () => {
    render(<AboutSection />);
    
    expect(screen.getByText(/Lorem ipsum dolor sit amet consectetur/)).toBeInTheDocument();
  });

  it('renders the portrait image with correct attributes', () => {
    render(<AboutSection />);
    
    const image = screen.getByAltText('Portrait of a person sitting by a window in a casual setting');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', './assets/13_7.png');
    expect(image).toHaveAttribute('width', '524');
    expect(image).toHaveAttribute('height', '704');
  });

  it('has proper responsive grid layout classes', () => {
    render(<AboutSection />);
    
    const gridContainer = screen.getByText('ABOUT').closest('.grid');
    expect(gridContainer).toHaveClass('grid-cols-1', 'lg:grid-cols-2');
  });

  it('applies correct styling to ME text for outlined effect', () => {
    render(<AboutSection />);
    
    const meText = screen.getByText('ME');
    expect(meText).toHaveStyle({
      color: 'transparent',
      WebkitTextStroke: '3px #000000'
    });
  });
});