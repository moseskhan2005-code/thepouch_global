import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
