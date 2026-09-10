import { Link } from 'react-router-dom';
import { brand } from '../lib/brand';

export default function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link to="/" onClick={onClick} className="flex items-center gap-2.5" aria-label={brand.name}>
      {/* Mark — driven by brand.mark */}
      
      { /* <span className="flex h-7 w-7 items-center justify-center rounded-md border border-line2 bg-card">
        <span className="font-mono text-[13px] font-semibold leading-none text-paper">{brand.mark}</span>
      </span> */ }

      
      <span className="text-[17px] font-semibold tracking-[-0.02em] text-paper">{brand.name.toUpperCase()}</span>

      
       {/*  {brand.suffix && (
        <span className="border border-line2 px-1.5 py-0.5 font-mono text-[9px] tracking-[0.15em] text-muted">
          {brand.suffix} 
          
        </span>

      
      )}*/ }
    </Link>
  );
}
