import React from 'react';
import Image from 'next/image';

/**
 * BioQuote component clones the testimonial/invite-only session description block
 * located below the hero buttons. It includes the specific quote text, 
 * the portrait image of Neelmani Bagaria, and the name label.
 */
const BioQuote: React.FC = () => {
  return (
    <div 
      className="framer-1gg2hd hidden-19lbzu3" 
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap: '20px',
        paddingLeft: '24px',
        marginTop: '60px',
        maxWidth: '380px',
        borderLeft: '1px solid rgba(255, 255, 255, 0.3)',
      }}
    >
      {/* Quote Text Container */}
      <div className="framer-hzmlm4">
        <div 
          className="framer-3i5o8y" 
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '14px',
            lineHeight: '1.6em',
            letterSpacing: '0px',
            color: '#cccccc',
            fontStyle: 'italic',
          }}
        >
          <p className="framer-text">
            <span className="framer-text">“</span>
            I host Invite-only Sessions where we build intellectual competences to ignite the PolyMaths within us. 
            <br className="framer-text" />
            <br className="framer-text" />
            Learn the Mental Models to become great Capital Allocators, think investors, Entrepreneurs or even Innovators and Builders
            <span className="framer-text">”</span>
          </p>
        </div>
      </div>

      {/* Author/Bio Section */}
      <div 
        className="framer-syu1rv"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '12px',
        }}
      >
        {/* Avatar Image */}
        <div 
          className="framer-1f2ut74"
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            overflow: 'hidden',
            position: 'relative',
            flexShrink: 0,
          }}
        >
          <div data-framer-background-image-wrapper="true" style={{ width: '100%', height: '100%' }}>
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/710veydyjYi2K9KDA8l6qn1kAtc-1.jpg" 
              alt="Neelmani Bagaria"
              fill
              className="object-cover"
              sizes="24px"
            />
          </div>
        </div>

        {/* Author Name */}
        <div 
          className="framer-ivcm6d"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '13px',
            fontWeight: 400,
            lineHeight: '1.2em',
            letterSpacing: '0.02em',
            color: '#ffffff',
            opacity: 0.9,
          }}
        >
          <p className="framer-text">Neelmani Bagaria</p>
        </div>
      </div>
    </div>
  );
};

export default BioQuote;