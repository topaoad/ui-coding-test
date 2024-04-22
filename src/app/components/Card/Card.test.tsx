import { render, screen } from '@testing-library/react';
import Card from './Card';
import '@testing-library/jest-dom';

describe('Card', () => {
  const defaultProps = {
    id: 1,
    title: 'Test Title',
    description: 'Test Description',
    image: '/test.jpg',
  };

  it('renders correctly', () => {
    render(<Card {...defaultProps} />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByAltText('Test Title')).toBeInTheDocument();
  });

  it('truncates the description if it is more than 30 characters long', () => {
    const longDescription = 'This is a very long description that goes beyond 30 characters.';
    render(<Card {...defaultProps} description={longDescription} />);
    expect(screen.getByText(`${longDescription.substring(0, 30)}...`)).toBeInTheDocument();
  });

  it('has the correct link path', () => {
    render(<Card {...defaultProps} />);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/gallery/1');
  });
});