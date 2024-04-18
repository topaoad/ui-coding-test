import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="container mx-auto px-4 mt-11 pt-6 max-w-[1080px]">
      {children}
    </div>
  );
};

export default Container;
