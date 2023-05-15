import React, {useState} from 'react';
import HeaderItem from "@/app/components/TheHeader/Item";

const TheHeader: React.FC = () => {

    const items = [
        { id: 1, name: 'introduction' },
        { id: 2, name: 'games' }
    ];

    const [selectedItemId, setSelectedItemId] = useState(1);

    const Methods = {

        onClickHeaderItem: ( clickedItem ) => {

            console.log(clickedItem);
            setSelectedItemId(clickedItem.id);

        }

    };

    return (
        <nav className="flex justify-center space-x-4">
            <ul>
                {items.map((item) => (
                    <HeaderItem key={item.id} value={item} selected={item.id === selectedItemId} onClick={Methods.onClickHeaderItem}></HeaderItem>
                ))}
            </ul>
        </nav>
  );
};

export default TheHeader;