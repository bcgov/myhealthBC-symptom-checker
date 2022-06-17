import React, { PropsWithChildren, ReactNode, useEffect } from 'react';

type TooltipProps = PropsWithChildren<ReactNode> & {
  text: string;
};

export const Tooltip = ({ children, text }: TooltipProps) => {
  const tipRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
    if (tipRef.current?.style.opacity) {
      tipRef.current.style.zIndex = '-10';
    }
  }, [tipRef]);

  function handleMouseEnter() {
    if (tipRef.current?.style.opacity) {
      tipRef.current.style.opacity = '1';
      tipRef.current.style.marginLeft = '20px';
      tipRef.current.style.zIndex = '10';
    }
  }
  function handleMouseLeave() {
    if (tipRef.current?.style.opacity) {
      tipRef.current.style.opacity = '0';
      tipRef.current.style.marginLeft = '10px';
      tipRef.current.style.zIndex = '-10';
    }
  }
  return (
    <div className='relative flex items-center'>
      <div
        className='absolute w-96 px-4 py-2 rounded flex items-center transition-all duration-300 bg-bcLightBackground text-bcBlack text-sm'
        style={{ top: '100%', opacity: 0 }}
        ref={tipRef}
      >
        {text}
      </div>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </div>
    </div>
  );
};
