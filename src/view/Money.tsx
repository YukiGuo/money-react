import Layout from '../components/Layout';
import React from 'react';
import NumberPad from '../components/money/NumberPad';
import Tag from '../components/money/Tag';
import Note from '../components/money/Note';
function Money() {

    return (
        <Layout>
            <Tag/>
            <Note/>
             <NumberPad/>
        </Layout>
    )
}
export default Money;