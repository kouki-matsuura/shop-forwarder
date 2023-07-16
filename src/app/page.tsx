import Header from '@/components/ui/Header';
import styles from './page.module.css';
import { MapContainer } from '@/components/features/map/container/mapContainer';

export default function Home() {
  return (
    <>
      <Header></Header>
      <main className={styles.main}>
        <MapContainer />
      </main>
    </>
  );
}
