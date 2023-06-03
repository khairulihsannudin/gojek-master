import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Gojek Super App: Ojek Online, Taksi Online, Pesan Makan, Kirim Barang, Pembayaran</title>
        <link
          rel="icon"
          href="icon.svg"
        />
      </head>
      <body>
        <div className="m-0">{children}</div>
      </body>
    </html>
  );
}
