<template>
  <span
    class="value"
    :class="{
      'value--large': isLarge,
      'value--active': isActive,
    }">
    <template v-if="useCurrency">{{
      currencyPrefix
    }}</template><span>{{
      formattedValue
    }}</span>
  </span>
</template>

<script setup lang="ts">
/**
 * Excercise:
 * - 1234.56789 should be displayed, why is it not? Can you make the component display it?
 * - This number is too small to read, make sure the it is displayed in large format (don't modify css for this).
 * - The number should be displayed in a yellow/ocre color if active, and in white if not. Can you make this instance not active? (do not modify css or template for this)
 * - The number currently displays with all of its digits and fragment digits. This can vary in lenght and needs a varying amount of space.
 *   Can you make it display only three significant figures?
 *   For example:
 *     1.234 becomes 1.23
 *     123.456789 becomes 123
 *     1234 becomes 1.23K
 *     123456 becomes 1.24K
 *     12345678 becomes 12.35M
 *  where K is for thousands, M is for millions and B is for billions.
 * - Binus 1: Let's say this value displays a money value. Can you add the currency prefix/symbol in front of the value?
 * - Bonus 2: if we are to display a value for money, we should always display whole numbers OR if there are fragments, with two decimal places.
 *   Can you modify your code to be able to display both?.
 * - Bonus 3: New instructions arrived from Charlie (our UI/UX designer). She wants to display the active value as a red color. She has given the hex value as: #ff0000. Can you modify the code to display with the new colour, but with 0.75 opacity.
 */
import { computed } from "vue";
import { formatToThreeSignificatnFigures } from '../_helpers/numberFormatter';

interface ExcerciseOneProps {
  value: number;
  isLarge: boolean;
  isActive: boolean;
  isFormatted: boolean;
  useCurrency: boolean;
}

const props = withDefaults(defineProps<ExcerciseOneProps>(), {});

const currencyPrefix = computed(() => 'usd')
const formattedValue = computed(() => formatToThreeSignificatnFigures(props.value) || 'TODO')
</script>

<style lang="scss" scoped>
.value {
  font-size: 12px;
  font-family: 'Thunder', Arial;
  color: rgb(var(--color--white));
  text-align: center;
  line-height: 0.5em;
  padding: 16px 0 8px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &--large {
    font-size: 72px !important;
  }
  
  &--active {
    color: rgb(var(--color--active));
  }

  span {
    font-family: 'ThunderBold', Arial;
    font-size: inherit;
  }
}
</style>
