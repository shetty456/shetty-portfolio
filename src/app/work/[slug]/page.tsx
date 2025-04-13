import Layout from '@/components/layout/Layout';
import { notFound } from 'next/navigation';

interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  content: string;
}

const projects: Record<string, Project> = {
  'project1': {
    title: 'Project 1',
    description: 'A brief description of your first project and its impact.',
    image: '/project1.jpg',
    category: 'Product Management',
    content: 'Detailed content about Project 1...',
  },
  'project2': {
    title: 'Project 2',
    description: 'A brief description of your second project and its impact.',
    image: '/project2.jpg',
    category: 'Case Study',
    content: 'Detailed content about Project 2...',
  },
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug];

  if (!project) {
    notFound();
  }

  return (
    <Layout>
      <div className="container py-16">
        <div className="max-w-3xl mx-auto">
          <span className="text-sm font-medium text-gray-500">
            {project.category}
          </span>
          <h1 className="heading-1 mt-2 mb-6">{project.title}</h1>
          <div className="aspect-w-16 aspect-h-9 mb-8">
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">{project.description}</p>
            <div>{project.content}</div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 