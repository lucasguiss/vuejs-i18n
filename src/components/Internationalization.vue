<template>
  <div>
    <select v-model="selected" name="Idioma" @change="changeLanguage()">
      <option v-for="lang in languages" :value="lang" :key="lang.id">
        {{ lang.name }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { setI18nLanguage } from '@/i18n';
import { LanguageSelector } from '@/types';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Internationalization',
  data() {
    return {
      selected: {
        name: 'Portugues',
        id: 'pt-br',
      } as LanguageSelector,
      languages: [
        {
          name: 'Portugues',
          id: 'pt-br',
        } as LanguageSelector,
        {
          name: 'English',
          id: 'en',
        } as LanguageSelector,
      ] as Array<LanguageSelector>,
    };
  },
  methods: {
    changeLanguage(): void {
      const language = this.selected.id;
      if (!language) {
        return;
      }
      setI18nLanguage(language);
    },
  },
});
</script>
