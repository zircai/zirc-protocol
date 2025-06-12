import Image from 'next/image';
import Link from 'next/link';

import { FcGoogle } from 'react-icons/fc';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const Signup = () => {
  return (
    <section className="relative min-h-screen bg-black">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"
        style={{
          backgroundPosition: '-1px -1px',
        }}
      />
      
      <div className="container relative py-16 md:py-28 lg:py-32">
        <div className="flex flex-col gap-4">
          <Card className="mx-auto w-full max-w-sm border-zinc-800 bg-black/50 backdrop-blur-sm">
            <CardHeader className="flex flex-col items-center space-y-0">
              <Image
                src="/images/layout/logo.svg"
                alt="logo"
                width={129}
                height={32}
                className="mb-7 dark:invert"
              />
              <p className="mb-2 text-2xl font-bold text-white">Start your free trial</p>
              <p className="text-zinc-400">
                Sign up in less than 2 minutes.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <Input 
                  type="text" 
                  placeholder="Enter your name" 
                  required 
                  className="bg-black/50 border-zinc-800 text-white placeholder:text-zinc-500"
                />
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  required 
                  className="bg-black/50 border-zinc-800 text-white placeholder:text-zinc-500"
                />
                <div>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    required
                    className="bg-black/50 border-zinc-800 text-white placeholder:text-zinc-500"
                  />
                  <p className="text-zinc-500 mt-1 text-sm">
                    Must be at least 8 characters.
                  </p>
                </div>
                <Button type="submit" className="mt-2 w-full bg-zinc-800 hover:bg-zinc-700">
                  Create an account
                </Button>
                <Button variant="outline" className="w-full border-zinc-800 text-white hover:bg-zinc-800">
                  <FcGoogle className="mr-2 size-5" />
                  Sign up with Google
                </Button>
              </div>
              <div className="text-zinc-400 mx-auto mt-8 flex justify-center gap-1 text-sm">
                <p>Already have an account?</p>
                <Link href="/login" className="text-white font-medium hover:text-zinc-300">
                  Log in
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Signup;
