import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutMeSection from './AboutMeSection';

// Mock framer-motion to avoid animation complexities in tests
vi.mock('framer-motion', () => ({
  motion: {
    h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
    span: ({ children, ...props }) => <span {...props}>{children}</span>,
    p: ({ children, ...props }) => <p {...props}>{children}</p>,
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
  },
}));

describe('AboutMeSection', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the main section with correct structure', () => {
    render(<AboutMeSection />);
    
    const section = screen.getByRole('region');
    expect(section).toBeInTheDocument();
    expect(section).toHaveClass('min-h-screen', 'bg-black', 'text-white');
  });

  it('displays the ABOUT ME heading correctly', () => {
    render(<AboutMeSection />);
    
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('ABOUT ME');
    
    // Check for ABOUT text
    expect(screen.getByText('ABOUT')).toBeInTheDocument();
    expect(screen.getByText('ME')).toBeInTheDocument();
  });

  it('renders the description text', () => {
    render(<AboutMeSection />);
    
    const description = screen.getByText(/Lorem ipsum dolor sit amet consectetur adipiscing elit/);
    expect(description).toBeInTheDocument();
    expect(description.tagName).toBe('P');
  });

  it('renders the profile image with correct attributes', () => {
    render(<AboutMeSection />);
    
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', './assets/13_7.png');
    expect(image).toHaveAttribute('alt', 'Profile portrait in black and white showing a person sitting by a window');
    expect(image).toHaveAttribute('loading', 'lazy');
  });

  it('applies correct CSS classes for responsive layout', () => {
    render(<AboutMeSection />);
    
    const container = screen.getByRole('region').firstChild;
    expect(container).toHaveClass('container', 'mx-auto');
    
    const gridContainer = container.firstChild;
    expect(gridContainer).toHaveClass('grid', 'grid-cols-1', 'lg:grid-cols-12');
  });

  it('handles image loading error correctly', async () => {
    render(<AboutMeSection />);
    
    const image = screen.getByRole('img');
    
    // Simulate image error
    const errorEvent = new Event('error');
    Object.defineProperty(errorEvent, 'target', {
      value: { src: '' },
      writable: true
    });
    
    image.dispatchEvent(errorEvent);
    
    await waitFor(() => {
      expect(image.src).toContain('data:image/svg+xml');
    });
  });

  it('applies correct font families to text elements', () => {
    render(<AboutMeSection />);
    
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveStyle({ fontFamily: 'Inter, sans-serif' });
    
    const description = screen.getByText(/Lorem ipsum dolor sit amet/);
    expect(description).toHaveStyle({ fontFamily: 'Goldman, sans-serif' });
  });

  it('has proper semantic structure for accessibility', () => {
    render(<AboutMeSection />);
    
    // Check for semantic elements
    expect(screen.getByRole('region')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('applies grayscale filter to the image', () => {
    render(<AboutMeSection />);
    
    const image = screen.getByRole('img');
    expect(image).toHaveClass('filter', 'grayscale');
  });
});