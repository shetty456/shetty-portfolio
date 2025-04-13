"use client"

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
  year: string;
}

const projects: Project[] = [
  {
    title: 'Project 1',
    description: 'A brief description of your first project and its impact.',
    image: '/images/project1.jpg',
    link: '/work/project1',
    category: 'Product Management',
    year: '2024',
  },
  {
    title: 'Project 2',
    description: 'A brief description of your second project and its impact.',
    image: '/images/project2.jpg',
    link: '/work/project2',
    category: 'Case Study',
    year: '2023',
  },
  // Add more projects as needed
];

const WorkSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="work" className="section bg-white">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Work</h2>
          <p className="text-lg text-gray-600">
            A selection of my recent projects and case studies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <Link href={project.link}>
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-medium text-gray-500">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-400">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection; 