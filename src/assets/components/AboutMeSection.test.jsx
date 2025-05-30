/* eslint-disable react/prop-types */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AboutMeSection from './AboutMeSection.jsx';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    p: ({ children, ...props }) => <p {...props}>{children}</p>,
  },
}));

// Mock AnimatedText component
jest.mock('./AnimatedText.jsx', () => {
  return function MockAnimatedText({ text }) {
    return <span>{text}</span>;
  };
});

// Mock image import
jest.mock('./assets/13_7.png', () => 'mocked-image-path');

describe('AboutMeSection', () => {
  it('renders without crashing', () => {
    render(<AboutMeSection />);
    expect(screen.getByText('ABOUT')).toBeInTheDocument();
    expect(screen.getByText('ME')).toBeInTheDocument();
  });

  it('displays the correct heading text', () => {
    render(<AboutMeSection />);
    expect(screen.getByText('ABOUT')).toBeInTheDocument();
    expect(screen.getByText('ME')).toBeInTheDocument();
  });

  it('displays the description text', () => {
    render(<AboutMeSection />);
    expect(screen.getByText(/Lorem ipsum dolor sit amet consectetur/)).toBeInTheDocument();
  });

  it('renders the portrait image with correct alt text', () => {
    render(<AboutMeSection />);
    const image = screen.getByAltText('Portrait in workshop');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('loading', 'lazy');
  });

  it('applies correct CSS classes for responsive design', () => {
    render(<AboutMeSection />);
    const section = screen.getByRole('region');
    expect(section).toHaveClass('bg-black', 'min-h-screen');
  });

  it('has proper semantic structure', () => {
    render(<AboutMeSection />);
    expect(screen.getByRole('region')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});