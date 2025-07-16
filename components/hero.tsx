import { Star } from 'lucide-react';
import React from 'react';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

interface HeroProps {
  heading?: string;
  description?: string;
  button?: {
    text: string;
    url: string;
  };
}

const Hero = ({
  heading = 'Welcome to LexTrack',
  description = 'Your all-in-one Translation Management System. Streamline language project workflows, manage linguists, and track costs with precision and efficiency. Built with Next.js, Prisma, and PostgreSQL.',
  button = {
    text: 'Get Started!',
    url: 'https://localhost:3000/auth/login',
  },
}: HeroProps) => {
  return (
    <section className='py-32'>
      <div className='container text-center'>
        <div className='mx-auto flex max-w-5xl flex-col gap-6'>
          <h1 className='text-3xl font-extrabold lg:text-6xl'>{heading}</h1>
          <p className='text-muted-foreground text-balance lg:text-lg'>
            {description}
          </p>
        </div>
        <Button
          asChild
          size='lg'
          className='mt-10'
        >
          <a href={button.url}>{button.text}</a>
        </Button>
      </div>
    </section>
  );
};

export { Hero };
