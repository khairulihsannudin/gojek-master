import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="m-0">
          {children}
        </div>
      </body>
    </html>
  );
}
