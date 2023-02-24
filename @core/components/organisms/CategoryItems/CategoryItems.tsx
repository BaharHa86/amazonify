import React from 'react';

import {
  simpleCategoryItems,
  wideCategoryItems,
} from '../../../data/categoryItems';
import Styles from './CategoryItems.module.scss';
import Grid from '../../atoms/Grid/Grid';
import CategoryItem from '../../molecules/CategoryItem/CategoryItem';
import Flex from '../../atoms/Flex/Flex';

function CategoryItems() {
  return (
    <main className={Styles.main_wrapper}>
      <section className={Styles.first_section}>
        <Grid variant="col_4" className={Styles.categoryItems}>
          {simpleCategoryItems.slice(0, 8).map((simpleItem) => {
            return (
              <CategoryItem
                variant="simple"
                key={simpleItem._id}
                title={simpleItem.title}
                url={simpleItem.url}
                href={simpleItem.href}
                className={Styles.test}
              />
            );
          })}
        </Grid>
      </section>
      <section className={Styles.section}>
        <Flex variant="col_cntr_cntr" className={Styles.wide}>
          {wideCategoryItems.slice(0, 2).map((wideItem) => {
            return (
              <CategoryItem
                variant="wide"
                key={wideItem._id}
                title={wideItem.title}
                images={wideItem.images}
              />
            );
          })}
        </Flex>
      </section>

      <section className={Styles.section}>
        <Grid variant="col_4">
          {simpleCategoryItems.slice(8, 12).map((simpleItem) => {
            return (
              <CategoryItem
                variant="simple"
                key={simpleItem._id}
                title={simpleItem.title}
                url={simpleItem.url}
                className={Styles.test}
              />
            );
          })}
        </Grid>
      </section>
      <section>
        <Flex variant="col_cntr_cntr" className={Styles.wide}>
          {wideCategoryItems.slice(2, 4).map((wideItem) => {
            return (
              <CategoryItem
                variant="wide"
                key={wideItem._id}
                title={wideItem.title}
                images={wideItem.images}
              />
            );
          })}
        </Flex>
      </section>
    </main>
  );
}

export default CategoryItems;
