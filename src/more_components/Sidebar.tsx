const Sidebar = ({ items }: { items: { name: string; href: string }[] }) => {
  return (
    <div>
      {items.map(({ href, name }) => (
        <div key={href}>
          <a role="navigation" href={href}>
            {name}
          </a>
        </div>
      ))}
    </div>
  );
};
export default Sidebar;
