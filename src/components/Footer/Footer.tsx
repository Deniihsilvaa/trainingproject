const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Recicla+. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;