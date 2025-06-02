import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import AboutSection from './AboutSection';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }) => <p {...props}>{children}</p>,
  },
}));

describe('AboutSection', () => {
  it('renders with default props', () => {
    render(<AboutSection />);
    
    expect(screen.getByText('ABOUT')).toBeInTheDocument();
    expect(screen.getByText('ME')).toBeInTheDocument();
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument();
  });

  it('renders with custom heading', () => {
    render(<AboutSection heading="HELLO WORLD" />);
    
    expect(screen.getByText('HELLO')).toBeInTheDocument();
    expect(screen.getByText('WORLD')).toBeInTheDocument();
  });

  it('renders with custom description', () => {
    const customDescription = "This is a custom description";
    render(<AboutSection description={customDescription} />);
    
    expect(screen.getByText(customDescription)).toBeInTheDocument();
  });

  it('displays loading state initially', () => {
    render(<AboutSection />);
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('handles image load success', async () => {
    render(<AboutSection />);
    
    const image = screen.getByAltText(/Profile photo/);
    expect(image).toBeInTheDocument();
    
    // Simulate image load
    image.onload();
    
    await waitFor(() => {
      expect(image).toHaveClass('opacity-100');
    });
  });

  it('handles image load error', async () => {
    render(<AboutSection />);
    
    const image = screen.getByAltText(/Profile photo/);
    
    // Simulate image error
    image.onerror();
    
    await waitFor(() => {
      expect(screen.getByText('Image could not be loaded')).toBeInTheDocument();
    });
  });

  it('applies custom className', () => {
    const { container } = render(<AboutSection className="custom-class" />);
    
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('uses correct image source', () => {
    render(<AboutSection />);
    
    const image = screen.getByAltText(/Profile photo/);
    expect(image).toHaveAttribute('src', './assets/13_7.png');
  });

  it('applies grayscale filter to image', () => {
    render(<AboutSection />);
    
    const image = screen.getByAltText(/Profile photo/);
    expect(image).toHaveClass('grayscale');
    expect(image).toHaveStyle('filter: grayscale(100%)');
  });

  it('has proper responsive layout classes', () => {
    const { container } = render(<AboutSection />);
    
    const gridContainer = container.querySelector('.grid');
    expect(gridContainer).toHaveClass('grid-cols-1', 'lg:grid-cols-12');
  });

  it('renders with proper typography styles', () => {
    render(<AboutSection />);
    
    const aboutHeading = screen.getByText('ABOUT');
    const meHeading = screen.getByText('ME');
    
    expect(aboutHeading).toHaveClass('font-inter');
    expect(meHeading).toHaveClass('font-inter');
    expect(meHeading).toHaveStyle('color: transparent');
  });
});