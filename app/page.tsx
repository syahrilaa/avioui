'use client'
import Ripple from '@/packages/avioui-tools/src';
import React from 'react';

export default function Home() {
  const ripple = new Ripple()
  return (
    <div>
      <button onMouseUp={(e) => ripple.add(e)}>

      </button>
    </div>
  );
}
