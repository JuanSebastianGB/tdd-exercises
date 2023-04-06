import { useState } from 'react';

interface Props {
  title: string;
  children: React.ReactNode;
}
const Accordion: React.FC<Props> = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h3>{title}</h3>
      {open && <div>{children}</div>}
      <button onClick={() => setOpen((prev) => !prev)}>
        {open ? 'Close' : 'Open'}
      </button>
    </div>
  );
};
export default Accordion;
