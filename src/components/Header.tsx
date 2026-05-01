import clsx from "clsx";

const Header = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <header>
      <h1 className={clsx("mt-1", className)}>{children}</h1>
    </header>
  );
};

export default Header;
