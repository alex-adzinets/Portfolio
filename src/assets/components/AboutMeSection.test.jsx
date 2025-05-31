/* eslint-disable react/prop-types */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import AboutMeSection from './AboutMeSection';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
  },
}));

// Mock image import
vi.mock('./assets/13_7.png', () => ({
  default: 'mocked-image-path'
}));

describe('AboutMeSection', () => {
  test('renders the main title correctly', () => {
    render(<AboutMeSection />);
    
    expect(screen.getByText('ABOUT')).toBeInTheDocument();
    expect(screen.getByText('ME')).toBeInTheDocument();
  });

  test('renders the default about text', () => {
    render(<AboutMeSection />);
    
    expect(screen.getByText(/Lorem ipsum dolor sit amet consectetur/)).toBeInTheDocument();
  });

  test('renders custom about text when provided', () => {
    const customText = "This is a custom about text for testing purposes.";
    render(<AboutMeSection aboutText={customText} />);
    
    expect(screen.getByText(customText)).toBeInTheDocument();
  });

  test('renders the portrait image with correct alt text', () => {
    render(<AboutMeSection />);
    
    const image = screen.getByAltText('Portrait of a person sitting by a window in a casual setting');
    expect(image).toBeInTheDocument();
    expect(image).toHaveClass('filter', 'grayscale');
  });

  test('applies correct CSS classes for responsive design', () => {
    render(<AboutMeSection />);
    
    const section = screen.getByRole('region');
    expect(section).toHaveClass('min-h-screen', 'bg-gray-900');
  });

  test('has proper accessibility attributes', () => {
    render(<AboutMeSection />);
    
    const headings = screen.getAllByRole('heading', { level: 1 });
    expect(headings).toHaveLength(2);
    
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('alt');
    expect(image).toHaveAttribute('loading', 'lazy');
  });

  test('renders with custom portrait image when provided', () => {
    const customImage = '/custom/image/path.jpg';
    render(<AboutMeSection portraitImage={customImage} />);
    
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', customImage);
  });
});