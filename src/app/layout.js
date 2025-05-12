import './globals.css';

export const metadata = {
  title: 'Blush Consulting',
  description: 'Finance strategy & consulting services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
