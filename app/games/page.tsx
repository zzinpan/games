"use client";
import React, { useState } from 'react';

type Item = {
    id: number;
    name: string;
};

const ExampleComponent: React.FC = () => {
    const [items, setItems] = useState<Item[]>([
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Cherry' },
    ]);

    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
};

export default ExampleComponent;