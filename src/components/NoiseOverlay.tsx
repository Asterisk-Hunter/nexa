import React from 'react';

export default function NoiseOverlay() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay"
      style={{
        backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAGFBMVEUAAAA5OTkAAABMTExERERmZmYzMzMyMjJOUl6NAAAAAXRSTlMAQObYZgAAAAFiS0cEAAAAAA5jAAAAcklEQVQ4y6XNwRGAMBAEwXkDtQA6oIAe6IID+68x52F04w8M/u3tuR9mFz8d2fN+mF38dGTd+2F28dOR9eyH2cVPR/b8HGYXPx1Zz36YXfx0ZC/PYXbx05H17IfZxU9H1rMfzhc/Hb/56fjdT8fvfjo+8wFwO2E58Q3j2QAAAABJRU5ErkJggg==")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '128px'
      }}
    />
  );
}
