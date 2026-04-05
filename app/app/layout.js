import "./globals.css";

export const metadata = {
  title: "THEPOUCH.GLOBAL",
  description:
    "A cinematic financial OS that turns your money into a story.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#121212] text-white antialiased">
        {/* Top Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-[3px] bg-[#87CEEB] z-50 animate-pulse" />

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="border-t border-gray-800 mt-10 py-6 text-center text-sm text-gray-400">
          <p>
            Directed by The Pop Culture Pouch. © 2026 World Rights Reserved.
          </p>
        </footer>
      </body>
    </html>
  );
          }
