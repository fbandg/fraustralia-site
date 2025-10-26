export const metadata = { title: "F&R Australia – Panel Installation", description: "Commercial façade & insulated panel installation across Australia." };
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
