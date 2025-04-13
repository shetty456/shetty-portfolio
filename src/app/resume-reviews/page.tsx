import Layout from '@/components/layout/Layout';

export default function ResumeReviewsPage() {
  return (
    <Layout>
      <div className="container py-16">
        <h1 className="heading-1 text-center mb-8">Resume Reviews</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 mb-6">
            Get expert feedback on your resume to help you stand out in your job
            search. I'll review your resume and provide actionable suggestions to
            improve it.
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800"
            >
              Request a Review
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
} 