import Layout from '../components/Layout';
import React from 'react';
import NumberPad from '../components/money/NumberPad';
import Tag from '../components/money/Tag';
import Note from '../components/money/Note';
import Catalog from '../components/money/Catalog';
function Money() {

    return (
        <Layout>
            <Tag/>
            <Note/>
            <Catalog/>
             <NumberPad/>
        </Layout>
    )
}
export default Money;