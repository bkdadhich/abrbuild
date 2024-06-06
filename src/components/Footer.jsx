import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#333456', color: '#F2931C', fontFamily: 'Ubuntu', padding: '10px 0' }} className='sticky bottom-0'>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
        <a href="/" style={{ color: '#F2931C', textDecoration: 'none' }}>Home</a>
        <a href="https://blog.abroadium.com/terms-conditions/" style={{ color: '#F2931C', textDecoration: 'none' }}>Terms</a>
        <a href="https://blog.abroadium.com/privacy-policy-3/" style={{ color: '#F2931C', textDecoration: 'none' }}>Privacy Policy</a>
        <a href="/contact" style={{ color: '#F2931C', textDecoration: 'none' }}>Contact</a>
        <span style={{ color: '#F2931C' }}>© Copyright By Abroadium.com | All Rights Reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
