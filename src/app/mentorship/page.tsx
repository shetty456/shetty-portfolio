import Layout from '@/components/layout/Layout';

export default function MentorshipPage() {
  return (
    <Layout>
      <div className="container py-16">
        <h1 className="heading-1 text-center mb-8">Mentorship</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 mb-6">
            I offer mentorship sessions to help aspiring product managers and developers
            grow in their careers. Whether you're looking to break into product
            management or want to improve your existing skills, I'm here to help.
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800"
            >
              Schedule a Session
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
} 