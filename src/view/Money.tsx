import Layout from '../components/Layout';
import React, {useState} from 'react';
import NumberPad from '../components/money/NumberPad';
import Tag from '../components/money/Tag';
import Note from '../components/money/Note';
import Catalog from '../components/money/Catalog';

function Money() {
    type Catalog = '+' | '-'
    const [selected, setSelected] = useState({
        tag: [] as string[],
        note:'',
        amount: 0,
        catalog: '-' as Catalog,
}
)
    ;
    return (
        <Layout>
            {selected.note}
            <Tag
                selected={selected.tag}
             onChange={(tag)=>{setSelected({... selected,tag})}}
            />
            <Note
                selected={selected.note}
                onChange={(note)=>{setSelected({... selected,note})}}
            />
            <Catalog
                selected={selected.catalog}
                onChange={(catalog)=>{setSelected({... selected,catalog})}}
            />
            <NumberPad
                selected={selected.amount}
                onChange={(amount)=>{setSelected({... selected,amount})}}
            />
        </Layout>
    );
}

export default Money;