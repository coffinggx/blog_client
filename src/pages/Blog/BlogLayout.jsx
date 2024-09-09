
import React from 'react';
import Sidebar from '../../components/Sidebar';

export default function BlogLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}
