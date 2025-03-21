// src/components/LandingPage.tsx
import { Button } from 'primereact/button';
import HeaderLandig from './HeaderLandig';

const LandingPage: React.FC = () => {
  return (
    <div>
      <HeaderLandig />
      <main className="p-8">
        <h2 className="text-xl font-semibold mb-4">Opções Fictícias</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-200 rounded-lg shadow-md">
            <h3 className="text-lg font-medium">Opção 1</h3>
            <p>Descrição da opção fictícia 1.</p>
            <Button label="Saiba mais" className="p-button-outlined mt-2" />
          </div>
          <div className="p-4 bg-gray-200 rounded-lg shadow-md">
            <h3 className="text-lg font-medium">Opção 2</h3>
            <p>Descrição da opção fictícia 2.</p>
            <Button label="Saiba mais" className="p-button-outlined mt-2" />
          </div>
          <div className="p-4 bg-gray-200 rounded-lg shadow-md">
            <h3 className="text-lg font-medium">Opção 3</h3>
            <p>Descrição da opção fictícia 3.</p>
            <Button label="Saiba mais" className="p-button-outlined mt-2" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
