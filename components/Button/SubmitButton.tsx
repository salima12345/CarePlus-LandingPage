import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';

interface ButtonProps {
  isLoading?: boolean;
  className?: string;
  children: React.ReactNode;
}

const SubmitButton: React.FC<ButtonProps> = ({
  isLoading = false,
  className = 'shad-primary-btn w-full',
  children
}) => {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={className}
    >
      {isLoading ? (
        <div className="flex items-center gap-4">
          <Image
            src="/assets/icons/loader.svg"
            alt="loader"
            width={24}
            height={24}
            className="animate-spin"
          />
          Loading...
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;
