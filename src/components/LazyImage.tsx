import React, { useEffect, useState } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  showSpinner?: boolean;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = "",
  showSpinner = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    setIsLoaded(false);
    setImageSrc(src);
  }, [src]);

  return (
    <div className="relative overflow-hidden">
      {!isLoaded && showSpinner && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-6 h-6 border-2 border-t-transparent border-white rounded-full animate-spin" />
        </div>
      )}

      <img
        src={imageSrc ?? ""}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-auto transition-all duration-500 ease-out
          ${
            isLoaded ? "blur-0 opacity-100" : "blur-md opacity-60"
          } ${className}`}
      />
    </div>
  );
};

export default LazyImage;
