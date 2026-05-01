import clsx from "clsx";

const Header = ({
  children,
  className,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  title?: string;
}) => {
  return (
    <header>
      <h1 title={title} className={clsx("mt-1", className)}>
        {children}
      </h1>
    </header>
  );
};

export default Header;
