"use client"
import ContentTextbox from '@/components/textbox/ContentTextbox';
import ImageAccordion from '@/components/accordions/ImageAccordion';
import StandardTextbox from '@/components/textbox/StandardTextbox';
import SimpleStepsBento from '@/components/bento/SimpleStepsBento';
import PushableButton from '@/components/buttons/PushableButton';
import { LucideIcon } from 'lucide-react';

const sectionsData = {
  hero: {
    headline: "Welcome to Our Simple Landing Page!",
    subcopy: "Your quick guide to understanding our amazing service.",
    cta: "Get Started",
    imageSrc: "/images/placeholder1.avif",
    imageAlt: "An abstract illustration representing our service",
  },
  features: [
    { icon: <LucideIcon />, text: "Feature One" },
    { icon: <LucideIcon />, text: "Feature Two" },
    { icon: <LucideIcon />, text: "Feature Three" },
  ],
  about: "Our service aims to simplify everyday tasks for everyone.",
  testimonials: [
    { quote: "This service has changed my life!", author: "Satisfied Customer" },
    { quote: "I can't imagine living without it now.", author: "Happy User" },
  ],
  process: [
    { step: "Step One: Sign Up" },
    { step: "Step Two: Learn" },
    { step: "Step Three: Enjoy!" },
  ],
};

export default function Home() {
  return (
    <div>
      <section id="hero" className="bg-hero gradient-background">
        <ContentTextbox 
          title={<h1>{sectionsData.hero.headline}</h1>} 
          description={<p>{sectionsData.hero.subcopy}</p>} 
          className="text-center"
        />
        <img src={sectionsData.hero.imageSrc} alt={sectionsData.hero.imageAlt} className="mx-auto" />
        <PushableButton text={sectionsData.hero.cta} onClick={() => {}} className="mt-4" />
      </section>

      <section id="features" className="bg-white">
        <ImageAccordion 
          items={sectionsData.features.map(feature => ({ title: feature.text, content: <div>{feature.icon}</div }))}
          title="Our Features"
          className="max-w-2xl mx-auto"
        />
      </section>

      <section id="about" className="bg-white">
        <StandardTextbox 
          title={<h2>About Us</h2>} 
          description={<p>{sectionsData.about}</p>} 
          className="text-center"
        />
      </section>

      <section id="testimonials" className="bg-white">
        <ContentTextbox 
          title={<h2>Testimonials</h2>} 
          description={<p>{sectionsData.testimonials.map(({ quote, author }) => <blockquote><p>{quote}</p><footer>- {author}</footer></blockquote>)}</p>} 
          className="text-center"
        />
      </section>

      <section id="process" className="bg-white">
        <SimpleStepsBento 
          items={sectionsData.process.map(step => ({ title: step.step, description: "Learn more about this step." }))}
          className="max-w-md mx-auto"
        />
      </section>

      <section id="contact" className="bg-soft-noise">
        <ContentTextbox 
          title={<h2>Contact Us</h2>} 
          description={<p>Join us today to learn more!</p>} 
        />
      </section>
    </div>
  );
}