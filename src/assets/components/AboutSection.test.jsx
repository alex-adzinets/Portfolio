/* eslint-disable react/prop-types */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutSection from './AboutSection';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }) => <p {...props}>{children}</p>,
  },
}));

// Mock AnimatedText component
jest.mock('../src/assets/components/AnimatedText.jsx', () => {
  return function MockAnimatedText({ text }) {
    return <span>{text}</span>;
  };
});

// Mock image import
jest.mock('./assets/13_7.png', () => 'test-image.png');

describe('AboutSection', () => {
  test('renders without crashing', () => {
    render(<AboutSection />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  test('displays ABOUT heading', () => {
    render(<AboutSection />);
    expect(screen.getByText('ABOUT')).toBeInTheDocument();
  });

  test('displays ME heading', () => {
    render(<AboutSection />);
    expect(screen.getByText('ME')).toBeInTheDocument();
  });

  test('displays lorem ipsum text', () => {
    render(<AboutSection />);
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument();
  });

  test('image has correct alt text', () => {
    render(<AboutSection />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('alt', 'Portrait of the person in a casual setting');
  });

  test('image has lazy loading', () => {
    render(<AboutSection />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('loading', 'lazy');
  });

  test('has proper responsive classes', () => {
    render(<AboutSection />);
    const section = screen.getByRole('img').closest('section');
    expect(section).toHaveClass('w-full', 'min-h-screen', 'bg-black');
  });
});