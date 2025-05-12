import './globals.css';
import '../styles/sections.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Blush Consulting',
  description: 'Finance strategy & consulting services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
