import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

// Global UI Components
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { ScrollToTop } from "@/components/scroll-to-top";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { CommandPalette } from "@/components/command-palette";
import { ChatWidget } from "@/components/chat/chat-widget";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Victor Mwendwa | Portfolio",
  description: "Victor Mwendwa | Full-Stack Engineer",
  icons: [{ rel: "icon", url: "/logo.png", type: "image/png" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} min-h-full flex flex-col font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <Navbar />
          <main className="flex-1 flex flex-col min-h-screen pt-24 pb-12">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
          <WhatsAppFab />
          <ChatWidget />
          <CommandPalette />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
