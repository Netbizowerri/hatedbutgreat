import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldOff } from 'lucide-react';
import { PageTransition } from '@/components/ui/LayoutDecorations';
import { SeoMeta } from '@/components/seo/SeoMeta';
import { OrganizationSchema } from '@/components/seo/JsonLd';

export function NotFound() {
  return (
    <PageTransition>
      <SeoMeta
        title="Page Not Found"
        description="This dossier does not exist in our archive."
      />
      <OrganizationSchema />
      <div className="pt-28 lg:pt-36 pb-24 px-4 sm:px-6 lg:px-8 bg-zinc-950 min-h-screen flex items-center justify-center">
        <div className="max-w-lg mx-auto text-center space-y-8">
          <ShieldOff className="w-20 h-20 text-[#008751] mx-auto opacity-60" />
          <h1 className="font-display text-7xl sm:text-8xl font-black text-white tracking-tight">
            404
          </h1>
          <p className="text-zinc-400 text-lg font-body">
            This dossier does not exist in our archive.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-accent font-black uppercase text-xs tracking-widest rounded-full hover:bg-[#008751] hover:text-white transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Universal Portal</span>
          </Link>
        </div>
      </div>
    </PageTransition>
  );
}
