# Template for Vuejs with i18n support

### Set the locale message you want:
At the `/locales/en.ts`: 
```typescript
export default {
  en: {
      message: "My message works!"
  },
};
```
At the `/locales/pt-br.ts`: 
```typescript
export default {
  'pt-br': {
      message: "Minha mensagem funciona!"
  },
};
```

To use the message you can simply do:
```typescript
{{ $t('message') }}