import { UDPListener } from './services/udp-listener';

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 20777;

console.log('LapLens Console Listener - F1 2024');
console.log('===================================\n');

const listener = new UDPListener(PORT);
listener.start();

process.on('SIGINT', () => {
  console.log('\nShutting down...');
  listener.stop();
  process.exit(0);
});
