import { TopContainer } from '@/components/features/top/container/TopContainer';
import { Provider } from '@/components/provider';

export default function Home() {
  return (
    <>
      <Provider>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <TopContainer />
        </main>
      </Provider>
    </>
  );
}
