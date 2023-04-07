import { evaluate } from 'mathjs';
import { useState } from 'react';

const rows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]];
export const operations = ['+', '-', '*', '/'];

const Calculator = () => {
  const [inputValue, setInputValue] = useState('');
  const [isStarting, setIsStarting] = useState(true);
  const handleClick = (selectedKey: string) => {
    setIsStarting(false);
    if (isStarting) setInputValue(selectedKey);
    else setInputValue((prev) => prev.concat(selectedKey));
  };
  return (
    <div>
      Calculator
      <input readOnly value={inputValue} />
      {rows.map((numbers, index) => {
        return (
          <div key={index} role="row">
            {numbers.map((num) => {
              return (
                <button key={num} onClick={() => handleClick(num.toString())}>
                  {num}
                </button>
              );
            })}
          </div>
        );
      })}
      {operations.map((operation) => (
        <button key={operation} onClick={() => handleClick(operation)}>
          {operation}
        </button>
      ))}
      <button
        onClick={() => {
          setInputValue(() => {
            setIsStarting(true);
            const result = evaluate(inputValue);
            return result.toString();
          });
        }}
      >
        =
      </button>
    </div>
  );
};
export default Calculator;
