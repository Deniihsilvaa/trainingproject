import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      title: "Reciclagem Inteligente",
      description: "Utilizamos tecnologia para otimizar o processo de reciclagem.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Comunidade Sustentável",
      description: "Conecte-se com pessoas que se importam com o meio ambiente.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Educação Ambiental",
      description: "Aprenda sobre práticas sustentáveis e como fazer a diferença.",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;