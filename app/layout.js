import { Analytics } from '@vercel/analytics/next';

export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
