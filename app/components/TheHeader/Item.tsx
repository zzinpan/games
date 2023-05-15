import React from "react";

type Item = {
  id: number;
  name: string;
};

type Props = {
    value: Item,
    selected: boolean,
    onClick: ( Item ) => void
};

const Constant = {

    className: [
        'inline-block',
        'cursor-pointer',
        'px-4',
        'py-2',
        'font-medium',
        'text-slate-700',
        'rounded hover:bg-slate-100',
        'hover:text-slate-900'
    ].join(' ')

};

const HeaderItem: React.FC<Props> = ({ value, selected, onClick }) => {

    const Computed = {
        selectedClassName() {
            if( selected ){
                return 'bg-slate-100 text-slate-900'
            }
            return '';
        }
    };

  return (
      <li className={`${Constant.className} ${Computed.selectedClassName()}`} onClick={onClick.bind(value, value)}>
        <a>{value.name}</a>
      </li>
  );
};

export default HeaderItem;