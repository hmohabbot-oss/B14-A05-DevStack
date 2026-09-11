import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechCard } from "./components/TechCard";
import type { Technology } from "./components/TechCard";
import { YourStack } from './components/YourStack';
import { Footer } from './components/Footer';

export function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Load JSON Data with loading state
  useEffect(() => {
    setLoading(true);
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load technology list:', err);
        setLoading(false);
      });
  }, []);

  // Add item handler
  const handleAddToStack = (tech: Technology) => {
    const isExist = stack.some((item) => item.id === tech.id);
    if (isExist) {
      toast.warn(`${tech.name} is already in your stack!`, { position: 'top-right' });
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack!`, { position: 'top-right' });
  };

  // Remove single item
  const handleRemoveItem = (id: string) => {
    const itemToRemove = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    if (itemToRemove) {
      toast.info(`${itemToRemove.name} removed from your stack!`, { position: 'top-right' });
    }
  };

  // Clear entire stack
  const handleRemoveAll = () => {
    setStack([]);
    toast.error('All technologies cleared from your stack!', { position: 'top-right' });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        <Hero />

        {/* Explore Technologies Section */}
        <section id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20">
          <div className="mb-10 text-left">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Explore the <span className="brand-gradient-text">Technologies</span>
            </h2>
            <p className="text-gray-500 text-sm mt-2 font-normal">
              Add any technologies you like — each one can be added only once.
            </p>
          </div>

          {/* Grid + Sidebar Layout */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
            
            {/* Left: 9 Columns on Desktop */}
            <div className="xl:col-span-9">
              {loading ? (
                <div className="py-20 flex flex-col items-center justify-center gap-4">
                  <div className="w-10 h-10 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-sm font-medium text-gray-500">Loading technologies...</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {technologies.map((tech) => (
                    <TechCard
                      key={tech.id}
                      tech={tech}
                      isAdded={stack.some((item) => item.id === tech.id)}
                      onAdd={handleAddToStack}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Right: 3 Columns on Desktop */}
            <div className="xl:col-span-3">
              <YourStack
                stack={stack}
                onRemove={handleRemoveItem}
                onRemoveAll={handleRemoveAll}
              />
            </div>

          </div>
        </section>
      </main>

      <Footer />

      {/* Toast Alert Component */}
      <ToastContainer autoClose={2500} hideProgressBar={false} />
    </div>
  );
}

export default App;