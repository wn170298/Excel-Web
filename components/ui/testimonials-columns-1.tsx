import React from 'react';
import Image from 'next/image';
import { testimonials } from '@/lib/testimonials-data';

export { testimonials };

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  const duration = props.duration || 10;

  return (
    <div className={props.className} style={{ overflow: 'hidden' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          paddingBottom: '24px',
          animation: `testimonialScroll ${duration}s linear infinite`,
          willChange: 'transform',
        }}
      >
        {[0, 1].map((index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl max-w-xs w-full bg-white"
                style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.08), 0px 2px 2px rgba(0,0,0,0.04), 0px 0px 0px 1px #fafafa' }}
              >
                <p className="text-[15px] leading-[1.65] text-[#4d4d4d]">{text}</p>
                <div className="flex items-center gap-3 mt-5">
                  <Image
                    src={image}
                    alt={name}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <div className="text-[14px] font-medium text-[#171717] leading-[1.4]">{name}</div>
                    <div className="text-[12px] text-[#666666] leading-[1.4]">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
