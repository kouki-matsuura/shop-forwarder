import { TopContainer } from '@/components/features/top/container/TopContainer';
import { Provider } from '@/components/provider';
import { SWRConfig } from 'swr';
import { SWRConfigProvider } from './SWRConfig';

export default function Home() {
  return (
    <>
      <SWRConfigProvider>
        <Provider>
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <TopContainer />
          </main>
        </Provider>
      </SWRConfigProvider>
    </>
  );
}
