import Layout from '@/components/layout/Layout';

export default function ResumePage() {
  return (
    <Layout>
      <div className="container py-16">
        <h1 className="heading-1 text-center mb-8">My Resume</h1>
        <div className="max-w-3xl mx-auto">
          {/* Add your resume content here */}
          <p className="text-center text-gray-600">
            Resume content will be added here.
          </p>
        </div>
      </div>
    </Layout>
  );
} 