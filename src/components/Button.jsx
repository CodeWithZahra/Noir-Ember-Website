const base = 'inline-block px-[35px] py-[15px] rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-[400ms] hover:-translate-y-[5px] cursor-pointer';
const variants = {
  gold: 'bg-gold-gradient text-dark shadow-gold hover:shadow-gold-lg',
  outline: 'border border-gold text-gold hover:bg-gold hover:text-dark',
};

export default function Button({ variant = 'gold', href, className = '', children, ...rest }) {
  const cls = `${base} ${variants[variant]} ${className}`;
  return href ? <a href={href} className={cls} {...rest}>{children}</a> : <button className={cls} {...rest}>{children}</button>;
}
