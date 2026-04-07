"use client";

import { GoogleOAuthProvider } from "@react-oauth/google";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <GoogleOAuthProvider clientId="687399893449-7sjvg2nhjeqjis3cgj0mrnmh4glp9duv.apps.googleusercontent.com">

      <html lang="en">
        <body>{children}</body>
      </html>

    </GoogleOAuthProvider>

  );

}