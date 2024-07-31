import Header from './components/Header.tsx';
import Cover from './components/Cover.tsx';

function App() {
  return (
    <div className="relative flex-1 flex flex-col align-center p-2 animate-slidePageUp">
      <Header />
      <Cover />
    </div>
  );
}

export default App;
