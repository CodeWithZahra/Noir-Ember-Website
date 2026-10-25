export default function SectionTitle({ children, left = false }) {
  return (
    <h2 className={`font-serif text-[2.2rem] md:text-5xl mb-[50px] bg-gold-gradient bg-clip-text text-transparent ${left ? 'text-left' : 'text-center'}`}>
      {children}
    </h2>
  );
}
