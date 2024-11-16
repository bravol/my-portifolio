import React from "react";

interface GradientButtonProps {
  children: string;
  onClick?: () => void;
  className?: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`md:text-base sm:text-sm text-xs md:px-6 px-3 py-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full text-white font-medium hover:opacity-85 hidden sm:block ${className}`}
    >
      {children}
    </button>
  );
};

export default GradientButton;
