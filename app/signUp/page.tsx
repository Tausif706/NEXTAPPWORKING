import AcmeLogo from '@/app/ui/acme-logo';

import Link from 'next/link';
import SignUpForm from '../ui/signUp-form';

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <Link href="/">
              <AcmeLogo />
            </Link>
          </div>
        </div>
        <SignUpForm />
      </div>
    </main>
  );
}
