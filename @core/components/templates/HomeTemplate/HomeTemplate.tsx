import React from 'react';

import Slider from '../../molecules/Slider/Slider';
import CategoryItems from '../../organisms/CategoryItems/CategoryItems';

function HomeTemplate() {
  return (
    <section>
      <Slider />
      <CategoryItems />
    </section>
  );
}

export default HomeTemplate;
