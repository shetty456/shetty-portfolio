import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import WorkSection from '@/components/work/WorkSection';
import AboutSection from '@/components/about/AboutSection';
import ContactSection from '@/components/contact/ContactSection';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <WorkSection />
      <AboutSection />
      <ContactSection />
    </Layout>
  );
}
