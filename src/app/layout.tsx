import styled from '@emotion/styled';
import EmotionRegistry from './registory';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body style={{ margin: '0px' }}>
        <EmotionRegistry>{children}</EmotionRegistry>
      </body>
    </html>
  );
}
