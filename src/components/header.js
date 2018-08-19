import React from 'react';

import TopNav from './top-nav';

import './header.css';

export default function Header(props) {
  return (
    // 1. renders a Header
    // 2. Within rendered Header, component renders TopNav
    // 3. TopNav renders two callback functions
    // 4. Also renders <h1> tag
    <header>
      <TopNav
        onGenerateAuralUpdate={() => props.onGenerateAuralUpdate()}
        onRestartGame={() => props.onRestartGame()}
      />
      <h1>HOT or COLD</h1>
    </header>
  );
}
